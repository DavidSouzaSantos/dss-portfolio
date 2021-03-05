import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed:boolean = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['pt-br', 'en']);
    translate.setDefaultLang('pt-br');
    
  }

  ngOnInit() {
  }
  toggleNavbarCollapsing(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getLogo(lang:string){
    return `assets/img/logo-${lang}.png`;
  }

  changeLangueage(language:string){
    this.translate.setDefaultLang(language);
  }
}
