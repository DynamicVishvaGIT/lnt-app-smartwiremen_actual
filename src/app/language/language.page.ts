import { Component, OnInit } from '@angular/core';
import { TokenService } from '../providers/token-service/token.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

 

  ngOnInit() {
  }
  default_lang:any;  
  langs:any = [];	
  constructor(
    public token: TokenService,
    public translate: TranslateService,
    public router:Router
  ) {
  	this.default_lang = token.getLang() ?  token.getLang() : 'en';
  	this.langs = [
      { 'title': 'English', 'value' : 'en'},
      { 'title': 'हिन्दी', 'value' : 'hi'},
      { 'title': 'मराठी', 'value' : 'mr'},
      { 'title': 'ગુજરાતી', 'value' : 'gu'},
      { 'title': 'ਪੰਜਾਬੀ', 'value' : 'pa'},
      { 'title': 'বাংলা', 'value' : 'bn'},
      { 'title': 'తెలుగు', 'value' : 'te'},
      { 'title': 'தமிழ்', 'value' : 'ta'},
      // { 'title': 'മലയാളം', 'value' : 'ml'},
    ];
  }

  ionViewDidLoad() {

  }

  changeLang($event) {
    console.log($event)
    this.default_lang = $event.detail.value;
    this.token.setLang(this.default_lang);
    this.translate.use(this.default_lang);
  }
  goBack(){
    this.router.navigate(['home'])
  }
}
