# Introduction into CICD using GitHub Actions
The goal of this is project is to document a simple test-develop-release flow.

## Requirements/steps
- [x] Create a [Docker image](https://github.com/frankdevlabs/cicd-with-node/blob/main/Dockerfile)
- [x] Integrate a continuous integration test, which validates the Jest tests.
- [x] Add versioning based upon the [SemVer Specification](https://semver.org/)
    - [x] Create version tag when push (or pull request merge) on main and next branch
    - [x] Create Docker image creation with version tag
- [ ] Push to a public cloud server

## Versioning - commit messages
This template uses the GitHub Action [Git Version](https://github.com/marketplace/actions/git-version) for SemVer. A major, minor or patch upgrades are identified based upon commit messages:

- Major release: "breaking: " is used as (default) value.
- Minor release: "feature: " is used as (default) value. 
- Patch release: no identifier in git commit message is required.