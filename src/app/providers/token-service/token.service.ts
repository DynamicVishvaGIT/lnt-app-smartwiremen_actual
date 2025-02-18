import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    /* login: 'https://smartwiremen.com/api/auth/login',
    // signup: 'https://smartwiremen.com/api/auth/signup', */
    // login: 'https://abc.socialtitli.co.in/api/auth/login',
    login: 'https://smartwiremen.com/api/auth/login',
    // signup: 'https://abc.socialtitli.co.in/api/auth/signup'
    signup: 'https://smartwiremen.com/api/auth/signup'
  };

  constructor(public http: HttpClient) {
    
  }

  handle(token) {
  	this.set(token);
  }

  set(token) {

  	localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('save_username');
    localStorage.removeItem('goto_scheme_page');
    console.log('save',localStorage.getItem('save_username'))
  }

  isValid() {

    let token = this.get();
    if (token) {
    	const payload = this.payload(token);
    	if (payload) {
        	return (<any>Object).values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      	}
    }
    return false;
  }
  
  payload(token) {

    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {

    return JSON.parse(atob(payload));
  }

  loggedIn() {

    return this.isValid();
  }

  setLang(lang) {

    localStorage.setItem('lang', lang);
  }

  getLang() {
    return localStorage.getItem('lang');
  }
}
