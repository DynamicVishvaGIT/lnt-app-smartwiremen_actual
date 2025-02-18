(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n          <ion-menu-button></ion-menu-button>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">{{ 'dashboard' | translate }}</strong>\n        </ion-col>\n        <ion-col size=\"2\" style=\"text-align: end;\" (click)=\"changeLanguage()\">\n          <ion-icon name=\"language-outline\" class=\"icon-circle\" style=\"color:#ffff;margin-right: -37px;\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- <ion-row class=\"heading-info\">\n    <ion-col size=\"4\"  class=\"home-header-img\">\n      <img src=\"../assets/imgs/avatar2.png\" *ngIf=\"!userInfo.avatar\"/> \n      <img src=\"{{ userInfo.avatar }}\" *ngIf=\"userInfo.avatar\"/> \n    </ion-col>\n    <ion-col size=\"8\"  class=\"home-header-info\">\n      <h2>{{ 'welcome' | translate }} <span>{{userInfo.first_name}} {{userInfo.last_name}}</span></h2>\n      <h3>{{ 'your_level' | translate }} <span> {{userInfo.level}}</span></h3>\n      <h3>{{ 'your_points' | translate }} <span> {{userInfo.points}}</span></h3>\n    </ion-col>\n  </ion-row> -->\n  <div class=\"ion-padding-top ion-padding-horizontal gap\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\" style=\"text-align: start;margin-top: -9px;\">\n          <h6 style=\"color:#131313;font-weight: 200;\">{{ 'Hey,' | translate }} <span style=\"color:#131313;font-weight: 500;\">{{userInfo.first_name}} {{userInfo.last_name}}</span></h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"home-header-img\" style=\"text-align: end;\">\n          <img src=\"../assets/imgs/avatar2.png\" *ngIf=\"!userInfo.avatar\"/> \n          <img src=\"{{ userInfo.avatar }}\" *ngIf=\"userInfo.avatar\"/>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"ion-padding-top ion-padding-horizontal gap1\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" class=\"count-col3\" >\n          <ion-row class=\"count-row-2\">\n            <ion-col size=\"2\" >\n              <img src=\"../../assets/imgs/Icon feather-trending-up.svg\" alt=\"\" class=\"img\">\n              <!-- <ion-icon name=\"trending-up-outline\" style=\"font-size: x-large;color: #ffd100;\"></ion-icon> -->\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin-top: -4px;font-size: x-small;color:white;margin-left: -12px;\" class=\"border-right\">{{ 'your_level' | translate }} <br><span style=\"font-size: small;font-weight: 600;\">{{userInfo.level}}</span></ion-col>\n            <ion-col size=\"3\" style=\"text-align: center;\">\n              <img src=\"../../assets/imgs/Icon feather-arrow-up-circle.svg\" alt=\"\" class=\"img\">\n              <!-- <ion-icon name=\"trending-up-outline\" style=\"font-size: x-large;color: #ffd100;\"></ion-icon> -->\n            </ion-col>\n            <ion-col size=\"3\" style=\"margin-top: -4px;font-size: x-small;color:white;margin-left: -20px;\">{{ 'your_points' | translate }} <br><span style=\"font-size: small;font-weight: 600;\">{{userInfo.points}}</span></ion-col>\n          </ion-row>\n          <!-- <p class=\"count-heading\"><span class=\"count\">9898</span> Presolved</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"banner-gap animated-display\">\n    <ion-grid>\n      <ion-row align-self-center class=\"scroll\">\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/banner.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/banner.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/banner.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/banner.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card class=\"card\">\n            <ion-grid>\n              <ion-row >\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goRedeem()\">\n                  <div class=\"square-gift-container\">\n                    <img src=\"../assets/imgs/Icon core-gift.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <object type=\"image/svg+xml\" data=\"../assets/imgs/Icon core-gift.svg\" class=\"yellow-svg\"></object> -->\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'gift_redeem' | translate }}</b></span>\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goScancode()\">\n                  <div class=\"square-barcode-container\">\n                    <img src=\"../assets/imgs/Icon ion-ios-barcode.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'promocode' | translate }}</b></span>\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goScheme()\">\n                  <div class=\"square-info-container\">\n                    <img src=\"../assets/imgs/Icon ion-information.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'scheme_n_offers' | translate }}</b></span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"banner-gap2 animated-display\">\n    <ion-grid>\n      <ion-row align-self-center class=\"scroll\">\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/health.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/health.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/health.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n        <ion-col size=\"12\">\n          <img src=\"assets/banner/health.jpg\" alt=\"\" class=\"banner\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card class=\"card\">\n            <ion-grid>\n              <ion-row >\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goOrders()\">\n                  <div class=\"square-cart-container\">\n                    <img src=\"../assets/imgs/Icon core-cart.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'orders' | translate }}</b></span>\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goComplaint()\">\n                  <div class=\"square-complaint-container\">\n                    <img src=\"../assets/imgs/Icon fa-regular-rectangle-list.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'submit_ticket' | translate }}</b></span>\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: center;\" class=\"col-height\" (click)=\"goToProjectLead()\">\n                  <div class=\"square-lead-container\">\n                    <img src=\"../assets/imgs/Icon material-outline-featured-play-list.svg\" class=\"img-card\">\n                  </div>\n                  <!-- <br> -->\n                  <span class=\"tool-text\"><b>{{ 'project_lead' | translate }}</b></span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div style=\"margin-top:-36px;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"goToQuiz()\">\n          <ion-card class=\"card1\">\n            <ion-card-header> \n              <ion-card-title>\n                <div class=\"square-game-container\">\n                  <img src=\"../assets/imgs/Icon ion-ios-game-controller-a-outline.svg\" alt=\"\" class=\"img-card\">\n                </div>\n                <p style=\"color:black;font-size: x-small;margin-top: -27px;margin-left: 50px;\">{{ 'game' | translate }}</p>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"goToScanCounterBoy()\">\n          <ion-card class=\"card2\">\n            <ion-card-header> \n              <ion-card-title>\n                <div class=\"square-cbarcode-container\">\n                  <img src=\"../assets/imgs/Icon ion-ios-barcode counter boy.svg\" alt=\"\" class=\"img-card\">\n                </div>\n                <p style=\"color:black;font-size: x-small;margin-top: -27px;margin-left: 50px;\">Scan Counter Boy</p>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <!-- <ion-col size=\"6\" class=\"align-col\" >\n          <ion-row class=\"align-row\">\n            <ion-col size=\"2\" >\n              <img src=\"../assets/imgs/home-icon-1.png\" alt=\"\" class=\"img-card1\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin-top: 5px;font-size: x-small;color:black\">{{ 'game' | translate }} </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"align-col\" >\n          <ion-row class=\"align-row\">\n            <ion-col size=\"2\" >\n              <img src=\"../assets/imgs/home-icon-1.png\" alt=\"\" class=\"img-card1\">\n            </ion-col>\n            <ion-col size=\"4\" style=\"margin-top: 5px;font-size: x-small;color:black\">{{ 'game' | translate }} </ion-col>\n          </ion-row>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div style=\"margin-top: 100px;\">\n    <ion-fab horizontal=\"end\" class=\"above-footer-fab\">\n      <ion-fab-button class=\"custom-fab\" size=\"small\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\" class=\"always-open\">\n        <!-- <ion-fab-button class=\"custom-fab-list\" (click)=\"callISO()\" tooltip=\"Call\">\n          <ion-icon name=\"call-outline\" style=\"color:white\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button class=\"custom-fab-list\" (click)=\"callCenter()\">\n          <ion-icon name=\"call-outline\" style=\"color:white\"></ion-icon>\n        </ion-fab-button> -->\n        <div class=\"fab-button-with-text\">\n          <span class=\"fab-text\">Contact Sales Person</span>\n          <ion-fab-button class=\"custom-fab-list\" (click)=\"callISO()\" size=\"small\">\n            <ion-icon name=\"call-outline\" style=\"color:white\"></ion-icon>\n          </ion-fab-button>\n        </div>\n        <div class=\"fab-button-with-text\">\n          <span class=\"fab-text\">Contact Call Center</span>\n          <ion-fab-button class=\"custom-fab-list\" (click)=\"callCenter()\" size=\"small\" style=\"margin-bottom: -5px;\">\n            <ion-icon name=\"call-outline\" style=\"color:white\"></ion-icon>\n          </ion-fab-button>\n        </div>\n      </ion-fab-list>\n    </ion-fab>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'dashboard' | translate }}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button class=\"language-btn\" (click)=\"changeLanguage()\" fill=\"outline\">{{'change_lang' | translate}}</ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<ion-row class=\"heading-info\">\n  <ion-col size=\"4\"  class=\"home-header-img\">\n    <img src=\"../assets/imgs/avatar2.png\" *ngIf=\"!userInfo.avatar\"/> \n    <img src=\"{{ userInfo.avatar }}\" *ngIf=\"userInfo.avatar\"/> \n  </ion-col>\n  <ion-col size=\"8\"  class=\"home-header-info\">\n    <h2>{{ 'welcome' | translate }} <span>{{userInfo.first_name}} {{userInfo.last_name}}</span></h2>\n    <h3>{{ 'your_level' | translate }} <span> {{userInfo.level}}</span></h3>\n    <h3>{{ 'your_points' | translate }} <span> {{userInfo.points}}</span></h3>\n  </ion-col>\n</ion-row>\n\n\n<ion-list class=\"ion-padding list\">\n<ion-row class=\"grid-list\">\n  <ion-col size=\"6\">\n    <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goTds()\" [hidden]=tdshidden>\n      <ion-chip color=\"secondary\" style=\"width: 96%;\">\n        <ion-icon name=\"document-text-outline\"></ion-icon>\n        <ion-label>{{kyc_status.tds_value}}% TDS Slab</ion-label>\n      </ion-chip>\n    </div>\n  </ion-col> \n  \n  <ion-col size=\"6\">\n    <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" [hidden]=kychidden>\n      <ion-chip color=\"danger\" style=\"width: 96%;\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n        <ion-label>{{kyc_status.kyc_status}}</ion-label>\n      </ion-chip>\n    </div>\n    <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"openDis()\" [hidden]=kycnthidden>\n      <ion-chip color=\"danger\" style=\"width: 96%;\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n        <ion-label>{{kyc_status.kyc_status}}</ion-label>\n      </ion-chip>\n    </div>\n    <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goKyca()\" [hidden]=kycahidden>\n      <ion-chip color=\"success\" style=\"width: 96%;\">\n        <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        <ion-label>KYC Approved</ion-label>\n      </ion-chip>\n    </div>\n  </ion-col> \n <ion-col size=\"4\" >\n   <div class=\"info\" (click)=\"goRedeem()\">\n     <img src=\"../assets/imgs/home-icon-1.png\" /> \n     <h4 style=\"margin-bottom: 23px;\">{{ 'gift_redeem' | translate }}</h4>\n     <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n   </div>\n </ion-col>\n <ion-col size=\"4\">\n   <div class=\"info\" (click)=\"goScancode()\">\n    <img src=\"../assets/imgs/home-icon-3.png\" /> \n     <h4>{{ 'promocode' | translate }}</h4>\n     <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n   </div>\n </ion-col>\n<ion-col size=\"4\"> \n  <div class=\"info\" (click)=\"goOrders()\">\n   <img src=\"../assets/imgs/cart.png\" /> \n    <h4>{{ 'orders' | translate }}</h4>\n    <h4></h4>\n    <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n  </div>\n</ion-col>\n</ion-row>\n<ion-row class=\"grid-list\">\n  <ion-col size=\"4\">\n    <div class=\"info\" (click)=\"goToDirectTransfer()\">\n       <img src=\"../assets/imgs/money-transfer.png\" /> \n       <h4>{{ 'direct_transfer' | translate }}</h4>\n       <a >\n          {{ 'view_details' | translate }} \n          <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon>\n       </a>\n    </div>\n </ion-col>\n  <ion-col size=\"4\"> \n    <div class=\"info\" (click)=\"goScheme()\">\n     <img src=\"../assets/imgs/home-icon-2.png\" /> \n      <h4>{{ 'scheme_n_offers' | translate }}</h4>\n      <h4></h4>\n      <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n    </div>\n  </ion-col>\n <ion-col size=\"4\"> \n  <div class=\"info\" (click)=\"goComplaint()\">\n   <img src=\"../assets/imgs/home-icon-4.png\" /> \n    <h4>{{ 'submit_ticket' | translate }}</h4>\n    <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n  </div>\n</ion-col>\n<ion-col size=\"4\"> \n  <div class=\"info\" (click)=\"goProfile()\">\n   <img src=\"../assets/imgs/user.png\" /> \n    <h4>{{ 'profile' | translate }}</h4>\n    <h4></h4>\n    <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n  </div>\n</ion-col>\n</ion-row>\n<ion-row class=\"grid-list\"> \n\n <ion-col size=\"4\"> \n   <div class=\"info\" (click)=\"goToProjectLead()\">\n    <img src=\"../assets/imgs/home-icon-4.png\" /> \n     <h4>{{ 'project_lead' | translate }}</h4>\n     <h4></h4>\n     <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n   </div>\n </ion-col>\n <ion-col size=\"4\"> \n  <div class=\"info\" (click)=\"goToQuiz()\">\n    <img src=\"../assets/imgs/home-icon-1.png\" /> \n    <h4>{{ 'game' | translate }}</h4>\n    <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n  </div>\n</ion-col>\n<ion-col size=\"4\"> \n  <div class=\"info\" (click)=\"goToScanCounterBoy()\">\n   <img src=\"../assets/imgs/home-icon-3.png\" /> \n    <h4>Scan Counter Boy</h4>\n    <a >{{ 'view_details' | translate }} <ion-icon class=\"right-arrow\" name=\"arrow-forward-sharp\"></ion-icon></a>\n  </div>\n</ion-col>\n</ion-row>\n<br>\n\n  <ion-row>\n    <ion-col size=\"6\" >\n      <ion-button expand=\"block\" class=\"contact-btn ion-text-wrap\"   (click)=\"callISO()\">\n        Contact Sales Person\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\" >\n      <ion-button class=\"contact-btn ion-text-wrap\"   expand=\"block\" (click)=\"callCenter()\">\n        Contact Call Center\n      </ion-button>\n      \n    </ion-col>\n  </ion-row>\n\n</ion-list>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n</ion-content> -->\n\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n#header-icons {\n  text-align: right;\n}\n\n#header-icons ion-icon {\n  color: white;\n  font-size: 1.5rem;\n  margin-left: 16px;\n}\n\n.help_icon {\n  float: right;\n  margin-right: 25px;\n  font-size: x-large;\n  margin-top: -22px;\n  color: red;\n}\n\n.icon-circle {\n  --background: #3aad00;\n  --border-radius: 50%;\n  --padding: 3px;\n  --box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  background-color: var(--background);\n  border-radius: var(--border-radius);\n  padding: var(--padding);\n  box-shadow: var(--box-shadow);\n}\n\n.gap {\n  margin-top: -12px;\n  padding: 5px;\n}\n\n.gap1 {\n  margin-top: -21px;\n  padding: 9px;\n}\n\n.home-header-img img {\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  border-color: #ffd416;\n  width: 36px;\n  height: 36px;\n  background-color: #ffd416;\n  padding: 2px;\n}\n\n.count-col3 {\n  border-radius: 7px;\n  background: #015c8d;\n}\n\n.count-row-2 {\n  margin-top: 8px;\n  font-size: 14px;\n  margin-left: 6px;\n}\n\n.img {\n  width: 20px;\n  margin-left: 10px;\n}\n\n.border-right {\n  border-right: 1px solid #ffff;\n}\n\n.animated-display {\n  animation: mymove 5s ease-out forwards;\n  animation-iteration-count: 1;\n  /* Safari and Chrome */\n  -webkit-animation: mymove 5s;\n  -webkit-animation-iteration-count: 1;\n}\n\n.banner {\n  width: 98%;\n  height: 120px;\n  margin-left: 4px;\n  border-radius: 8px;\n}\n\n.banner-gap {\n  margin-top: -16px;\n}\n\n.banner-gap2 {\n  margin-top: -25px;\n}\n\n.scroll {\n  flex-wrap: nowrap;\n  overflow-x: scroll !important;\n  overflow-y: hidden;\n}\n\n.card {\n  margin-top: -8px;\n  height: auto;\n  margin-left: 0px;\n  margin-right: 2px;\n  border-radius: 8px;\n  width: 100%;\n  background: white;\n}\n\n.img-card {\n  width: 20px;\n  height: 20px;\n}\n\n.col-height {\n  height: 68px;\n}\n\n.menu {\n  margin-top: 15%;\n}\n\n.tool-text {\n  font-size: 9px;\n  color: black;\n}\n\n.align-col {\n  border-radius: 7px;\n  background: white;\n  border: 1px solid #c2d0d7;\n}\n\n.align-row {\n  margin-top: 8px;\n  font-size: 14px;\n  margin-left: 6px;\n}\n\n.card1 {\n  border-radius: 8px;\n  width: 100%;\n  background: white;\n  margin-left: 5px;\n}\n\n.card2 {\n  border-radius: 8px;\n  width: 92%;\n  background: white;\n}\n\nion-tab-bar {\n  --padding-bottom: 20px;\n  /* Adjust as needed */\n}\n\n.custom-fab {\n  --background: #015c8d;\n  /* Custom background color */\n  --color: #fff;\n  /* Custom icon color */\n}\n\n.custom-fab-list {\n  --background: #2edcba;\n  /* Custom background color */\n  --color: #fff;\n  /* Custom icon color */\n}\n\n.fab-button-with-text {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  /* Ensure the div takes the full width */\n  margin-top: -4px;\n}\n\n.fab-button-with-text .fab-text {\n  flex-grow: 1;\n  /* Take the available space */\n  margin-left: -151px;\n  color: black;\n  /* Adjust color as needed */\n  font-size: 14px;\n  /* Adjust font size as needed */\n  text-align: left;\n  /* Align text to the left */\n}\n\n.always-open {\n  display: flex !important;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.square-gift-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #fffae5;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-barcode-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #e8fcff;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-info-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #ffe9f2;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-cart-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #fff5e9;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-complaint-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #f6f6f6;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-lead-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #f7f2ff;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n  margin-left: 30%;\n}\n\n.square-game-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #f5ffe5;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n}\n\n.square-cbarcode-container {\n  width: 40px;\n  height: 40px;\n  /* Make sure height matches width for a perfect circle */\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  background: #e5fff9;\n  display: flex;\n  justify-content: center;\n  /* Center the image horizontally */\n  align-items: center;\n  /* Center the image vertically */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBR0EseUJBQUE7QUFERjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBS0U7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpOOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFMRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFNQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQVRGOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBUkY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFTQTtFQUVFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0FBUkY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFjQTtFQUNFLDZCQUFBO0FBWEY7O0FBYUE7RUFDRSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBVkY7O0FBWUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBRUEsa0JBQUE7QUFYRjs7QUFhQTtFQUNFLGlCQUFBO0FBVkY7O0FBWUE7RUFDRSxpQkFBQTtBQVRGOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBU0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0FBUkY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVRGOztBQWVBO0VBQ0Usc0JBQUE7RUFBeUIscUJBQUE7QUFYM0I7O0FBY0E7RUFDRSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2QixhQUFBO0VBQWUsc0JBQUE7QUFUakI7O0FBYUE7RUFDRSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2QixhQUFBO0VBQWUsc0JBQUE7QUFSakI7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFBYSx3Q0FBQTtFQUViLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQWEsNkJBQUE7RUFDYixtQkFBQTtFQUNBLFlBQUE7RUFBYywyQkFBQTtFQUNkLGVBQUE7RUFBaUIsK0JBQUE7RUFDakIsZ0JBQUE7RUFBa0IsMkJBQUE7QUFIcEI7O0FBTUE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQWMsd0RBQUE7RUFDZCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUF5QixrQ0FBQTtFQUN6QixtQkFBQTtFQUFxQixnQ0FBQTtFQUNyQixnQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFBYyx3REFBQTtFQUNkLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLGtDQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQ3JCLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUFjLHdEQUFBO0VBQ2QsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFBeUIsa0NBQUE7RUFDekIsbUJBQUE7RUFBcUIsZ0NBQUE7RUFDckIsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQWMsd0RBQUE7RUFDZCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUF5QixrQ0FBQTtFQUN6QixtQkFBQTtFQUFxQixnQ0FBQTtFQUNyQixnQkFBQTtBQVlGOztBQVZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFBYyx3REFBQTtFQUNkLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLGtDQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQ3JCLGdCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFBYyx3REFBQTtFQUNkLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLGtDQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQ3JCLGdCQUFBO0FBb0JGOztBQWxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQWMsd0RBQUE7RUFDZCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUF5QixrQ0FBQTtFQUN6QixtQkFBQTtFQUFxQixnQ0FBQTtBQXdCdkI7O0FBckJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFBYyx3REFBQTtFQUNkLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLGtDQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLGdDQUFBO0FBMkJ2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9kYXNoYm9hcmQtYmcucG5nJyk7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjNWUzZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkYzRjY7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjNWUzZmZhNjtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNoZWFkZXItaWNvbnN7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBpb24taWNvbntcbiAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIH1cbn1cblxuLmhlbHBfaWNvbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIGNvbG9yOiByZWQ7XG59XG4uaWNvbi1jaXJjbGUge1xuICAtLWJhY2tncm91bmQ6ICMzYWFkMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmc6IDNweDtcbiAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLy8gZm9udC1zaXplOiAyNHB4O1xuICAvLyB3aWR0aDogMTJweDtcbiAgLy8gaGVpZ2h0OiAxMnB4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG4uZ2Fwe1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmdhcDF7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICBwYWRkaW5nOiA5cHg7XG59XG4uaG9tZS1oZWFkZXItaW1nIGltZyB7XG4gIC8vIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZDQxNjtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDQxNjtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY291bnQtY29sM3tcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAvLyBtYXJnaW46IDAgNnB4O1xuICBiYWNrZ3JvdW5kOiAjMDE1YzhkO1xuICAvLyBtYXJnaW4tdG9wOiAyNyU7XG59XG5cbi5jb3VudC1yb3ctMntcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIC8vIC0tc3ZnLWZpbGwtY29sb3I6ICNGMzg3MkY7XG4gIC8vIGNvbG9yOiAjRjM4NzJGO1xuICAvLyBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuLmJvcmRlci1yaWdodHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmY7XG59XG4uYW5pbWF0ZWQtZGlzcGxheXtcbiAgYW5pbWF0aW9uOm15bW92ZSA1cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjpteW1vdmUgNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO1xufVxuLmJhbm5lciB7XG4gIHdpZHRoOjk4JTtcbiAgaGVpZ2h0OjEyMHB4O1xuICAvLyBoZWlnaHQ6MTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5iYW5uZXItZ2FwIHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG4uYmFubmVyLWdhcDIge1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbn1cbi5zY3JvbGx7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pbWctY2FyZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jb2wtaGVpZ2h0IHtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuXG4ubWVudSB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cbi50b29sLXRleHQge1xuICBmb250LXNpemU6IDlweDtcbiAgLy8gZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjpibGFjaztcbiAgLy8gY29sb3I6ICMwMDAwMDA5MTtcbn1cbi5hbGlnbi1jb2x7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgLy8gbWFyZ2luOiAwIDZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMmQwZDc7XG4gIC8vIG1hcmdpbi10b3A6IDI3JTtcbn1cblxuLmFsaWduLXJvd3tcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jYXJkMXtcbiAgYm9yZGVyLXJhZGl1czo4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNhcmQye1xuICBib3JkZXItcmFkaXVzOjhweDtcbiAgd2lkdGg6IDkyJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4vLyAuYWJvdmUtZm9vdGVyLWZhYiB7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgei1pbmRleDogMTA7IFxuLy8gfVxuaW9uLXRhYi1iYXIge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4OyAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4uY3VzdG9tLWZhYntcbiAgLS1iYWNrZ3JvdW5kOiAjMDE1YzhkOyAvKiBDdXN0b20gYmFja2dyb3VuZCBjb2xvciAqL1xuICAtLWNvbG9yOiAjZmZmOyAvKiBDdXN0b20gaWNvbiBjb2xvciAqL1xuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXN0b20tZmFiLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogIzJlZGNiYTsgLyogQ3VzdG9tIGJhY2tncm91bmQgY29sb3IgKi9cbiAgLS1jb2xvcjogI2ZmZjsgLyogQ3VzdG9tIGljb24gY29sb3IgKi9cbn1cbi5mYWItYnV0dG9uLXdpdGgtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgdGhlIGRpdiB0YWtlcyB0aGUgZnVsbCB3aWR0aCAqL1xuICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGp1c3Qgc3BhY2luZyBhcyBuZWVkZWQgKi9cbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuLmZhYi1idXR0b24td2l0aC10ZXh0IC5mYWItdGV4dCB7XG4gIGZsZXgtZ3JvdzogMTsvKiBUYWtlIHRoZSBhdmFpbGFibGUgc3BhY2UgKi9cbiAgbWFyZ2luLWxlZnQ6IC0xNTFweDtcbiAgY29sb3I6IGJsYWNrOyAvKiBBZGp1c3QgY29sb3IgYXMgbmVlZGVkICovXG4gIGZvbnQtc2l6ZTogMTRweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xufVxuXG4uYWx3YXlzLW9wZW4ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNxdWFyZS1naWZ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7IC8qIE1ha2Ugc3VyZSBoZWlnaHQgbWF0Y2hlcyB3aWR0aCBmb3IgYSBwZXJmZWN0IGNpcmNsZSAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmZhZTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIHZlcnRpY2FsbHkgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cbi5zcXVhcmUtYmFyY29kZS1jb250YWluZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4OyAvKiBNYWtlIHN1cmUgaGVpZ2h0IG1hdGNoZXMgd2lkdGggZm9yIGEgcGVyZmVjdCBjaXJjbGUgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZThmY2ZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5ICovXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4uc3F1YXJlLWluZm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDsgLyogTWFrZSBzdXJlIGhlaWdodCBtYXRjaGVzIHdpZHRoIGZvciBhIHBlcmZlY3QgY2lyY2xlICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZTlmMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgdmVydGljYWxseSAqL1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuLnNxdWFyZS1jYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7IC8qIE1ha2Ugc3VyZSBoZWlnaHQgbWF0Y2hlcyB3aWR0aCBmb3IgYSBwZXJmZWN0IGNpcmNsZSAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY1ZTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIHZlcnRpY2FsbHkgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cbi5zcXVhcmUtY29tcGxhaW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7IC8qIE1ha2Ugc3VyZSBoZWlnaHQgbWF0Y2hlcyB3aWR0aCBmb3IgYSBwZXJmZWN0IGNpcmNsZSAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIHZlcnRpY2FsbHkgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cbi5zcXVhcmUtbGVhZC1jb250YWluZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4OyAvKiBNYWtlIHN1cmUgaGVpZ2h0IG1hdGNoZXMgd2lkdGggZm9yIGEgcGVyZmVjdCBjaXJjbGUgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjdmMmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5ICovXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4uc3F1YXJlLWdhbWUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDsgLyogTWFrZSBzdXJlIGhlaWdodCBtYXRjaGVzIHdpZHRoIGZvciBhIHBlcmZlY3QgY2lyY2xlICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y1ZmZlNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgdmVydGljYWxseSAqL1xuICAvLyBtYXJnaW4tbGVmdDogMzAlO1xufVxuLnNxdWFyZS1jYmFyY29kZS1jb250YWluZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4OyAvKiBNYWtlIHN1cmUgaGVpZ2h0IG1hdGNoZXMgd2lkdGggZm9yIGEgcGVyZmVjdCBjaXJjbGUgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZTVmZmY5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5ICovXG4gIC8vIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi8vIC5jdXN0b20tZmFiOjpiZWZvcmUge1xuLy8gICBjb250ZW50OiAnJztcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgbGVmdDogNTAlO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFjOGQ5OyAvKiBDb2xvciBvZiB0aGUgc2hhZG93IGNpcmNsZSAqL1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuNCk7IC8qIEFkanVzdCB0aGUgc2NhbGUgdG8gY29udHJvbCB0aGUgc2l6ZSAqL1xuLy8gICB6LWluZGV4OiAtMTsgLyogUGxhY2UgdGhlIGNpcmNsZSBiZWhpbmQgdGhlIGJ1dHRvbiAqL1xuLy8gICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBPcHRpb25hbDogYWRkIGEgc29mdCBzaGFkb3cgdG8gdGhlIGNpcmNsZSAqL1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpb24tbW9kYWwge1xuLy8gICB6LWluZGV4OiA5OTk5O1xuLy8gfVxuLy8gYm9keSAubXktY3VzdG9tLWNsYXNze1xuLy8gICB6LWluZGV4OiAyMDAwNjtcbi8vIH1cbi8vIC5ob21lLWhlYWRlci1pbmZvIGgyIHtcbi8vICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vIH1cblxuLy8gLmhvbWUtaGVhZGVyLWluZm8gaDIgc3BhbiB7XG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyB9XG5cbi8vIC5ob21lLWhlYWRlci1pbmZvIGgzIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiA1cHg7XG4vLyAgIG1hcmdpbi10b3A6IDVweDtcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyB9XG5cbi8vIC5ob21lLWhlYWRlci1pbmZvIGgzIHNwYW4ge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vIH1cblxuLy8gLmhvbWUtaGVhZGVyLWltZyBpbWcge1xuLy8gICBtYXJnaW4tdG9wOiAyNXB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICB3aWR0aDogOTBweDtcbi8vICAgaGVpZ2h0OiA5MHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICBwYWRkaW5nOiAzcHg7XG4vLyB9XG5cbi8vIC5ob21lLWhlYWRlci1pbmZvIHtcbi8vICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuaW5mbyB7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4vLyAgIHBhZGRpbmc6IDI1cHggMTVweDtcbi8vICAgYm9yZGVyLXJhZGl1czogM3B4O1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGNvbG9yOiAjMzMzO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuaW5mbzpob3Zlcixcbi8vIC5pbmZvOmFjdGl2ZSxcbi8vIC5pbmZvOmZvY3VzIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyB9XG5cbi8vIC5pbmZvIGg0IHtcbi8vICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBtYXJnaW4tdG9wOiA1cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcbi8vIH1cblxuLy8gLmluZm8gaW1nIHtcbi8vICAgd2lkdGg6IDUxcHg7XG4vLyB9XG5cbi8vIC5pbmZvIGEge1xuLy8gICBmb250LXNpemU6IDExcHg7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgIGNvbG9yOiAjMzMzO1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cbi8vIC5pbmZvIGEgLnJpZ2h0LWFycm93IHtcbi8vICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4vLyB9XG5cbi8vIC5oZWFkZXItbWQ6OmFmdGVyLFxuLy8gLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cInRvcFwiXSA+IC50YWJiYXI6OmFmdGVyLFxuLy8gLmZvb3Rlci1tZDo6YmVmb3JlLFxuLy8gLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAtLWJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgLS1jb2xvcjogd2hpdGU7XG4vLyB9XG5cbi8vIC5oZWFkaW5nLWluZm8ge1xuLy8gICBoZWlnaHQ6IDIyMHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vICAgcGFkZGluZy10b3A6IDEycHg7XG4vLyAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4vLyAgICAgbGluZWFyLFxuLy8gICAgIGxlZnQgdG9wLFxuLy8gICAgIHJpZ2h0IHRvcCxcbi8vICAgICBmcm9tKCMwYTRmOGIpLFxuLy8gICAgIHRvKCMwNDY1OWUpXG4vLyAgICkgIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGE0ZjhiIDAlLCAjMDQ2NTllIDEwMCUpICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHBhZGRpbmctbGVmdDogMjBweDtcbi8vICAgcGFkZGluZy1yaWdodDogMjBweDtcbi8vIH1cblxuLy8gLmhlYWRpbmctaW5mbzo6YWZ0ZXIge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGJvcmRlci1ib3R0b206IDEwMHB4IHNvbGlkICNmZmY7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XG4vLyAgIGJvcmRlci1sZWZ0OiAxMTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBib3JkZXItcmlnaHQ6IDExMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbi8vIH1cblxuLy8gLmxpc3Qge1xuLy8gICBtYXJnaW4tdG9wOiAtNjBweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vIH1cblxuLy8gLnRhYnMtbWQgLnRhYmJhciB7XG4vLyAgIGJhY2tncm91bmQ6ICMzNDM0NDAgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLmluZm86aG92ZXIgYSxcbi8vIC5pbmZvOmFjdGl2ZSBhLFxuLy8gLmluZm86Zm9jdXMgYSB7XG4vLyAgIHBhZGRpbmctbGVmdDogM3B4O1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbi8vIH1cbi8vIC5sb2dvdXRidG4ge1xuLy8gICBmb250LXNpemU6IDI1cHg7XG4vLyB9XG4vLyAuaW5mbyB7XG4vLyAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAubGFuZ3VhZ2UtYnRuIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gfVxuLy8gLmNvbnRhY3QtYnRuIHtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgLS1wYWRkaW5nLWxlZnQ6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1yaWdodDogMjVweDtcbi8vICAgLS1jb2xvcjogI2ZmZjtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZjRiNDA0O1xuLy8gfVxuLy8gLmdyaWQtbGlzdCA+IGlvbi1jb2wge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _advertising_advertising_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../advertising/advertising.page */ "./src/app/advertising/advertising.page.ts");
/* harmony import */ var _disclaimermodal_disclaimermodal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../disclaimermodal/disclaimermodal.page */ "./src/app/disclaimermodal/disclaimermodal.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/token-service/token.service */ "./src/app/providers/token-service/token.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");











let HomePage = class HomePage {
    constructor(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, router, events, alertController, modalController) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.tdshidden = true;
        this.kychidden = true;
        this.kycahidden = true;
        this.kycnthidden = true;
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
        this.fetch_ads = [];
        this.tran_please_wait = 'Please Wait';
        this.menuCtrl.enable(true);
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
    }
    ngOnInit() {
        console.log('insid');
        this.menuCtrl.enable(true);
        this.presentLoading();
        let goto_scheme_page = localStorage.getItem('goto_scheme_page');
        if (goto_scheme_page == '1') {
            localStorage.removeItem('goto_scheme_page');
            this.router.navigate(['scheme']);
        }
        this.loadParentId();
        // this.userfetchKycstatus()
        // this.apiService.userfetchKycstatus().subscribe(
        //   data => {
        //     // this.kyc_status = JSON.stringify(data);
        //     this.kyc_status = data;
        //     console.log('dta', data)
        //     if(this.kyc_status[0]['kyc_status'] == null){
        //       this.openDis()
        //     }else if(this.kyc_status[0]['kyc_status'] == "3"){
        //       this.openDis()
        //     }else{
        //     }
        //   },
        //   error => console.log(error)
        // );
        // this.ads()
    }
    loadParentId() {
        this.apiService.parentId().subscribe(data => {
            this.parent_id = data;
            console.log('dta', data);
        }, error => console.log(error));
    }
    doLogout() {
        this.tokenService.remove();
        this.router.navigate(['login']);
    }
    goRedeem() {
        this.router.navigate(['redeem']);
    }
    goKyca() {
        this.router.navigate(['kyca']);
    }
    goTds() {
        this.apiService.userfetchKycstatus().subscribe(data => {
            this.kyc_status = data;
            if (this.kyc_status[0]['kyc_status'] == "2") {
                this.router.navigate(['tds']);
            }
            else {
                if (this.kyc_status[0]['tds_value'] == null || this.kyc_status[0]['tds_value'] == '') {
                    this.kyc_status.tds_value = '20';
                }
                else {
                    this.kyc_status.tds_value = this.kyc_status[0]['tds_value'];
                }
                if (this.kyc_status[0]['remark'] === null || this.kyc_status[0]['remark'] === '') { }
                else {
                    this.presentAlert(this.kyc_status[0]['remark']);
                }
                if (this.kyc_status[0]['kyc_status'] == null) {
                    this.kyc_status.kyc_status = 'KYC Not Uploaded';
                    this.kychidden = true;
                    this.kycahidden = true;
                    this.kycnthidden = false;
                    //  this.openDis()
                }
                else if (this.kyc_status[0]['kyc_status'] == "1") {
                    this.kyc_status.kyc_status = 'KYC Pending';
                    this.kychidden = false;
                    this.kycahidden = true;
                    this.kycnthidden = true;
                    //  this.goTds()
                }
                else if (this.kyc_status[0]['kyc_status'] == "3") {
                    // this.presentAlert("You have already played this game")
                    this.kyc_status.kyc_status = 'KYC Rejected';
                    this.kychidden = true;
                    this.kycahidden = true;
                    this.kycnthidden = false;
                    //  this.openDis()
                }
                else {
                    this.kychidden = true;
                    this.kycahidden = false;
                    this.kycnthidden = true;
                }
            }
        }, error => console.log(error));
    }
    goComplaint() {
        this.router.navigate(['complaint']);
    }
    goScheme() {
        this.router.navigate(['scheme']);
    }
    goScancode() {
        this.router.navigate(['scancode']);
    }
    goOrders() {
        this.router.navigate(['orders']);
    }
    goProfile() {
        this.router.navigate(['profile']);
    }
    goToProjectLead() {
        if (this.parent_id) {
            this.router.navigate(['project-lead']);
        }
        else {
            this.presentToast("You are not mapped to ISO");
        }
    }
    goToProjectList() {
        this.router.navigate(['projectlist']);
    }
    goToScanRetailer() {
        this.router.navigate(['scanretailer']);
    }
    goToScanCounterBoy() {
        this.router.navigate(['scancounterboy']);
    }
    goToDirectTransfer() {
        this.router.navigate(['direct-transfer']);
    }
    changeLanguage() {
        this.router.navigate(['language']);
    }
    doRefresh(event) {
        console.log('here66');
        this.apiService.home().subscribe(data => {
            event.target.complete();
            this.handleResponse(data);
        }, error => {
            event.target.complete();
            this.handleError(error);
        });
        this.apiService.validForGame().subscribe(data => {
            console.log('valid', data);
            this.valid_for_game = data['game']['attempt'];
            this.game_status = data['game']['status'];
            this.game_valid = data['valid'];
        });
    }
    ionViewDidEnter() {
        console.log('here000');
        this.menuCtrl.enable(true);
        this.apiService.home().subscribe(data => this.handleResponse(data), error => this.handleError(error));
        this.events.getEvent().subscribe(data => {
            console.log(data);
            if (data) {
                if (data.name == 'update:userdata') {
                    console.log(data.params);
                    this.userInfo.first_name = data.params.first_name;
                    this.userInfo.last_name = data.params.last_name;
                    this.userInfo.level = data.params.level;
                    this.userInfo.points = data.params.points;
                    this.userInfo.avatar = data.params.avatar;
                    localStorage.setItem('save_username', data.params.username);
                }
            }
        });
        this.apiService.validForGame().subscribe(data => {
            console.log('valid', data);
            this.valid_for_game = data['game']['attempt'];
            this.game_status = data['game']['status'];
            this.game_valid = data['valid'];
        });
        this.userfetchKycstatus();
    }
    userfetchKycstatus() {
        // console.log('herekyc')
        // this.apiService.userfetchKycstatus().subscribe(
        //   data => {
        //     console.log(data)
        //     // console.log('dta', data)
        //     // this.kyc_status = data;
        //   },
        //   error => console.log(error)
        //   );
        this.apiService.userfetchKycstatus().subscribe(data => {
            // this.kyc_status = JSON.stringify(data);
            this.kyc_status = data;
            // this.kyc_status.kyc_status = this.kyc_status[0]['kyc_status'];
            // console.log('kyc',data)
            // this.kyc_status.kyc_status = data.params.kyc_status;
            // console.log('herekyc1')
            if (this.kyc_status[0]['tds_value'] == null || this.kyc_status[0]['tds_value'] == '') {
                this.kyc_status.tds_value = '20';
            }
            else {
                this.kyc_status.tds_value = this.kyc_status[0]['tds_value'];
            }
            if (this.kyc_status[0]['remark'] === null || this.kyc_status[0]['remark'] === '') { }
            else {
                this.presentAlert(this.kyc_status[0]['remark']);
            }
            if (this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])) {
                if (this.kyc_status[0]['kyc_status'] == null) {
                    this.tdshidden = false;
                    this.kyc_status.kyc_status = 'KYC Not Uploaded';
                    this.kychidden = true;
                    this.kycahidden = true;
                    this.kycnthidden = false;
                    //  console.log('kyc 1')
                    if (this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])) {
                        // console.log('kyc 2')
                        this.openDis();
                    }
                    //  this.openDis()
                }
                else if (this.kyc_status[0]['kyc_status'] == "1") {
                    this.tdshidden = false;
                    this.kyc_status.kyc_status = 'KYC Pending';
                    this.kychidden = false;
                    this.kycahidden = true;
                    this.kycnthidden = true;
                    //  this.goTds()
                }
                else if (this.kyc_status[0]['kyc_status'] == "3") {
                    // this.presentAlert("You have already played this game")
                    this.tdshidden = false;
                    this.kyc_status.kyc_status = 'KYC Rejected';
                    this.kychidden = true;
                    this.kycahidden = true;
                    this.kycnthidden = false;
                    if (this.kyc_status[0]['redeem_point'] >= Number(this.kyc_status[0]['tdsredeem'])) {
                        // console.log('kyc 3')
                        this.openDis();
                    }
                }
                else {
                    this.tdshidden = false;
                    this.kychidden = true;
                    this.kycahidden = false;
                    this.kycnthidden = true;
                }
            }
            else {
                this.tdshidden = true;
                this.kychidden = true;
                this.kycahidden = true;
                this.kycnthidden = true;
            }
        }, error => console.log(error));
    }
    handleResponse(data) {
        console.log('here68');
        this.events.publish({ name: 'update:userdata', params: data });
        //  if(this.refresher != null){
        //    this.refresher.complete();
        //  }
        //  this.refresher = null;
        this.loadingCtrl.dismiss();
    }
    handleError(error) {
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
        else {
            this.presentToast('');
        }
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
            // console.log('advertising')
            this.ads();
        });
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
    callISO() {
        window.open('tel:' + this.parent_id.username, '_system');
    }
    callCenter() {
        window.open('tel:18002091212', '_system');
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
    openDis() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _disclaimermodal_disclaimermodal_page__WEBPACK_IMPORTED_MODULE_2__["DisclaimermodalPage"]
                // presentingElement: await this.modalController.getTop()
            });
            yield modal.present();
        });
    }
    advertising() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _advertising_advertising_page__WEBPACK_IMPORTED_MODULE_1__["AdvertisingPage"],
                presentingElement: yield this.modalController.getTop()
            });
            yield modal.present();
        });
    }
    ads() {
        this.apiService.fetchAds().subscribe(data => {
            // console.log('fetchAds', data);
            // console.log(data[length]);
            this.fetch_ads = data;
            // console.log(this.fetch_ads.length);
            // var fetch_size = this.fetch_ads.length - 1;
            // console.log(fetch_size);
            // this.fetch_ads = data[fetch_size];
            var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -14);
            // console.log(new Date().toISOString());
            // console.log(localISOTime);
            var startDate = new Date(this.fetch_ads['start_dates']); //YYYY-MM-DD
            var endDate = new Date(this.fetch_ads['end_dates']); //YYYY-MM-DD
            // console.log(startDate);
            function formatDate(date) {
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return year + '-' + month + '-' + day;
            }
            var getDateArray = function (start, end) {
                var arr = new Array();
                var dt = new Date(start);
                while (dt <= end) {
                    arr.push(formatDate(new Date(dt)));
                    dt.setDate(dt.getDate() + 1);
                }
                return arr;
            };
            var dateArr = getDateArray(startDate, endDate);
            // console.log(startDate, endDate, dateArr );
            for (let i = 0; i <= dateArr.length; i++) {
                if (dateArr[i] === localISOTime) {
                    this.advertising();
                }
            }
            // console.log(dateArr.length)
        }, error => console.log(error));
    }
    goToQuiz() {
        console.log(this.game_status, this.game_valid, this.valid_for_game);
        if (this.game_status == 'Inactive' && ((this.valid_for_game == "0" || this.valid_for_game == "1" || this.valid_for_game == "2"))) {
            this.router.navigate(['quiz'], { queryParams: { 'attempt': this.valid_for_game } });
        }
        else if ((this.valid_for_game == "1" || this.valid_for_game == "2" || this.valid_for_game == "3") && (this.game_status == 'Active')) {
            this.presentAlert("You have already played this game");
        }
        else if (this.valid_for_game == "3" && this.game_status == "Inactive") {
            this.presentAlert("You have already played this game");
        }
        else if (this.valid_for_game == "3" && this.game_status == "Active") {
            this.presentAlert("You have already played this game");
        }
        else {
            this.presentAlert("You have already played this game");
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map