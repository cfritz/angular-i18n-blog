import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';
import localeEn from '@angular/common/locales/en';

import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public selectedLanguage: string = 'en';
  public languages = ['bg', 'en']; 

  constructor(public translate: TranslateService) { 
    registerLocaleData(localeBg, 'bg');
    registerLocaleData(localeEn, 'en');
  }

  public changeLanguage(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.translate.use(newLanguage);
  }
}
