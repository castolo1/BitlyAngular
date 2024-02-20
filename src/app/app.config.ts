import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { shortInterceptor } from './services/short.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(),
    //Tener en cuenta esto para futuros desarrollos
    provideHttpClient(withInterceptors([shortInterceptor])
    ),
  ],
};
