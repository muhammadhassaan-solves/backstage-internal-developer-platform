# Internal Developer Platform 

**Reducing new service setup time from a 3-days to under 60 seconds** while improving standardization, documentation, and developer experience across engineering teams.

> Built as a production-ready Internal Developer Platform using Backstage, designed to help engineering teams ship faster with consistent, secure, and well-documented services.

## Quick Demo

[![Watch the Demo](https://img.youtube.com/vi/vrIb-DB-_EE/0.jpg)](https://www.youtube.com/watch?v=vrIb-DB-_EE)

## Business Impact

| Before | After | Improvement |
|--------|-------|-------------|
| 2–3 days to create a new service | < 60 seconds | **95%+ faster** |
| Inconsistent project structure | Standardized Golden Path | Reduced tech debt |
| Scattered documentation | Auto-generated TechDocs | 100% documentation coverage |
| Manual onboarding | Self-service portal | Faster ramp-up for new engineers |
| No central service inventory | Full service catalog | Better visibility for managers |
## Architecture Overview

- Backstage Frontend (React UI)
- Backstage Backend (Node.js services)
- Scaffolder (Golden Path automation engine)
- GitHub (Source of truth)
- Kubernetes (Runtime platform)
- TechDocs (MkDocs-based documentation layer)
- CI/CD (GitHub Actions / Argo CD)
  
## Features

- **Golden Path Template** — Scaffold production-ready Node.js services in seconds
- **GitHub Integration** — Auto-create repos with full structure
- **Kubernetes Tab** — Live pod/deployment/service status per component
- **TechDocs** — Auto-generated docs site for every service
- **Team Ownership** — Multi-team RBAC (Alpha, Beta, Gamma)
- **Auto Catalog Discovery** — New repos appear in catalog automatically


## Tech Stack

- **Backstage** 1.50.0 
- **Node.js** 20+ (tested on v22.22.2)
- **Kubernetes** (kind/minikube/EKS/GKE)
- **GitHub** as source control
- **MkDocs** for TechDocs

## Golden Path Flow

1. Developer selects Node.js service template
2. Backstage Scaffolder collects service metadata
3. GitHub repo is automatically created
4. CI/CD pipeline is attached
5. Kubernetes deployment manifests are generated
6. Service is registered in Backstage Catalog
7. TechDocs site is created automatically

## Walk-through
<p align="center">
1. Developer Portal Home — Service Catalog Overview <br />
<img src="https://i.postimg.cc/Wz3DwkQ3/image.png"/>
<br />
<br />
2. Golden Path Scaffolder — Node.js Service Creation <br/>
<img src="https://i.postimg.cc/K8J8JzDj/image.png" />
<br />
<br />
3. Auto-Generated GitHub Repository — Standardized Service Structure <br/>
<img src="https://i.postimg.cc/8PXY4grQ/image.png"/>
<br />
<br />
4. Kubernetes Runtime View — Live Service Health & Pods <br/>
<img src="https://i.postimg.cc/K8yMdRLX/image.png" />
<br />
<br />

## Acknowledgments

Built while learning Internal Developer Platforms. Thanks to Spotify's Backstage.


## About Me

I built this project to demonstrate how modern Internal Developer Platforms can significantly improve engineering velocity, standardization, and developer happiness.

If you're looking for someone who can design and implement developer platforms that deliver real business value, feel free to reach out.

**Muhammad Hassaan**  
Platform / DevOps Engineer  
[LinkedIn](https://www.linkedin.com/in/hassaanofficial/) |  [Email](mailto:hassaan.solves@gmail.com)
