import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import Backend from 'i18next-http-backend';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function appInit(i18next: ITranslationService) {
  return () => i18next.use(Backend).init({
    supportedLngs: ['en', 'bg'],
    fallbackLng: 'en',
    debug: true,
    returnEmptyString: false,
    backend: {
      loadPath: 'assets/i18n/{{lng}}.json'
    },
  });
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
{
  provide: APP_INITIALIZER,
  useFactory: appInit,
  deps: [I18NEXT_SERVICE],
  multi: true
},
{
  provide: LOCALE_ID,
  deps: [I18NEXT_SERVICE],
  useFactory: localeIdFactory
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    I18NextModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpClient, I18N_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
