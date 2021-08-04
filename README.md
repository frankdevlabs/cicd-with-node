# Introduction into CICD using GitHub Actions
The goal of this is project is to document a simple test-develop-release flow.

## Requirements/steps
- [x] Create a [Docker image](https://github.com/frankdevlabs/cicd-with-node/blob/main/Dockerfile)
- [x] Integrate a continuous integration test, which validates the Jest tests.
- [x] Add versioning based upon the [SemVer Specification](https://semver.org/)
    - [x] Create version tag when push (or pull request merge) on main and next branch
    - [x] Create Docker image creation with version tag
- [x] Push to AWS ECS Fargate Cluster

## Versioning - commit messages
This template uses the GitHub Action [Git Version](https://github.com/marketplace/actions/git-version) for SemVer. A major, minor or patch upgrades are identified based upon commit messages:

- Major release: "breaking: " is used as (default) value.
- Minor release: "feature: " is used as (default) value. 
- Patch release: no identifier in git commit message is required.

## Further info: Deploying to AWS ECS Fargate Cluster
The [following guide](https://docs.github.com/en/actions/guides/deploying-to-amazon-elastic-container-service) has been used as basis for the GitHub Action used to deploy a new release of this repo. About setting up AWS:
- I have setup the Fargate Cluster, Service, Task and Container with ALB. 
- ['AWS Fargate: From Start to Finish for a NodeJS App' - Arik Liber](https://medium.com/@arliber/aws-fargate-from-start-to-finish-for-a-nodejs-app-9a0e5fbf6361)