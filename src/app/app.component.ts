import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';
import localeEn from '@angular/common/locales/en';

import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public selectedLanguage: string = 'en';
  public languages = ['bg', 'en']; 

  constructor( @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) { 
    registerLocaleData(localeBg, 'bg');
    registerLocaleData(localeEn, 'en');
  }

  public changeLanguage(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.i18NextService.changeLanguage(newLanguage);
  }
}
