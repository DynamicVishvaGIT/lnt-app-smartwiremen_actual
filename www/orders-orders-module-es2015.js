(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content ></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n\t\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ 'orders' | translate }}</strong>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n    </ion-grid>\n  </div>\n\t<ion-searchbar class=\"custom\" name=\"search\" [(ngModel)]=\"terms\" placeholder=\"orders\" mode=\"ios\"></ion-searchbar>\n  <div class=\"order-card-gap\">\n    <ion-card class=\"ion-margin-bottom order-card border-left-color\" *ngFor=\"let item of items | search : terms; let i = index;\" (click)=\"itemSelected(item)\" mode=\"ios\">\n      <ion-grid>   <!--style=\"margin-top: 11px;margin-left: 10px;\"-->\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-grid style=\"margin-top: -5px;\">\n              <ion-row class=\"border-bottom\">\n                <ion-col size=\"12\" class=\"ion-text-wrap\">\n                  <span style=\"font-size: medium;color:#fe4e4d;font-weight: 800;\">{{ 'order_id' | translate }} : </span> <span style=\"font-size: medium;color:#131313;font-weight: 800;\">#{{ item.id }}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"text-header-align\">\n                <ion-col size=\"12\" style=\"text-align:start;\">\n                  <span class=\"card-header\">{{ item.gift_name }}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"text-header-align\" >\n                <ion-col size=\"12\" style=\"text-align:start;\">\n                  <span style=\"font-size: small;\">{{ item.created_at |date:\"dd MMM y, h:mm a\"}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'orders' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content >\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of items\" mode=\"md\" (click)=\"itemSelected(item)\">\n    <ion-card-header>\n      <ion-card-subtitle color=\"dark\">{{ 'order_id' | translate }} #{{ item.id }}</ion-card-subtitle>\n      <ion-card-subtitle ><b>{{ item.gift_name }}</b></ion-card-subtitle>\n      <ion-card-subtitle>{{ item.created_at |date:\"dd MMM y, h:mm a\"}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/search-pipe.module */ "./src/app/pipes/search-pipe.module.ts");









let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__["SearchPipeModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\nion-searchbar.custom {\n  --background: #D8E7F0;\n  --color: #00000096;\n  --clear-button-color: black;\n}\n\n.order-card-gap {\n  margin-top: 12px;\n}\n\n.order-card {\n  height: 117px;\n  border-radius: 10px;\n  margin-top: -3px;\n}\n\n.card-header {\n  font-size: 14px;\n  color: #131313;\n  font-weight: 800;\n  text-transform: none;\n}\n\n.gap {\n  margin-top: 30px;\n}\n\n.text-header-align {\n  font-size: smaller;\n  color: #b1b1b1;\n  margin-top: 4px;\n}\n\n.text-body-align {\n  font-size: small;\n}\n\np {\n  border: 2px solid #cdc5c545;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-left: 10px;\n  margin-right: 8px;\n}\n\n.border-bottom {\n  border-bottom: 2px dotted #00000017;\n}\n\n.border-left-color {\n  border-left: 3px solid #fe4e4d;\n}\n\n.right-arrow {\n  font-size: 14px;\n  color: black;\n  font-weight: 500;\n  margin-top: 2px;\n  margin-left: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUNBQUE7QUFFSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNjtcbn1cbmlvbi1zZWFyY2hiYXIuY3VzdG9tIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEOEU3RjA7XG4gICAgLS1jb2xvcjogIzAwMDAwMDk2O1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBibGFjaztcbn1cbi5vcmRlci1jYXJkLWdhcCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm9yZGVyLWNhcmQge1xuICAgIGhlaWdodDogMTE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IzEzMTMxMztcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uZ2Fwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi50ZXh0LWhlYWRlci1hbGlnbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGNvbG9yOiAjYjFiMWIxO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cbiAgXG4udGV4dC1ib2R5LWFsaWdue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgLy9tYXJnaW4tdG9wOiAtOHB4O1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2RjNWM1NDU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDAwMDE3O1xufVxuXG4uYm9yZGVyLWxlZnQtY29sb3J7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmU0ZTRkO1xufVxuXG4ucmlnaHQtYXJyb3d7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OrdersPage = class OrdersPage {
    constructor(apiService, loadingCtrl, translate, menuCtrl, toastCtrl, events, router) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.router = router;
        this.loading = {};
        this.items = [];
        this.refresher = null;
        this.tran_please_wait = 'Please Wait';
        this.menuCtrl.enable(true, 'myMenu');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        this.presentLoading();
        this.loadOrders();
    }
    ionViewDidEnter() {
        this.loadOrders();
    }
    doRefresh(event) {
        this.loadOrders();
        event.target.complete();
    }
    loadOrders() {
        this.apiService.orders().subscribe(data => this.handleResponse(data), error => this.handleError(error));
        this.apiService.home().subscribe(data => {
            this.events.publish({ name: 'update:userdata', params: data });
        });
    }
    handleResponse(data) {
        this.loadingCtrl.dismiss();
        this.items = data.orders;
        // if(this.refresher != null){
        //   this.refresher.complete();
        // }
        // this.refresher = null;
        this.loadingCtrl.dismiss();
    }
    handleError(error) {
        this.loadingCtrl.dismiss();
        console.log(error);
    }
    itemSelected(item) {
        // this.events.sharingValue = item;
        this.router.navigate(['view-order', item.id]);
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
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 1000,
                position: 'middle'
            });
            toast.present();
        });
    }
    goBack() {
        this.router.navigate(['home']);
    }
};
OrdersPage.ctorParameters = () => [
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")).default]
    })
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map