# Cloud Run Deployment Checklist

Use this checklist before deploying to Google Cloud Run.

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run check` - TypeScript type checking passes
- [ ] Run `npm run build` - Build completes without errors
- [ ] Verify no console errors in dist/index.cjs
- [ ] Test locally: `NODE_ENV=production DISABLE_REUSE_PORT=true PORT=8080 node dist/index.cjs`
- [ ] All vite imports in server code are dynamic (not top-level)
- [ ] No ZeptoMail references remain in codebase

### Environment Variables
- [ ] INBOUND_API_KEY configured in GitHub secrets
- [ ] GCP_PROJECT_ID configured in GitHub secrets
- [ ] GCP_REGION configured in GitHub secrets
- [ ] GCP_SA_KEY (base64 encoded) in GitHub secrets

### Email Service
- [ ] inboundemail package installed (`npm list inboundemail`)
- [ ] server/email.ts exists and uses inbound.new SDK
- [ ] Email templates in routes.ts updated to use new sendEmail function
- [ ] Admin email address verified: info@cityfresh.co.za
- [ ] Test email sending locally in development mode

### Docker Build
- [ ] Dockerfile exists and uses multi-stage build
- [ ] .dockerignore exists and excludes unnecessary files
- [ ] Build locally: `docker build -t test .` completes successfully
- [ ] Test Docker image: `docker run -p 8080:8080 -e DISABLE_REUSE_PORT=true test`
- [ ] Container listens on port 8080

### GitHub Actions
- [ ] .github/workflows/deploy-cloud-run.yml exists
- [ ] Workflow file syntax is valid
- [ ] Service account key properly encoded in secrets

### Cloudflare DNS
- [ ] CNAME record created pointing to Cloud Run URL
- [ ] DNS propagation verified (may take a few hours)
- [ ] SSL certificate auto-provisioned by Cloud Run

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: Deploy to Google Cloud Run with inbound.new email service"
   git push origin main
   ```

2. **Monitor GitHub Actions**
   - Go to Actions tab in GitHub
   - Watch the deploy-cloud-run workflow
   - Verify each step completes successfully

3. **Verify Cloud Run Deployment**
   ```bash
   gcloud run services describe city-fresh-delivery --region us-central1
   ```

4. **Test the Deployment**
   - Visit the Cloud Run URL from GitHub Actions output
   - Verify the homepage loads
   - Test the contact form (email should be sent)
   - Check Cloud Logging for any errors

5. **Update Cloudflare DNS**
   - If not already done, add CNAME record
   - Test your custom domain loads correctly

## Post-Deployment Verification

- [ ] Website loads at the custom domain
- [ ] Contact form works and sends emails
- [ ] No 502/503 errors in Cloud Logging
- [ ] INBOUND_API_KEY warning doesn't appear in logs
- [ ] Performance acceptable (check response times in Cloud Console)
- [ ] SSL certificate valid (green lock in browser)

## Rollback Plan

If deployment fails:

1. **Check Cloud Logging**
   ```bash
   gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=city-fresh-delivery" --limit 50 --format json
   ```

2. **Revert to Previous Build**
   - If workflow failed before deployment, edit the workflow and retry
   - If Cloud Run has a bad revision, manually deploy previous image

3. **Check Common Issues**
   - Port not bound (check DISABLE_REUSE_PORT setting)
   - Missing environment variables (check Cloud Run service settings)
   - vite package in production bundle (verify server/vite.ts uses dynamic imports)

## Important Notes

### Port Configuration
- Cloud Run requires the app to listen on PORT specified in environment (default 8080)
- DISABLE_REUSE_PORT=true is critical for Cloud Run (reusePort not supported in sandboxed env)

### Vite Management
- All vite imports must be dynamic (await import()) 
- This ensures vite package is never required at production startup
- vite-config.ts is only used during build time

### Email Service
- The old ZEPTOMAIL_TOKEN environment variable is no longer used
- Set INBOUND_API_KEY instead (via Cloud Run service settings or deployment workflow)
- Email logs will show success/failure status

### Development vs Production
- Development: Uses `npm run dev` with hot reload
- Production: Uses pre-built dist/ files, no vite at runtime

## Monitoring

Set up alerts in Cloud Console:
1. Go to Cloud Run service
2. Click "Logs"
3. Create uptime checks or error rate alerts
4. Enable notifications to your email

## Support Resources

- [Cloud Run Troubleshooting](https://cloud.google.com/run/docs/troubleshooting)
- [Cloud Run Quotas](https://cloud.google.com/run/quotas)
- [inbound.new Documentation](https://inbound.new/docs)
