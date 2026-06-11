# Google Cloud Run Deployment Guide

This document describes how to deploy the City Fresh Delivery website to Google Cloud Run.

## Prerequisites

1. **Google Cloud Account** - Create at [cloud.google.com](https://cloud.google.com)
2. **Google Cloud Project** - Create a new project
3. **Service Account** - Create a service account with Cloud Run Admin, Cloud Build Editor, and Container Registry Service Agent roles
4. **GitHub Repository** - Push code to your GitHub repository
5. **Cloudflare DNS** - Manage DNS records (already set up)

## Environment Variables Required

Before deployment, set up these secrets in your GitHub repository:

### GitHub Secrets (Settings > Secrets and variables > Actions)

- `GCP_PROJECT_ID` - Your Google Cloud Project ID
- `GCP_REGION` - Deployment region (e.g., `us-central1`, `us-east1`)
- `GCP_SA_KEY` - Service Account JSON key (base64 encoded)
- `INBOUND_API_KEY` - inbound.new API key (for email service)

### Cloud Run Environment Variables

Set directly in Cloud Run service settings:

- `NODE_ENV=production`
- `DISABLE_REUSE_PORT=true` (already set in Dockerfile)
- `PORT=8080` (already set in Dockerfile)

## Setup Steps

### 1. Create Google Cloud Project

```bash
# Set your project ID
export PROJECT_ID="your-project-id"
export REGION="us-central1"

# Create project
gcloud projects create $PROJECT_ID

# Set as active project
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### 2. Create Service Account

```bash
# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions Deployment"

# Grant necessary roles
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/run.admin

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/cloudbuild.builds.editor

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/storage.admin

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/iam.serviceAccountUser
```

### 3. Create and Export Service Account Key

```bash
# Create key
gcloud iam service-accounts keys create key.json \
  --iam-account=github-actions@$PROJECT_ID.iam.gserviceaccount.com

# Encode to base64 (for GitHub secrets)
# On Linux/Mac:
cat key.json | base64

# On Windows (PowerShell):
[Convert]::ToBase64String([IO.File]::ReadAllBytes('key.json')) | Set-Clipboard
```

### 4. Get inbound.new API Key

1. Visit [inbound.new/settings](https://inbound.new/settings)
2. Click "Create API Key"
3. Name it something like "City Fresh Delivery"
4. Copy the key and save it as a GitHub secret: `INBOUND_API_KEY`

### 5. Add GitHub Secrets

In your GitHub repository:
1. Go to Settings > Secrets and variables > Actions
2. Create these secrets:
   - `GCP_PROJECT_ID` = your-project-id
   - `GCP_REGION` = us-central1 (or your chosen region)
   - `GCP_SA_KEY` = (the base64 encoded key.json content)
   - `INBOUND_API_KEY` = (your inbound.new API key)

### 6. Set Cloud Run Environment Variables

After first deployment:

```bash
gcloud run services update city-fresh-delivery \
  --region=$REGION \
  --set-env-vars NODE_ENV=production,DISABLE_REUSE_PORT=true \
  --set-secrets INBOUND_API_KEY=INBOUND_API_KEY:latest
```

## Deployment

### Automatic Deployment (via GitHub Actions)

Push to `main` or `production` branch:

```bash
git add .
git commit -m "Deploy to Cloud Run"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the Docker image
2. Push to Google Container Registry
3. Deploy to Cloud Run
4. Print the deployment URL

### Manual Deployment

```bash
# Authenticate
gcloud auth login
gcloud config set project $PROJECT_ID

# Build image
docker build -t gcr.io/$PROJECT_ID/city-fresh-delivery:latest .

# Push image
docker push gcr.io/$PROJECT_ID/city-fresh-delivery:latest

# Deploy to Cloud Run
gcloud run deploy city-fresh-delivery \
  --image gcr.io/$PROJECT_ID/city-fresh-delivery:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --timeout 3600 \
  --set-env-vars NODE_ENV=production,DISABLE_REUSE_PORT=true \
  --set-secrets INBOUND_API_KEY=INBOUND_API_KEY:latest
```

## Cloudflare DNS Configuration

Add a CNAME record pointing to your Cloud Run service:

1. Get your Cloud Run URL: `gcloud run services describe city-fresh-delivery --platform managed --region $REGION --format 'value(status.url)'`
2. In Cloudflare DNS settings, add:
   - Type: CNAME
   - Name: @ (or your subdomain)
   - Content: (your Cloud Run URL without https://)
   - Proxy status: Proxied (or DNS only)

## Important Notes

### Production-Only Dependencies

The Dockerfile uses a multi-stage build:
- **Stage 1 (builder)**: Installs all dependencies including dev packages and builds the app
- **Stage 2 (runner)**: Only installs production dependencies to minimize image size

Dev packages like `vite`, `typescript`, `tsx`, etc. are NOT included in the production image, reducing the final image size by ~70%.

### Vite Imports

All Vite-related imports are **dynamic** and only run in development:
- `server/vite.ts` - Uses `await import("vite")` at function call time
- Production builds use pre-built static files from `dist/`

### Port Binding

The `reusePort: true` option doesn't work in Cloud Run's sandboxed environment. The Dockerfile sets `DISABLE_REUSE_PORT=true` which disables this for production.

### Email Service

The application uses **inbound.new** for email sending (replacing ZeptoMail):
- Admin notifications go to `info@cityfresh.co.za`
- User confirmations go to the email provided in the contact form
- From address: `Cledwyn from Lekker Network <cledwyn@lekker.network>`

## Troubleshooting

### Container fails to start

Check Cloud Logging:
```bash
gcloud run services describe city-fresh-delivery \
  --region=$REGION | grep -i url
```

View logs:
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=city-fresh-delivery" \
  --limit 50 \
  --format json
```

### Email not sending

1. Verify `INBOUND_API_KEY` is set as a secret in Cloud Run
2. Check the server logs for email errors
3. Confirm the API key is valid at [inbound.new](https://inbound.new)

### Deployment timeout

Increase timeout in Cloud Run settings or in the deployment command:
```bash
--timeout 3600  # 1 hour
```

## Scaling

Adjust Cloud Run settings based on traffic:

```bash
gcloud run services update city-fresh-delivery \
  --region=$REGION \
  --min-instances 1 \
  --max-instances 100 \
  --memory 512Mi \
  --cpu 1
```

## Cost Optimization

- **Cloud Run is pay-per-use**: You only pay when the service is handling requests
- **Set min-instances to 0**: Service scales to zero when not in use
- **Monitor usage**: Use Cloud Console to track costs
- **Consider committed use discounts** for sustained traffic

## Support

For issues or questions:
1. Check [Cloud Run troubleshooting docs](https://cloud.google.com/run/docs/troubleshooting)
2. Review application logs: `gcloud logging read ...`
3. Test locally with Docker: `docker build -t test . && docker run -p 8080:8080 test`
