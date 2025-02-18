(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scancode-scancode-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n          <ion-menu-button></ion-menu-button>\n        </ion-col>\n        <ion-col size=\"8\" style=\"text-align: center;\">\n          <strong class=\"header\" style=\"color:#131313;\">{{ 'register_promo_code' | translate }}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"ion-padding-top ion-padding-horizontal gap\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" style=\"text-align: center;\">\n          <div class=\"circle-promocode-container\">\n            <img src=\"../../assets/imgs/Group 3631.svg\" alt=\"\" class=\"img\">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap1\">\n    <form (ngSubmit)=\"submitCounterBoyForm()\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"required ion-label\">Select Country Boy</ion-label>\n            <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n              <ion-select name=\"counterboyid\" [(ngModel)]=\"counterboyid\" placeholder=\"Select Counter Boy\" class=\"ion-select\">\n                <ion-select-option >\n                  None\n                </ion-select-option>\n                <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n                  {{counterboy.name}} \n                </ion-select-option>\n              </ion-select>          \n            </ion-item> \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-button class=\"btn-create\" type=\"submit\" style=\"width: 94%;margin-top: 10px;\">{{ 'submit' | translate }}</ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <div class=\"gap5\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- <ion-label class=\"required ion-label\">Enter Promo Code here</ion-label> -->\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;position: relative;\">\n            <ion-input type=\"text\" [(ngModel)]=\"inputCode\" name=\"inputCode\" placeholder=\"{{ 'enter_promo_code' | translate }}\" class=\"ion-input\" style=\"z-index: auto;\">\n            </ion-input>\n            <ion-button fill=\"clear\" class=\"apply-button\" (click)=\"submitQrcodeForm()\">{{ 'Apply' | translate }}</ion-button>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"gap4\">\n    <ion-row class=\"or\">\n      <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"gap3\">\n    <ion-button class=\"btn-create\" (click)=\"scanCode()\" color=\"secondary\"><ion-icon name=\"scan-sharp\"></ion-icon>&nbsp;&nbsp;{{ 'scan_code' | translate }}</ion-button>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ 'register_promo_code' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form (ngSubmit)=\"submitCounterBoyForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\" >\n        <ion-label ><ion-icon slot=\"start\" name=\"list\"></ion-icon></ion-label>\n        <ion-select placeholder=\"Select Counter Boy\" [(ngModel)]=\"counterboyid\" name=\"counterboyid\">\n          <ion-select-option >\n            None\n          </ion-select-option>\n          <ion-select-option value=\"{{counterboy.id}}\" *ngFor=\"let counterboy of counterboy_list\" >\n            {{counterboy.name}} \n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"btn-create\" type=\"submit\">{{ 'submit' | translate }}</ion-button>\n  </form>\n  <br>\n  <hr>\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <ion-card *ngIf=\"counterboy\">\n    <ion-card-content>\n    Last counter boy scanned   \n    <br>\n    <b>{{counterboy.name}} </b>\n    <br>\n    <b>{{counterboy.mobile_no}} </b>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <form (ngSubmit)=\"submitQrcodeForm()\">\n      <ion-input type=\"text\" placeholder=\"{{ 'enter_promo_code' | translate }}\" class=\"qr-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\">\n      </ion-input>\n    <ion-button class=\"btn-create\"    type=\"submit\"><ion-icon name=\"barcode-sharp\"></ion-icon>{{ 'register' | translate }}</ion-button>\n  </form>\n  \n  <ion-row class=\"or\">\n    <ion-col><h2>{{ 'or' | translate }}</h2></ion-col>\n  </ion-row>\n  <ion-button class=\"btn-create \"    (click)=\"scanCode()\" color=\"secondary\"><ion-icon name=\"scan-sharp\"></ion-icon>{{ 'scan_code' | translate }}</ion-button>\n\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      {{ 'result_form_scan' | translate }} : {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/scancode/scancode-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/scancode/scancode-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ScancodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancodePageRoutingModule", function() { return ScancodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scancode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scancode.page */ "./src/app/scancode/scancode.page.ts");




const routes = [
    {
        path: '',
        component: _scancode_page__WEBPACK_IMPORTED_MODULE_3__["ScancodePage"]
    }
];
let ScancodePageRoutingModule = class ScancodePageRoutingModule {
};
ScancodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScancodePageRoutingModule);



