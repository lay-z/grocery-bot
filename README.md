# Grocerie-bot

A google home bot to handle adding groceries to your prefered online store


Store Integrations:
[ ] Amazon fresh
[ ] Morissons
[ ] Tescos
[ ] Ocado
[ ] Sainsburys

## Development
Make sure that your node version is 8.11.2
(Use [nvm](https://github.com/creationix/nvm) as your node version manager)

* `npm install` to install all required packages
* `npm run login` to login in to firebase console
* `firebase use <PROJECT_ID>` to firebase to push functions to particular project. Your project_id can be found in the [Actions Console](https://console.actions.google.com/), under Overview > (Gear icon) > Project settings.
* `npm run deploy` to push the modified function code to firebase

You are then good to begin making changes.

__Make sure that your IDE is using the eslint rules to stop you have to deal with linting issues before commiting__

## Testing
TODO setup testing framework and understand testing better


## Deployment
To deploy to firebase run `npm run deploy` and this should push the modified functions to firebase