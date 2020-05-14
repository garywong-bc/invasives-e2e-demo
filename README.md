# Demo of End-to-End testing

## Story

The work flow would be:
given the user has `data entry` access

1. Open https://dev-invasivesbc.pathfinder.gov.bc.ca/add
2. Click Invasive Plant Observation
3. Create observation record (completing form)
4. Submit observation
5. At a later date, User Opens https://dev-invasivesbc.pathfinder.gov.bc.ca/add
6. Click Invasive Plant Treatment (mechanical)
7. Create treatment record
   8 ) Select observation created under `Treatment Details` ->`Observations`(The final method for linking the treatments to observation is currently in progress & not developed yet)
8. Submit treatment
9. At a later date, User Opens https://dev-invasivesbc.pathfinder.gov.bc.ca/add
10. Click Invasive plant Monitoring (mechanical)
11. Create monitoring record
12. Select the treatment record created (This linking method is also not final, will be filtered based on location)
13. Submit monitoring record

## Local Install

```zsh
➜  invasives-e2e-demo npm install cypress --save-dev

> cypress@4.5.0 postinstall /Users/garywong/proj/invasives-e2e-demo/node_modules/cypress
> node index.js --exec install

Installing Cypress (version: 4.5.0)

  ✔  Downloaded Cypress
  ✔  Unzipped Cypress
  ✔  Finished Installation /Users/garywong/Library/Caches/Cypress/4.5.0

You can now open Cypress by running: node_modules/.bin/cypress open

https://on.cypress.io/installing-cypress

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN invasives-e2e-demo@1.0.0 No description
npm WARN invasives-e2e-demo@1.0.0 No repository field.

+ cypress@4.5.0
added 213 packages from 203 contributors and audited 302 packages in 57.698s
found 0 vulnerabilities
```

npm install -D garywong-bc/nrm-cypress-keycloak-commands#feature/svc-client

npm uninstall -D garywong-bc/nrm-cypress-keycloak-commands#feature/svc-client && npm uninstall -D garywong-bc/nrm-cypress-keycloak-commands && rm -rf node_modules/nrm-cypress-keycloak-commands

## Docker Test

## KeyCloak Setup

- as per https://github.com/wpic/sample-keycloak-getting-token and https://smartling.github.io/keycloak/docs/1.2.1.Smartling-SNAPSHOT/reference/en-US/html_single/#direct-access-grants

https://www.keycloak.org/docs/6.0/server_admin/#_service_accounts

invasives-bc-e2e

Root URL: https://dev-invasivesbc.pathfinder.gov.bc.ca

Direct Access Grants Enabled : True
Access Token Lifespan : 5 min