/***/ }),

/***/ "./src/app/scancode/scancode.module.ts":
/*!*********************************************!*\
  !*** ./src/app/scancode/scancode.module.ts ***!
  \*********************************************/
/*! exports provided: ScancodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancodePageModule", function() { return ScancodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scancode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scancode-routing.module */ "./src/app/scancode/scancode-routing.module.ts");
/* harmony import */ var _scancode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scancode.page */ "./src/app/scancode/scancode.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ScancodePageModule = class ScancodePageModule {
};
ScancodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scancode_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScancodePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_scancode_page__WEBPACK_IMPORTED_MODULE_6__["ScancodePage"]]
    })
], ScancodePageModule);



/***/ }),

/***/ "./src/app/scancode/scancode.page.scss":
/*!*********************************************!*\
  !*** ./src/app/scancode/scancode.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.img {\n  width: 100%;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\n.gap1 {\n  margin-top: 70px;\n  padding-left: 10px;\n}\n\n.gap3 {\n  margin-top: -21px;\n  padding-left: 19px;\n  padding-right: 25px;\n}\n\n.gap4 {\n  margin-top: -27px;\n}\n\n.gap5 {\n  margin-top: 10px;\n  padding-left: 10px;\n}\n\n.circle-promocode-container {\n  width: 180px;\n  /* Adjust the size as needed */\n  height: 180px;\n  /* Adjust the size as needed */\n  background-color: #fff;\n  /* Adjust the color as needed */\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  /* Center the circle container */\n}\n\n.ion-input {\n  border-radius: 10px;\n  --padding-start: 10px !important;\n  height: 50px;\n  background: white !important;\n}\n\n.apply-button {\n  position: absolute;\n  right: 16px;\n  top: 42%;\n  transform: translateY(-50%);\n  height: 100%;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-size: 12px;\n  color: #025C8D;\n  /* Customize this color as needed */\n  text-transform: none;\n  font-weight: 900;\n}\n\n.or {\n  text-align: center;\n  width: 100%;\n}\n\n.or ion-col h2 {\n  text-align: center;\n  display: inline-block;\n  line-height: 50px;\n  margin-top: 15px !important;\n  border-radius: 50%;\n  font-size: 16px;\n  font-weight: 900;\n  color: black;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 10px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  width: 100%;\n  color: #fff;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NhbmNvZGUvc2NhbmNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFBYyw4QkFBQTtFQUNkLGFBQUE7RUFBZSw4QkFBQTtFQUNmLHNCQUFBO0VBQXdCLCtCQUFBO0VBQ3hCLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQWdCLGdDQUFBO0FBV2xCOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVlGOztBQVZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUFnQixtQ0FBQTtFQUNoQixvQkFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWlCRiIsImZpbGUiOiJzcmMvYXBwL3NjYW5jb2RlL3NjYW5jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5nYXB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZ2FwMXtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmdhcDN7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4uZ2FwNHtcbiAgbWFyZ2luLXRvcDogLTI3cHg7XG59XG4uZ2FwNXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNpcmNsZS1wcm9tb2NvZGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE4MHB4OyAvKiBBZGp1c3QgdGhlIHNpemUgYXMgbmVlZGVkICovXG4gIGhlaWdodDogMTgwcHg7IC8qIEFkanVzdCB0aGUgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogQWRqdXN0IHRoZSBjb2xvciBhcyBuZWVkZWQgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgY2lyY2xlIGNvbnRhaW5lciAqL1xufVxuLmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6NTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5hcHBseS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDQyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAyNUM4RDsgLyogQ3VzdG9taXplIHRoaXMgY29sb3IgYXMgbmVlZGVkICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vciBpb24tY29sIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYnRuLWNyZWF0ZSB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAtLXBhZGRpbmctbGVmdDogMjVweDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5vciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi8vIC5vciBpb24tY29sIGgyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gLnFyLWlucHV0LW1haW4ge1xuLy8gICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuXG4vLyAucXItaW5wdXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyB9XG5cbi8vIC5idG4tY3JlYXRlIHtcbi8vICAgLS1ib3gtc2hhZG93OiBub25lO1xuLy8gICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4vLyAgIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cbi8vIGlvbi1pY29uIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyB9XG5cblxuLy8gZm9ybXtcbi8vICAgaW9uLWl0ZW0ge1xuLy8gICAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgIH1cbi8vICAgLm9yIGlvbi1jb2wgaDIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4vLyAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgIH1cbiAgXG4vLyAgIC5xci1pbnB1dC1tYWluIHtcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLnFyLWlucHV0IHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuLy8gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5idG4tY3JlYXRlIHtcbi8vICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgICAtLXBhZGRpbmctbGVmdDogMjVweDtcbi8vICAgICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbi8vICAgfVxuLy8gICAub3Ige1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgfVxuLy8gICBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgY29sb3I6ICNhOWE5YTk7XG4vLyAgICAgZm9udC1zaXplOiAyMnB4O1xuLy8gICB9XG4vLyAgIC5pdGVtLXNlbGVjdCBpb24tbGFiZWwge1xuLy8gICAgIC13ZWJraXQtYm94LWZsZXg6IGluaXRpYWw7XG4vLyAgICAgLXdlYmtpdC1mbGV4OiBpbml0aWFsO1xuLy8gICAgIC1tcy1mbGV4OiBpbml0aWFsO1xuLy8gICAgIGZsZXg6IGluaXRpYWw7XG4vLyAgICAgbWF4LXdpZHRoOiAyMDBweDtcbi8vICAgfVxuLy8gICBpb24tc2VsZWN0IHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIH1cbiAgXG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/scancode/scancode.page.ts":
