(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modaldisclaimer-modaldisclaimer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modaldisclaimer/modaldisclaimer.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modaldisclaimer/modaldisclaimer.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Disclaimer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <!-- <p>I understand that as per the new guidelines provided by Income Tax Department under the section 194R, I am required to furnish PAN Card details. I hereby confirm that I am submitting my PAN card details and company can pay 10% TDS on the benefits given to me. I give my consent to company to pay 10% TDS as per section 194R if the value of benefits given to me exceeds Rs. 20,000 and above during financial year.</p>\n      <p>I further declare that information provided by me about <span class=\"cb\">PAN card, PAN card linked mobile number & Aadhaar card</span> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.</p>\n      <p>I am well aware of the fact that, if the information given by me is proved false/ not true, I will be liable for action as per the law. </p>\n       -->\n\n      <p>I understand that as per the new guidelines provided by Income Tax Department under the\n        section 194R, I am required to furnish PAN Card details. I hereby confirm that I am\n        submitting my PAN card details and company can pay 10% TDS on the benefits given to me.\n        I give my consent to company to pay 10% TDS as per section 194R if the value of benefits\n        given to me exceeds Rs. 20,000 and above during financial year.</p>\n      <p>I further declare that information provided by me about <span class=\"cb\">PAN card & PAN Card Linked\n        mobile number submitted</span> by me is true to the best of my knowledge and belief and\n        nothing has been concealed therein.</p>\n      <p>“I/ We declare that the information stated above is true and correct and I/ we further\n        undertake to indemnify your entity for any costs, damages and/ or any penal\n        consequences arising to you by relying on my/ our declaration.”</p>\n      <!-- <br> -->\n      <!-- <ion-list>\n        <ion-item class=\"bor\">\n          <ion-label>I Agree Terms and Conditions</ion-label>\n          <ion-checkbox slot=\"start\"></ion-checkbox>\n        </ion-item>\n      </ion-list> -->\n      <br>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"secondary\" shape=\"round\">Ok</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" color=\"danger\" shape=\"round\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modaldisclaimer/modaldisclaimer-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modaldisclaimer/modaldisclaimer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ModaldisclaimerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaldisclaimerPageRoutingModule", function() { return ModaldisclaimerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modaldisclaimer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modaldisclaimer.page */ "./src/app/modaldisclaimer/modaldisclaimer.page.ts");




const routes = [
    {
        path: '',
        component: _modaldisclaimer_page__WEBPACK_IMPORTED_MODULE_3__["ModaldisclaimerPage"]
    }
];
let ModaldisclaimerPageRoutingModule = class ModaldisclaimerPageRoutingModule {
};
ModaldisclaimerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModaldisclaimerPageRoutingModule);



/***/ }),

/***/ "./src/app/modaldisclaimer/modaldisclaimer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modaldisclaimer/modaldisclaimer.module.ts ***!
  \***********************************************************/
/*! exports provided: ModaldisclaimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaldisclaimerPageModule", function() { return ModaldisclaimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modaldisclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modaldisclaimer-routing.module */ "./src/app/modaldisclaimer/modaldisclaimer-routing.module.ts");
/* harmony import */ var _modaldisclaimer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modaldisclaimer.page */ "./src/app/modaldisclaimer/modaldisclaimer.page.ts");







let ModaldisclaimerPageModule = class ModaldisclaimerPageModule {
};
ModaldisclaimerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modaldisclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModaldisclaimerPageRoutingModule"]
        ],
        declarations: [_modaldisclaimer_page__WEBPACK_IMPORTED_MODULE_6__["ModaldisclaimerPage"]]
    })
], ModaldisclaimerPageModule);



/***/ }),

/***/ "./src/app/modaldisclaimer/modaldisclaimer.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/modaldisclaimer/modaldisclaimer.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bor {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.card-content-md p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.card-content-md p span.cb {\n  font-weight: 600;\n  color: #0a4f8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxkaXNjbGFpbWVyL21vZGFsZGlzY2xhaW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL21vZGFsZGlzY2xhaW1lci9tb2RhbGRpc2NsYWltZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcntcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuLmNhcmQtY29udGVudC1tZCBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1jb250ZW50LW1kIHAgc3Bhbi5jYntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzBhNGY4YjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modaldisclaimer/modaldisclaimer.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/modaldisclaimer/modaldisclaimer.page.ts ***!
  \*********************************************************/
/*! exports provided: ModaldisclaimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaldisclaimerPage", function() { return ModaldisclaimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModaldisclaimerPage = class ModaldisclaimerPage {
    constructor() { }
    ngOnInit() {
    }
};
ModaldisclaimerPage.ctorParameters = () => [];
ModaldisclaimerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modaldisclaimer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modaldisclaimer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modaldisclaimer/modaldisclaimer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modaldisclaimer.page.scss */ "./src/app/modaldisclaimer/modaldisclaimer.page.scss")).default]
    })
], ModaldisclaimerPage);



/***/ })

}]);
//# sourceMappingURL=modaldisclaimer-modaldisclaimer-module-es2015.js.map