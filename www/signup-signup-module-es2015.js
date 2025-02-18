(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"header-align\">\n    <p style=\"font-size: 28px;font-weight: 600;padding-left: 4px;\">Sign Up</p>  \n    <p style=\"font-size: 15px;margin-top: -16px;color: #00000080;padding-left: 4px;\">Tell us more about yourself</p>  \n  </div>\n  <div mode=\"ios\" class=\"content-align\">\n    <form (ngSubmit)=\"signupForm()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">First Name</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <!-- <br> -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Last Name</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Mobile Number</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"number\" maxLength=\"10\" [(ngModel)]=\"signupFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mob_number' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label class=\"required ion-label\">State</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ionic-selectable  [(ngModel)]=\"signupFormField.state\" name=\"state\" [items]=\"states\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_state' | translate }}\"  [canSearch]=\"true\" (onChange)=\"changeState($event)\" class=\"ion-select\">\n            </ionic-selectable>          \n          </ion-item> \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"required ion-label\">City</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ionic-selectable [(ngModel)]=\"signupFormField.city\" name=\"city\" [items]=\"cities\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_city' | translate }}\" searchPlaceholder=\"{{ 'search_city' | translate }}\" [canSearch]=\"true\" class=\"ion-select\">\n            </ionic-selectable>          \n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Pincode</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"tel\" [(ngModel)]=\"signupFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\" maxLength=\"6\" minLength=\"6\" [pattern]=\"pincode_pattern\" class=\"ion-input\" >\n          </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" color=\"primary\" class=\"login-btn\" expand=\"block\">\n            {{ 'sign_up' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row style=\"margin-top: 20px;font-size: smaller;\">\n      <ion-col size=\"12\">\n         {{ 'already_have_an_acc' | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"font-size: smaller;color: #015c8d;\">\n      <ion-col (click)=\"goLogin()\">\n        <b>{{ 'sign_in' | translate }}</b>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content class=\"ion-padding\">\n  \n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center\">\n      <img src=\"../../assets/imgs/logo.png\" />      \n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-grid>\n      <form (ngSubmit)=\"signupForm()\">\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\" ></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\" ></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"call\"></ion-icon></ion-label>\n            <ion-input type=\"number\" maxLength=\"10\" [(ngModel)]=\"signupFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mob_number' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n     <ion-row>\n       \n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\" style=\"-webkit-flex: none!important; \n            flex: none!important;\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            <ionic-selectable  [(ngModel)]=\"signupFormField.state\" name=\"state\" [items]=\"states\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_state' | translate }}\"  [canSearch]=\"true\" (onChange)=\"changeState($event)\">\n            </ionic-selectable>\n           \n          </ion-item>\n        </ion-row>\n        <ion-row> \n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\" style=\"-webkit-flex: none!important; \n            flex: none!important;\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            \n            <ionic-selectable   #cityComponent \n                [(ngModel)]=\"signupFormField.city\" \n                name=\"city\" \n                [items]=\"cities\" \n                itemValueField=\"id\" \n                itemTextField=\"name\" \n                placeholder=\"{{ 'select_city' | translate }}\" \n                searchPlaceholder=\"{{ 'search_city' | translate }}\" \n                [canSearch]=\"true\"    \n              >\n            \t\n            </ionic-selectable>\n           \n          </ion-item>\n        </ion-row> \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"signupFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\" maxLength=\"6\" minLength=\"6\" [pattern]=\"pincode_pattern\"></ion-input>\n          </ion-item>\n        </ion-row> \n        <ion-button class=\"login-btn\"   shape=\"round\" color=\"secondary\"  expand=\"block\" slot=\"start\" type=\"submit\">\n        \t<ion-icon  name=\"md-log-in\" style=\"margin-right: 8px;\"></ion-icon> {{ 'sign_up' | translate }}\n        </ion-button>\n      </form>\n      <ion-row class=\"center\" style=\"margin-top: 20px;\">\n\t\t<ion-col size=\"12\" class=\"sign-up-link\">\n\t\t\t {{ 'already_have_an_acc' | translate }} <button  (click)=\"goLogin()\"> <ion-icon name=\"lock-closed-sharp\"></ion-icon> {{ 'sign_in_here' | translate }} </button>\n\t\t</ion-col>\n\t  </ion-row>\n\n  </ion-grid>\n</ion-list>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");









let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-align {\n  margin-top: 25%;\n  padding-left: 23px;\n  text-align: center;\n}\n\n.content-align {\n  margin-top: 10%;\n  padding-left: 23px;\n}\n\n.login-btn {\n  width: 95%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  color: white;\n}\n\n.icon-align {\n  font-size: smaller;\n  padding-left: 10px;\n}\n\n.ion-select {\n  width: 100% !important;\n  max-width: 100%;\n  --padding-start: 0;\n  min-height: 33px;\n  border-radius: 10px;\n  padding-left: 10px;\n  background: #d8e6ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hbGlnbntcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtYWxpZ257XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgd2lkdGg6IDk1JTtcbiAgLS1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmljb24tYWxpZ257XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtaW4taGVpZ2h0OiAzM3B4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Q4ZTZlZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");
/* harmony import */ var _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/push-notification/push-notification */ "./src/app/providers/push-notification/push-notification.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let SignupPage = class SignupPage {
    constructor(toastCtrl, loadingCtrl, apiService, events, token, translate, pushNotification, menuCtrl, formBuilder, datePicker, router) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.token = token;
        this.translate = translate;
        this.pushNotification = pushNotification;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.datePicker = datePicker;
        this.router = router;
        this.error = null;
        this.loading = {};
        this.states = [];
        this.pincode_pattern = "[0-9]{6}";
        this.cities = [];
        this.signupFormField = {
            username: null,
            email: null,
            first_name: null,
            last_name: null,
            password: null,
            state: null,
            city: null,
            other_city: null,
            profile_pic: null,
            pincode: null,
            date_of_birth: null
        };
        this.tran_please_wait = 'Please Wait';
        this.tran_required_mobile_no = "Please Enter Your Mobile No";
        this.tran_required_email = "Please Enter Your Email";
        this.tran_required_first_name = "Please Enter Your First Name";
        this.tran_required_last_name = "Please Enter Your Last Name";
        this.tran_required_state = "Please Select Your State";
        this.tran_required_city = "Please Select Your City";
        this.tran_required_password = "Please Enter Your Password";
        this.tran_required_pincode = "Please Enter Your PIN Code";
        this.menuCtrl.enable(false);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('required_first_name').subscribe(res => { this.tran_required_first_name = res; });
        this.translate.get('required_last_name').subscribe(res => { this.tran_required_last_name = res; });
        this.translate.get('required_mobile_no').subscribe(res => { this.tran_required_mobile_no = res; });
        // this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });
        this.translate.get('required_state').subscribe(res => { this.tran_required_state = res; });
        this.translate.get('required_pincode').subscribe(res => { this.tran_required_pincode = res; });
        this.translate.get('required_city').subscribe(res => { this.tran_required_city = res; });
        // this.translate.get('required_password').subscribe(res => { this.tran_required_password = res; });
        this.listenToUserEvents();
        this.otherCityForm = this.formBuilder.group({
            other_city: [''],
        });
    }
    ngOnInit() {
        this.loadStates();
    }
    loadStates() {
        this.apiService.states().subscribe(data => this.handleStates(data), error => console.log(error));
    }
    handleStates(data) {
        this.states = data.states;
    }
    changeState($event) {
        this.cities = [];
        console.log('state', $event);
        this.loadCities($event.value['id']);
    }
    loadCities(state_id) {
        this.apiService.cities(state_id).subscribe(data => {
            this.handleCities(data);
        }, error => console.log(error));
    }
    handleCities(data) {
        this.cities = data.cities;
    }
    listenToUserEvents() {
        this.events.getEvent().subscribe(data => {
            if (data.name == 'signup:success') {
                this.token.handle(data.access_token);
                this.pushNotification.init();
                if (data.primary_verify == 0) {
                    this.router.navigate(['verification', data.params.username]);
                }
                else {
                    this.router.navigate(['login']);
                }
            }
        });
        this.events.getEvent().subscribe((data) => {
            if (data.name == 'signup:failed') {
                this.loadingCtrl.dismiss();
            }
        });
    }
    ionViewDidLoad() {
    }
    goLogin() {
        this.router.navigate(['login']);
    }
    signupForm() {
        if (this.signupFormField.first_name == '' || this.signupFormField.first_name == null) {
            this.presentToast(this.tran_required_first_name);
        }
        else if (this.signupFormField.last_name == '' || this.signupFormField.last_name == null) {
            this.presentToast(this.tran_required_last_name);
        }
        else if (this.signupFormField.username == '' || this.signupFormField.username == null) {
            this.presentToast(this.tran_required_mobile_no);
        }
        else if (this.signupFormField.state == '' || this.signupFormField.state == null) {
            this.presentToast(this.tran_required_state);
        }
        else if (this.signupFormField.city == '' || this.signupFormField.city == null) {
            this.presentToast(this.tran_required_city);
        }
        else if (this.signupFormField.pincode == '' || this.signupFormField.pincode == null) {
            this.presentToast(this.tran_required_pincode);
        }
        else {
            this.presentLoading();
            if (this.signupFormField.city.id == 0) {
                var signupFormValues = {
                    'username': this.signupFormField.username,
                    'email': null,
                    'first_name': this.signupFormField.first_name,
                    'last_name': this.signupFormField.last_name,
                    'password': null,
                    'state': this.signupFormField.state.id,
                    'city': null,
                    'other_city': this.signupFormField.city.name,
                    'profile_pic': null,
                    'pincode': this.signupFormField.pincode,
                };
            }
            else {
                var signupFormValues = {
                    'username': this.signupFormField.username,
                    'email': null,
                    'first_name': this.signupFormField.first_name,
                    'last_name': this.signupFormField.last_name,
                    'password': null,
                    'state': this.signupFormField.state.id,
                    'city': this.signupFormField.city.id,
                    'other_city': null,
                    'profile_pic': null,
                    'pincode': this.signupFormField.pincode,
                };
            }
            console.log('signupFormValues', signupFormValues);
            this.apiService.signup(signupFormValues).subscribe(data => this.handleResponse(data), error => this.handleError(error));
        }
    }
    handleResponse(data) {
        this.loadingCtrl.dismiss();
        this.events.publish({ name: 'signup:success', params: data });
        this.signupFormField = {
            username: null,
            email: null,
            first_name: null,
            last_name: null,
            password: null,
            state: null,
            city: null,
            other_city: null,
            profile_pic: null,
            pincode: null,
            date_of_birth: null
        };
    }
    handleError(error) {
        this.loadingCtrl.dismiss();
        this.events.publish({ name: 'signup:failed', params: '' });
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        this.presentToast(errorMsg);
    }
    cityChange(event) {
    }
    onAddCity(event) {
        this.otherCityForm.reset();
        this.otherCityForm.get('other_city').setValue(event.component.searchText);
        event.component.showAddItemTemplate();
    }
    addCity() {
        this.signupFormField.city = ({
            id: 0,
            name: this.otherCityForm.get('other_city').value
        });
        this.otherCityForm.reset();
        this.cityComponent.hideAddItemTemplate();
        this.cityComponent.close();
    }
    onSearchFail(event) {
        if (event.component.hasSearchText) {
            // Clean form.
            this.otherCityForm.reset();
            // Copy search text to port name field, so
            // user doesn't have to type again.
            this.otherCityForm.get('other_city').setValue(event.component.searchText);
            // Show form.
            event.component.showAddItemTemplate();
        }
    }
    onSearchSuccess(event) {
        // Hide form.
        event.component.hideAddItemTemplate();
    }
    openDateDailog() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(date => this.formatDate(date), err => console.log('Error occurred while getting date: ', err));
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        this.signupFormField.date_of_birth = [year, month, day].join('-');
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
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
    textOnlyValidation(event) {
        const pattern = /[a-zA-Z ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_9__["PushNotificationProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
SignupPage.propDecorators = {
    cityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['cityComponent',] }]
};
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map