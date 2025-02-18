(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forceupdate-forceupdate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<ion-content class=\"ion-padding\" style=\"background:#f4b404\">\n  <ion-row class=\"app-icon-container\" style=\"margin-top: 40%;\"> \n      <ion-col text-center>\n        <img src=\"../../assets/imgs/logo.png\" />      \n      </ion-col>\n    </ion-row>\n    <br>\n  <div style=\"text-align: center;\">\n    <p style=\"text-align: center;font-weight: bold;color:#0a4f8b ;font-size: 20px;\"> Please Update Application</p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/forceupdate/forceupdate-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forceupdate/forceupdate-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ForceupdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceupdatePageRoutingModule", function() { return ForceupdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forceupdate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forceupdate.page */ "./src/app/forceupdate/forceupdate.page.ts");




const routes = [
    {
        path: '',
        component: _forceupdate_page__WEBPACK_IMPORTED_MODULE_3__["ForceupdatePage"]
    }
];
let ForceupdatePageRoutingModule = class ForceupdatePageRoutingModule {
};
ForceupdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForceupdatePageRoutingModule);



/***/ }),

/***/ "./src/app/forceupdate/forceupdate.module.ts":
/*!***************************************************!*\
  !*** ./src/app/forceupdate/forceupdate.module.ts ***!
  \***************************************************/
/*! exports provided: ForceupdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceupdatePageModule", function() { return ForceupdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forceupdate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forceupdate-routing.module */ "./src/app/forceupdate/forceupdate-routing.module.ts");
/* harmony import */ var _forceupdate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forceupdate.page */ "./src/app/forceupdate/forceupdate.page.ts");







let ForceupdatePageModule = class ForceupdatePageModule {
};
ForceupdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forceupdate_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForceupdatePageRoutingModule"]
        ],
        declarations: [_forceupdate_page__WEBPACK_IMPORTED_MODULE_6__["ForceupdatePage"]]
    })
], ForceupdatePageModule);



/***/ }),

/***/ "./src/app/forceupdate/forceupdate.page.scss":
/*!***************************************************!*\
  !*** ./src/app/forceupdate/forceupdate.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmNldXBkYXRlL2ZvcmNldXBkYXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/forceupdate/forceupdate.page.ts":
/*!*************************************************!*\
  !*** ./src/app/forceupdate/forceupdate.page.ts ***!
  \*************************************************/
/*! exports provided: ForceupdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceupdatePage", function() { return ForceupdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ForceupdatePage = class ForceupdatePage {
    constructor() { }
    ngOnInit() {
    }
};
ForceupdatePage.ctorParameters = () => [];
ForceupdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forceupdate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forceupdate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forceupdate.page.scss */ "./src/app/forceupdate/forceupdate.page.scss")).default]
    })
], ForceupdatePage);



/***/ })

}]);
//# sourceMappingURL=forceupdate-forceupdate-module-es2015.js.map