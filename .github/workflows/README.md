
# GitHub Actions CI/CD for B2B SaaS

This workflow:
- Builds and pushes Docker image from backend/
- Pushes image to AWS ECR
- Deploys via Helm to Kubernetes

### Envs & Secrets Required

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- ECR_REPOSITORY
