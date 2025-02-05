import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import{provideAnimations}from '@angular/platform-browser/animations'

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './_intercepotors/error.interceptor';
import { jwtInterceptor } from './_intercepotors/jwt.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './_intercepotors/loading.interceptor';
import { TimeagoModule } from 'ngx-timeago';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor,jwtInterceptor,loadingInterceptor])),
    provideHttpClient(),
    provideAnimations(),
    provideToastr({
      positionClass:'toast-bottom-right'
    }),
    importProvidersFrom(NgxSpinnerModule,TimeagoModule.forRoot())
  ]
};