/*!*******************************************!*\
  !*** ./src/app/scancode/scancode.page.ts ***!
  \*******************************************/
/*! exports provided: ScancodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancodePage", function() { return ScancodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api-service/api.service */ "./src/app/providers/api-service/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/events-service/events.service */ "./src/app/providers/events-service/events.service.ts");







let ScancodePage = class ScancodePage {
    constructor(barcodeScanner, toastCtrl, loadingCtrl, apiService, events, translate, menuCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.translate = translate;
        this.menuCtrl = menuCtrl;
        this.error = null;
        this.loading = {};
        this.qrData = null;
        this.inputCode = null;
        this.scannedCode = null;
        this.tran_please_wait = 'Please Wait';
        this.tran_required_promocode = 'Please Enter Promo Code';
        this.tran_required_counterboy = 'Please Select Counter Boy';
        this.menuCtrl.enable(true, 'myMenu');
        this.translate.get('please_wait').subscribe(res => { this.tran_please_wait = res; });
        this.translate.get('required_promocode').subscribe(res => { this.tran_required_promocode = res; });
        this.apiService.home().subscribe(data => {
            this.user_id = data['id'];
        }, error => this.handleError(error));
    }
    ionViewDidEnter() {
        this.lastCounterBoy();
        this.userCounterBoyList();
    }
    lastCounterBoy() {
        this.apiService.lastCounterBoy().subscribe(data => {
            console.log('counterboy', data);
            this.counterboy = data['counter_boy'];
        }, error => console.log(error));
    }
    userCounterBoyList() {
        this.apiService.userCounterBoyList().subscribe(data => {
            console.log('dta', data);
            this.counterboy_list = data;
        }, error => console.log(error));
    }
    submitCounterBoyForm() {
        console.log(this.counterboyid);
        if (this.counterboyid == '' || this.counterboyid == null) {
            this.presentToast(this.tran_required_counterboy);
        }
        else {
            this.presentLoading();
            this.apiService.mapCounterBoyManual(this.counterboyid).subscribe(data => this.handleCounterBoyResponse(data), error => this.handleCounterBoyError(error));
        }
    }
    ngOnInit() {
    }
    handleCounterBoyResponse(data) {
        console.log(data);
        this.loadingCtrl.dismiss();
        if (data) {
            this.presentToast("Counter Boy mapped successfully");
        }
        this.scannedCode = '';
        this.lastCounterBoy();
        this.userCounterBoyList();
        // this.apiService.checkActivity().subscribe(data=>{
        //   console.log('check successful',data)
        // },error=>{
        //   console.log('err',error)
        // })
    }
    handleCounterBoyError(error) {
        console.log(error);
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
            if (this.scannedCode != '' && this.scannedCode != null) {
                this.applyQrcodetest(this.scannedCode);
            }
        }, (err) => {
            console.log('Error: ', err);
        });
    }
    submitQrcodeForm() {
        let toast = this.toastCtrl.create({
            message: '',
            duration: 1000,
            position: 'middle'
        });
        if (this.inputCode == '' || this.inputCode == null) {
            this.presentToast(this.tran_required_promocode);
        }
        else {
            this.applyQrcodetest(this.inputCode);
        }
    }
    applyQrcode(code) {
        this.presentLoading();
        this.apiService.submitQrCode(code).subscribe(data => this.handleResponse(data, code), error => this.handleError(error));
    }
    applyQrcodetest(code) {
        this.apiService.submitQrCodeTest(code, this.counterboy.id).subscribe(data => console.log('a', data), error => this.handleError(error));
    }
    handleResponse(data, code) {
        console.log(data);
        this.loadingCtrl.dismiss();
        let msg = data.message;
        this.presentToast(msg);
        this.qrData = null;
        this.inputCode = null;
        this.scannedCode = null;
        this.apiService.home().subscribe(data => this.events.publish({ name: 'update:userdata', params: data }));
        this.apiService.checkRetailerID(code).subscribe(data => {
            console.log('check successful', data);
        }, error => {
            console.log('err', error);
        });
        this.apiService.checkActivity().subscribe(data => {
            console.log('check successful', data);
        }, error => {
            console.log('err', error);
        });
        this.apiService.nextGift().subscribe(data => {
            console.log('next gift', data);
            if (data['point'] !== 0) {
                var notification_obj = { "heading": "SMARTWIREMEN", "message": "You need " + data['point'] + " points to get " + data['gift_name'], "url": "", "user_id": this.user_id };
            }
            else {
                var notification_obj = { "heading": "SMARTWIREMEN", "message": "Your next gift would be " + data['gift_name'], "url": "", "user_id": this.user_id };
            }
            this.apiService.sendNotification(notification_obj).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log('err', error);
        });
    }
    handleError(error) {
        console.log(error);
        this.loadingCtrl.dismiss();
        let errorMsg = '';
        if (error.status == 401) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = error.error.error;
        }
        let toast = this.toastCtrl.create({
            message: '',
            duration: 3000,
            position: 'middle'
        });
        if (errorMsg != '') {
            this.presentToast(errorMsg);
        }
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
    doRefresh(event) {
        this.lastCounterBoy();
        this.userCounterBoyList();
        event.target.complete();
    }
};
ScancodePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ScancodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scancode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scancode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scancode/scancode.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scancode.page.scss */ "./src/app/scancode/scancode.page.scss")).default]
    })
], ScancodePage);



/***/ })

}]);
//# sourceMappingURL=scancode-scancode-module-es2015.js.map