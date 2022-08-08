// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:'http://10.1.1.134:4107',
  // url:'http://127.0.0.1:4107'
  // url:'http://127.0.0.1:4202/api',
  // vtsURL: 'http://34.233.90.129:8000/',
  vtsURL:'http://127.0.0.1:8000/',//local server running on my backend folder
  // url: 'http://10.1.1.139:8001/api',//public ip
  // url:'https://35.193.11.55:3306/api',
  imgUrl: 'http://10.1.1.139:8001/images/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
