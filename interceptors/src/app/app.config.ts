import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { loginInterceptors } from './loginInterceptors';
import { loginInterceptorsDI } from './loginInterceptorsDi';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration() , 
//     provideHttpClient(withInterceptors([loginInterceptors]))],
// };



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration() , 
    provideHttpClient(withInterceptorsFromDi()),
    {provide : HTTP_INTERCEPTORS , useClass : loginInterceptorsDI , multi : true}
  ],
};
