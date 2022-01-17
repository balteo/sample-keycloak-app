### How to setup and run the app:

- `npm install`
- `npm run start:keycloak-ng-app`

### How to setup keycloak:

- The name of the realm is: `myrealm`
- The name of the client is: `myclient`
- The login redirect uri is: `http://localhost:4200/private`
- The logout redirect uri is: `http://localhost:4200/public`


### List of questions: 

- ~~I have an issue with logging out with keycloak.js~~ [See detailed question here](https://keycloak.discourse.group/t/issue-with-keycloack-js-s-logout-method-causing-a-cancelled-request-in-chrome/12664)
- ~~I have an issue with the authenticated method from keycloak.js~~ [See detailed question here](https://keycloak.discourse.group/t/keycloak-js-s-authenticated-method-returning-true-whereas-i-have-logged-out-all-sessions/12663)
- ~~What is the difference between the implicit and standard flow? Which one should I choose?~~
- ~~What is the refresh/update token method for? Should I use it?~~
- ~~Can you provide a list of documentation links about the concepts of Keycloak and openid connect?~~
- ~~What should I know about the backend <==> keycloak interaction?~~
- What are the **state**, **session state**, & **code** parameters that I see in the redirect url after logging in?
- Do I need those parameters? If no, how can I avoid having them in the redirect url?

### List of TODOs: 

- Implement scheduleRenewal method such as in: [OAuth0 sample](https://github.com/auth0-samples/auth0-pnp-exampleco-timesheets/blob/a38bb8667520db7c06db0ea74f6110232e776299/timesheets-spa/angular/src/app/auth/auth.service.ts#L115)
- Implement backend in PHP
- Implement conditions on send access token to backend (whitelist)?
- Implement REACT app with hook?
