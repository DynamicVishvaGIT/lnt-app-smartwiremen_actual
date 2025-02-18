(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcounterboy-addcounterboy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcounterboy/addcounterboy.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcounterboy/addcounterboy.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>addcounterboy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/addcounterboy/addcounterboy-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/addcounterboy/addcounterboy-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddcounterboyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcounterboyPageRoutingModule", function() { return AddcounterboyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addcounterboy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcounterboy.page */ "./src/app/addcounterboy/addcounterboy.page.ts");




const routes = [
    {
        path: '',
        component: _addcounterboy_page__WEBPACK_IMPORTED_MODULE_3__["AddcounterboyPage"]
    }
];
let AddcounterboyPageRoutingModule = class AddcounterboyPageRoutingModule {
};
AddcounterboyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcounterboyPageRoutingModule);



/***/ }),

/***/ "./src/app/addcounterboy/addcounterboy.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/addcounterboy/addcounterboy.module.ts ***!
  \*******************************************************/
/*! exports provided: AddcounterboyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcounterboyPageModule", function() { return AddcounterboyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addcounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcounterboy-routing.module */ "./src/app/addcounterboy/addcounterboy-routing.module.ts");
/* harmony import */ var _addcounterboy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcounterboy.page */ "./src/app/addcounterboy/addcounterboy.page.ts");







let AddcounterboyPageModule = class AddcounterboyPageModule {
};
AddcounterboyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addcounterboy_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcounterboyPageRoutingModule"]
        ],
        declarations: [_addcounterboy_page__WEBPACK_IMPORTED_MODULE_6__["AddcounterboyPage"]]
    })
], AddcounterboyPageModule);



/***/ }),

/***/ "./src/app/addcounterboy/addcounterboy.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/addcounterboy/addcounterboy.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGNvdW50ZXJib3kvYWRkY291bnRlcmJveS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/addcounterboy/addcounterboy.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/addcounterboy/addcounterboy.page.ts ***!
  \*****************************************************/
/*! exports provided: AddcounterboyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcounterboyPage", function() { return AddcounterboyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddcounterboyPage = class AddcounterboyPage {
    constructor() { }
    ngOnInit() {
    }
};
AddcounterboyPage.ctorParameters = () => [];
AddcounterboyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcounterboy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addcounterboy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcounterboy/addcounterboy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addcounterboy.page.scss */ "./src/app/addcounterboy/addcounterboy.page.scss")).default]
    })
], AddcounterboyPage);



/***/ })

}]);
//# sourceMappingURL=addcounterboy-addcounterboy-module-es2015.js.map