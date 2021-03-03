import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['pt-br', 'en']);
    translate.setDefaultLang('pt-br');
    console.log(translate.getDefaultLang());
  }

  ngOnInit() {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getLogo(lang:string){
    return `assets/img/logo-${lang}.png`;
  }
}
