import {BrowserModule, Title} from '@angular/platform-browser';
import {ErrorHandler, NgModule, PLATFORM_ID} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {HomeModule} from './home/home.module';
import {isPlatformBrowser} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    HomeModule,
    AppRoutingModule,

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
