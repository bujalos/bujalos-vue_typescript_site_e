# bujalos_editor_coding-challenge

Application build with vue and typescript.

## Dependencies (version 0.1)

This project was build on:
- Node v12.18.3
- vue/cli 4.4.6
- Typescript 3.9.3
- vuex-module-decorators 0.17
- vuex-class 0.3.2

## API

Api wasn't provided therefore I have did create a my own data structure inside the project.
see /types/user.ts

## Vuex
The store uses 'vuex-module-decorators' wrapper for Typescript support. I have divided the store into modules.
User modules has a pre-populated data structure for testing purposes. The REST services are commented out and the data is stored only inside the vuex's store.

## Layout structure (from top to bottom)
The "App" component has 3 sub-components (topPanel, Navigation, Main).

### TopPanel
- functional locale switcher.
- dummy icons

### Navigation
- functional company name edit option
- functional routes for each page

### Main
- Serves as a placeholder for all the views.

### Account (Main -> Account)
The Account view contains 3 components and some of those have additional smaller components:

#### UserForm
- Form saves and pulls the the data from the vuex store, the REST service is commented out.
- Password & change email doesn't have a functionality (needs more secure way of verifiation beforehand).


#### UsageForm
- Shows the user usage data.
- Upgrade button is integrated and ready to add some further functionality.

#### UserTypeForm
- Functional 'button style' component, which gets higlighted depending on user.type. On click it sets/changes the user's type.





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

