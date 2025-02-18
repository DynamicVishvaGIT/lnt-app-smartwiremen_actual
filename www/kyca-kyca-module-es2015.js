(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kyca-kyca-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kyca/kyca.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyca/kyca.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>KYC Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <ion-card class=\"ion-no-padding\">\n        <ion-card-content>\n          <ion-card-subtitle>Pan & Aadhaar Linked Mobile Number</ion-card-subtitle>\n          <ion-card-title>{{kyc_status.linked_phonenumber}}</ion-card-title>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n    <ion-card class=\"ion-no-padding\">\n      <ion-card-header>\n        <img src=\"{{kyc_status.pan_card_img}}\" alt=\"\">\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-subtitle>Pan Card Number</ion-card-subtitle>\n        <ion-card-title>{{kyc_status.pan_card_no}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n    <ion-card class=\"ion-no-padding\">\n      <ion-card-header>\n        <img src=\"{{kyc_status.aadhar_img}}\" alt=\"\">\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-subtitle>Aadhaar Card Number</ion-card-subtitle>\n        <ion-card-title>{{kyc_status.aadhar_no}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n    <ion-card class=\"ion-no-padding\">\n      <ion-card-header>\n        <img src=\"{{kyc_status.cancel_check_img}}\" alt=\"\">\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-subtitle>Cancel Cheque Number</ion-card-subtitle>\n        <ion-card-title>{{kyc_status.cancel_check_no}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/kyca/kyca-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/kyca/kyca-routing.module.ts ***!
  \*********************************************/
/*! exports provided: KycaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycaPageRoutingModule", function() { return KycaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kyca_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kyca.page */ "./src/app/kyca/kyca.page.ts");




const routes = [
    {
        path: '',
        component: _kyca_page__WEBPACK_IMPORTED_MODULE_3__["KycaPage"]
    }
];
let KycaPageRoutingModule = class KycaPageRoutingModule {
};
KycaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KycaPageRoutingModule);



/***/ }),

/***/ "./src/app/kyca/kyca.module.ts":
/*!*************************************!*\
  !*** ./src/app/kyca/kyca.module.ts ***!
  \*************************************/
/*! exports provided: KycaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycaPageModule", function() { return KycaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _kyca_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kyca-routing.module */ "./src/app/kyca/kyca-routing.module.ts");
/* harmony import */ var _kyca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kyca.page */ "./src/app/kyca/kyca.page.ts");







let KycaPageModule = class KycaPageModule {
};
KycaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kyca_routing_module__WEBPACK_IMPORTED_MODULE_5__["KycaPageRoutingModule"]
        ],
        declarations: [_kyca_page__WEBPACK_IMPORTED_MODULE_6__["KycaPage"]]
    })
], KycaPageModule);



/***/ }),

/***/ "./src/app/kyca/kyca.page.scss":
/*!*************************************!*\
  !*** ./src/app/kyca/kyca.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 0px !important;\n}\n\nion-card-header {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3ljYS9reWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFBZ0IsdUJBQUE7QUFHaEIiLCJmaWxlIjoic3JjL2FwcC9reWNhL2t5Y2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5pb24tY2FyZC1oZWFkZXJ7cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7fSJdfQ== */");

/***/ }),

/***/ "./src/app/kyca/kyca.page.ts":
/*!***********************************!*\
  !*** ./src/app/kyca/kyca.page.ts ***!
  \***********************************/
/*! exports provided: KycaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycaPage", function() { return KycaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");








let KycaPage = class KycaPage {
    constructor(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, router, events, alertController) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        this.kychidden = false;
        this.kycahidden = false;
        this.error = null;
        this.loading = {};
        this.refresher = null;
        this.userInfo = {
            first_name: '',
            last_name: '',
            level: '',
            points: '',
            avatar: '',
        };
        this.kyc_status = [];
        this.tran_please_wait = 'Please Wait';
    }
    goBack() {
        this.router.navigate(['home']);
    }
    ionViewDidEnter() {
        this.fetchKyc();
    }
    fetchKyc() {
        this.apiService.fetchKyc().subscribe(data => {
            this.kyc_status = data;
            console.log('dta', data);
            // this.kyc_status.aadhar_img = this.kyc_status[0]['aadhar_img'];
            // this.kyc_status.aadhar_no = this.kyc_status[0]['aadhar_no'];
            // this.kyc_status.cancel_check_img = this.kyc_status[0]['cancel_check_img'];
            // this.kyc_status.cancel_check_no = this.kyc_status[0]['cancel_check_no'];
            // this.kyc_status.linked_phonenumber = this.kyc_status[0]['linked_phonenumber'];
            // this.kyc_status.pan_card_img = this.kyc_status[0]['pan_card_img'];
            // this.kyc_status.pan_card_no = this.kyc_status[0]['pan_card_no'];
            this.loadingCtrl.dismiss();
        }, error => console.log(error));
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                buttons: ['OK'],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.presentLoading();
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
};
KycaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
KycaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kyca',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kyca.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kyca/kyca.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kyca.page.scss */ "./src/app/kyca/kyca.page.scss")).default]
    })
], KycaPage);



/***/ })

}]);
//# sourceMappingURL=kyca-kyca-module-es2015.js.map