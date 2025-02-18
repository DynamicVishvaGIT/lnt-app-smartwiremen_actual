(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passbook-passbook-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/passbook/passbook.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passbook/passbook.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n      </ion-buttons>\n    <ion-title>{{ 'passbook' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content >\n    </ion-refresher-content>\n</ion-refresher>\n<ion-list *ngFor=\"let item of items\" >\n  \n  <ion-card *ngIf=\"items.length > 0\">\n    <ion-item>\n      <ion-label>{{ 'promo_code' | translate}}</ion-label>\n      <ion-label>{{item.code}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'passbook_product_name' | translate}}</ion-label>\n      <ion-label>{{item.product_name}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'created_by' | translate}}</ion-label>\n      <ion-label>{{item.created_by}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'points' | translate}}</ion-label>\n      <ion-label>{{item.point}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'created_at' | translate}}</ion-label>\n      <ion-label>{{item.created_at}}</ion-label>\n    </ion-item>\n  </ion-card>\n  \n</ion-list>\n\n<ion-card class=\"no-records\" *ngIf=\"items.length == 0\">\n  <ion-label style=\"text-align: center;font-weight: bold;\">No Records Found</ion-label>\n</ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/passbook/passbook-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/passbook/passbook-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PassbookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPageRoutingModule", function() { return PassbookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _passbook_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passbook.page */ "./src/app/passbook/passbook.page.ts");




const routes = [
    {
        path: '',
        component: _passbook_page__WEBPACK_IMPORTED_MODULE_3__["PassbookPage"]
    }
];
let PassbookPageRoutingModule = class PassbookPageRoutingModule {
};
PassbookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PassbookPageRoutingModule);



/***/ }),

/***/ "./src/app/passbook/passbook.module.ts":
/*!*********************************************!*\
  !*** ./src/app/passbook/passbook.module.ts ***!
  \*********************************************/
/*! exports provided: PassbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPageModule", function() { return PassbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _passbook_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passbook-routing.module */ "./src/app/passbook/passbook-routing.module.ts");
/* harmony import */ var _passbook_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passbook.page */ "./src/app/passbook/passbook.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let PassbookPageModule = class PassbookPageModule {
};
PassbookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _passbook_routing_module__WEBPACK_IMPORTED_MODULE_5__["PassbookPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_passbook_page__WEBPACK_IMPORTED_MODULE_6__["PassbookPage"]]
    })
], PassbookPageModule);



/***/ }),

/***/ "./src/app/passbook/passbook.page.scss":
/*!*********************************************!*\
  !*** ./src/app/passbook/passbook.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-records {\n  text-align: center;\n  padding: 16px;\n  font-weight: bold;\n  color: black;\n}\n\nion-card {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc2Jvb2svcGFzc2Jvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYXNzYm9vay9wYXNzYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcmVjb3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jYXJkIHtcbiAgY29sb3I6ICMwMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/passbook/passbook.page.ts":
/*!*******************************************!*\
  !*** ./src/app/passbook/passbook.page.ts ***!
  \*******************************************/
/*! exports provided: PassbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPage", function() { return PassbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"];
let PassbookPage = class PassbookPage {
    constructor(apiService, loadingCtrl, translate, menuCtrl, toastController, router) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.router = router;
        this.loading = {};
        this.items = [];
        this.refresher = null;
        this.tran_please_wait = 'Please Wait';
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        const loading = this.presentLoading();
        this.loadPassbookDetails1();
    }
    ionViewDidLoad() {
    }
    doRefresh(event) {
        this.loadPassbookDetails2(event);
    }
    loadPassbookDetails1() {
        this.apiService.passbookDetails().subscribe(data => this.handleResponse2(data), error => this.handleError2(error));
    }
    loadPassbookDetails2(event) {
        this.apiService.passbookDetails().subscribe(data => this.handleResponse(data, event), error => this.handleError(error, event));
    }
    handleResponse(data, event) {
        this.items = data;
        event.target.complete();
        this.loadingCtrl.dismiss();
    }
    handleError(error, event) {
        console.log(error);
        event.target.complete();
    }
    handleResponse2(data) {
        this.items = data;
        this.loadingCtrl.dismiss();
    }
    handleError2(error) {
        console.log(error);
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
    goBack() {
        this.router.navigate(['home']);
    }
};
PassbookPage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PassbookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passbook',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./passbook.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/passbook/passbook.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./passbook.page.scss */ "./src/app/passbook/passbook.page.scss")).default]
    })
], PassbookPage);



/***/ })

}]);
//# sourceMappingURL=passbook-passbook-module-es2015.js.map