// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'steamanalyst-app',
    appId: '1:199850533462:web:9077f8470be075bf7c11f7',
    databaseURL: 'https://steamanalyst-app-default-rtdb.firebaseio.com',
    storageBucket: 'steamanalyst-app.appspot.com',
    apiKey: 'AIzaSyB9RigV-WyBZqmF3v0NNVwKPJwtKPVLdSw',
    authDomain: 'steamanalyst-app.firebaseapp.com',
    messagingSenderId: '199850533462',
    measurementId: 'G-6ZB5XZD2D3',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
