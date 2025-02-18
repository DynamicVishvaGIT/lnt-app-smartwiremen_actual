(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheme-scheme-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scheme/scheme.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheme/scheme.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'scheme_n_offers' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -28px;\" (click)=\"goBack()\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n          <!-- <ion-menu-button></ion-menu-button> -->\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">{{ 'scheme_n_offers' | translate }}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-list class=\"gap\">\n\t  <ion-item lines=\"none\" *ngFor=\"let item of items\" (click)=\"itemSelected(item)\">\n\t    {{ item.title }}\n      <ion-icon slot=\"end\" name=\"caret-forward-circle-sharp\" color=\"secondary\"></ion-icon>\n\t  </ion-item>  \n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scheme/scheme-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/scheme/scheme-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SchemePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemePageRoutingModule", function() { return SchemePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scheme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheme.page */ "./src/app/scheme/scheme.page.ts");




const routes = [
    {
        path: '',
        component: _scheme_page__WEBPACK_IMPORTED_MODULE_3__["SchemePage"]
    }
];
let SchemePageRoutingModule = class SchemePageRoutingModule {
};
SchemePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchemePageRoutingModule);



/***/ }),

/***/ "./src/app/scheme/scheme.module.ts":
/*!*****************************************!*\
  !*** ./src/app/scheme/scheme.module.ts ***!
  \*****************************************/
/*! exports provided: SchemePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemePageModule", function() { return SchemePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scheme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheme-routing.module */ "./src/app/scheme/scheme-routing.module.ts");
/* harmony import */ var _scheme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheme.page */ "./src/app/scheme/scheme.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SchemePageModule = class SchemePageModule {
};
SchemePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scheme_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_scheme_page__WEBPACK_IMPORTED_MODULE_6__["SchemePage"]]
    })
], SchemePageModule);



/***/ }),

/***/ "./src/app/scheme/scheme.page.scss":
/*!*****************************************!*\
  !*** ./src/app/scheme/scheme.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1lL3NjaGVtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zY2hlbWUvc2NoZW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNjtcbn1cbi5nYXB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/scheme/scheme.page.ts":
/*!***************************************!*\
  !*** ./src/app/scheme/scheme.page.ts ***!
  \***************************************/
/*! exports provided: SchemePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemePage", function() { return SchemePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");







let SchemePage = class SchemePage {
    constructor(apiService, loadingCtrl, translate, menuCtrl, router, events) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.loading = {};
        this.items = [];
        this.refresher = null;
        this.tran_please_wait = 'Please Wait';
        this.menuCtrl.enable(true, 'myMenu');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        this.presentLoading();
        this.loadSchemes2();
    }
    ionViewDidLoad() {
    }
    doRefresh(event) {
        this.loadSchemes(event);
    }
    loadSchemes(event) {
        this.apiService.schemes().subscribe(data => {
            event.target.complete();
            console.log(data);
            this.handleResponse(data);
        }, error => {
            event.target.complete();
            this.handleError(error);
        });
    }
    loadSchemes2() {
        this.apiService.schemes().subscribe(data => {
            console.log(data);
            this.handleResponse(data);
        }, error => {
            this.handleError(error);
        });
    }
    handleResponse(data) {
        this.items = data.schemes;
        console.log(data);
        this.loadingCtrl.dismiss();
    }
    handleError(error) {
        console.log(error);
        this.loadingCtrl.dismiss();
    }
    itemSelected(item) {
        this.events.sharingValue = item;
        this.router.navigate(['scheme-detail']);
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
    goBack() {
        this.router.navigate(['home']);
    }
};
SchemePage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }
];
SchemePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scheme',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scheme.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scheme/scheme.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scheme.page.scss */ "./src/app/scheme/scheme.page.scss")).default]
    })
], SchemePage);



/***/ })

}]);
//# sourceMappingURL=scheme-scheme-module-es2015.js.map