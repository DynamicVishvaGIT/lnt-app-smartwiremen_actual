(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"logo-pos\">\n    <img src=\"assets/logo/Lauritz_Knudsen.svg\" class=\"logo\">\n  </div>\n  <div class=\"header-align\">\n    <p style=\"font-size: 28px;font-weight: 600;padding-left: 4px;\">Sign In</p>  \n    <p style=\"font-size: 15px;margin-top: -16px;color: #00000080;padding-left: 4px;\">Enter your details to proceed further</p>  \n  </div>\n  <div mode=\"ios\" class=\"content-align\">\n    <form (ngSubmit)=\"loginForm()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required\" style=\"color: black!important;font-size: small;font-weight: 500;\">Username(Primary mobile number)</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"loginFormField.username\" name=\"username\"  placeholder=\"{{ 'enter_mobile_no' | translate }}\" class=\"ion-input\" >\n              <ion-icon slot=\"start\" name=\"call\" aria-hidden=\"true\" class=\"icon-align\"></ion-icon>\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" color=\"primary\" class=\"login-btn\" expand=\"block\">\n            {{ 'sign_in' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content class=\"ion-padding\">\n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center\">\n      <img src=\"../../assets/imgs/logo.png\" />      \n    </ion-col>\n  </ion-row>\n  <form (ngSubmit)=\"loginForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-label ><ion-icon slot=\"start\" name=\"call-sharp\"></ion-icon></ion-label>\n        <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"loginFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mobile_no' | translate }}\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"login-btn\" size=\"default\" strong=\"true\" color=\"secondary\"  expand=\"block\" shape=\"round\" type=\"submit\">\n      <ion-icon class=\"log-icon\"  name=\"md-log-in\"  ></ion-icon> {{ 'sign_in' | translate }}\n    </ion-button>\n  </form>  \n  <br>\n  <ion-row class=\"center\">\n    <ion-col size=\"12\" class=\"sign-up-link\">\n      {{ 'dont_have_account' | translate }} <button (click)=\"goSignup()\"> <ion-icon name=\"lock-closed\"></ion-icon> {{ 'sign_up' | translate }} </button>\n    </ion-col>\n  </ion-row>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('dashboard-bg.jpg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.logo-pos {\n  text-align: center;\n  margin-top: 20%;\n}\n\n.logo {\n  width: 250px;\n  height: 125px;\n}\n\n.header-align {\n  margin-top: 25%;\n  padding-left: 23px;\n  text-align: center;\n}\n\n.content-align {\n  margin-top: 10%;\n  padding-left: 23px;\n}\n\n.login-btn {\n  width: 95%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  font-family: \"Poppins-Regular\";\n  color: white;\n}\n\n.icon-align {\n  font-size: smaller;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw4R0FBQTtFQUVBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9kYXNoYm9hcmQtYmcuanBnJyk7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubG9nby1wb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTI1cHg7XG59XG5cbi5oZWFkZXItYWxpZ257XG4gIG1hcmdpbi10b3A6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWFsaWdue1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiA5NSU7XG4gIC0tYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pY29uLWFsaWdue1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAuYXBwLWljb24tY29udGFpbmVyIHtcbi8vICAgcGFkZGluZy10b3A6IDMzcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAzM3B4O1xuLy8gfVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogI2Y0YjQwNCAhaW1wb3J0YW50O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyBpb24taXRlbSB7XG4vLyAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuLy8gICBjb2xvcjogIzBhNGY4Yjtcbi8vIH1cblxuLy8gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuXG4vLyBpb24tYnV0dG9uIHtcbi8vICAgLS1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gfVxuXG4vLyAuY2VudGVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAuc2lnbi11cC1saW5rIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gfVxuXG4vLyAuc2lnbi11cC1saW5rIGJ1dHRvbiB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBjb2xvcjogIzExMTtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vIH1cblxuLy8gLml0ZW0taGFzLWZvY3VzIHtcbi8vICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbi8vIH1cbi8vIC5sb2ctaWNvbiB7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gfVxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/push-notification/push-notification */ "./src/app/providers/push-notification/push-notification.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");









let LoginPage = class LoginPage {
    constructor(toastController, loadingCtrl, apiService, token, translate, pushNotification, menuCtrl, router, events, changeDetector) {
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.token = token;
        this.translate = translate;
        this.pushNotification = pushNotification;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.changeDetector = changeDetector;
        this.error = null;
        this.loading = {};
        this.loginFormField = {
            username: '',
            password: ''
        };
        this.tran_please_wait = 'Please Wait';
        this.tran_required_mobile_no = 'Please Enter Your Mobile No';
        this.tran_required_password = 'Please Enter Your Password';
        this.menuCtrl.enable(false);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
        this.translate.get('required_password').subscribe(res => { this.tran_required_password = res; });
        this.listenToUserEvents();
        console.log('a', this.save_username);
    }
    ngOnInit() {
    }
    // ionViewDidEnter(){
    //   // this.listenToUserEvents()
    // }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
    listenToUserEvents() {
        console.log('1', this.save_username);
        this.events.getEvent().subscribe(data => {
            if (data) {
                if (data.name == 'user:login') {
                    this.token.handle(data.params.access_token);
                    this.pushNotification.init();
                    if (data.params.primary_verify == 0 || this.save_username == '' || this.save_username == null) {
                        this.router.navigate(['verification', data.params.username]);
                    }
                    else {
                        console.log('111');
                        this.router.navigate(['tabs']);
                    }
                }
                else if (data.name == 'user:login-failed') {
                    this.loadingCtrl.dismiss();
                }
            }
        });
    }
    ionViewWillEnter() {
        this.save_username = localStorage.getItem('save_username');
        console.log('2', this.save_username);
        // check for token 
        /*let accesstoken = this.token.get();
    
        if(accesstoken != '' && accesstoken != null){
          
          this.loading = this.loadingCtrl.create({
              spinner: 'crescent',
              content: this.tran_please_wait+'...',
              dismissOnPageChange: true
            });
    
            this.loading.present().then(() => {
               this.apiService.refresh_access_token().subscribe(
                data => this.handleResponse(data),
                err => {
                  this.loading.dismiss();
                }
              );
           });
        }*/
        if (this.save_username != '' && this.save_username != null) {
            const loading = this.presentLoading();
            this.apiService.login({ 'username': this.save_username, password: '' }).subscribe(data => this.handleResponse(data), error => {
                this.loadingCtrl.dismiss();
                if (error.status == 401) {
                    this.token.remove();
                }
            });
        }
    }
    goSignup() {
        // this.navCtrl.push(ProfilePage);
        // this.navCtrl.setRoot(ProjectLeadPage);
        // this.navCtrl.setRoot(PassbookPage);
        this.router.navigate(['signup']);
    }
    goHome() {
        // this.navCtrl.push(TabsPage);
    }
    loginForm() {
        if (this.loginFormField.username == '' || this.loginFormField.username == null) {
            this.presentToast(this.tran_required_mobile_no);
        }
        else {
            const loading = this.presentLoading();
            this.apiService.login(this.loginFormField).subscribe(data => {
                this.handleResponse(data);
                this.loginFormField = {
                    username: '',
                    password: ''
                };
            }, error => {
                this.handleError(error);
            });
        }
    }
    handleResponse(data) {
        console.log('3');
        this.loadingCtrl.dismiss();
        this.events.publish({ name: 'user:login', params: data });
        // this.listenToUserEvents()
        this.apiService.firstLogin().then(data => {
            console.log('successful', data);
        }).catch(error => {
            console.log('err', error);
        });
    }
    handleError(error) {
        console.log('4');
        this.loadingCtrl.dismiss();
        this.events.publish({ name: 'user:login-failed', params: '' });
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error['error'];
        }
        // else if(error.status = 412){
        //   errorMsg = error.error.error;
        // }
        else {
            // errorMsg = error.error.error;
            errorMsg = error.error['error'];
        }
        this.presentToast(errorMsg);
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'crescent',
                message: this.tran_please_wait + '...',
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_5__["PushNotificationProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map