(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disclaimer-disclaimer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisclaimerDisclaimerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Disclaimer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <!-- <p>I understand that as per the new guidelines provided by Income Tax Department under the section 194R, I am required to furnish PAN Card details. I hereby confirm that I am submitting my PAN card details and company can pay 10% TDS on the benefits given to me. I give my consent to company to pay 10% TDS as per section 194R if the value of benefits given to me exceeds Rs. 20,000 and above during financial year.</p>\n      <p>I further declare that information provided by me about <span class=\"cb\">PAN card, PAN card linked mobile number & Aadhaar card</span> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.</p>\n      <p>I am well aware of the fact that, if the information given by me is proved false/ not true, I will be liable for action as per the law. </p>\n       -->\n\n      <p>I understand that as per the new guidelines provided by Income Tax Department under the\n        section 194R, I am required to furnish PAN Card details. I hereby confirm that I am\n        submitting my PAN card details and company can pay 10% TDS on the benefits given to me.\n        I give my consent to company to pay 10% TDS as per section 194R if the value of benefits\n        given to me exceeds Rs. 20,000 and above during financial year.</p>\n      <p>I further declare that information provided by me about <strong color=\"primary\" class=\"cb\">PAN card & PAN card linked mobile number</strong> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.</p>\n      <p><strong>“I/ We declare that the information stated above is true and correct and I/ we further\n        undertake to indemnify your entity for any costs, damages and/ or any penal\n        consequences arising to you by relying on my/ our declaration.”</strong></p>\n\n        <!-- <p>I understand that as per the new guidelines provided by Income Tax Department under the section 194R, I am required to furnish PAN Card details. I hereby confirm that I do not posses PAN card and company can pay 22% TDS on the benefits given to me. I give my consent to company to pay 20% TDS as per section 194R if the value of benefits given to me exceeds Rs. 20,000 and above during financial year.</p>\n        <p>I further declare that information provided by me about <strong color=\"primary\" class=\"cb\">PAN card & PAN Card Linked mobile number</strong> submitted by me is true to the best of my knowledge and belief and nothing has been concealed therein.</p>\n        <p><strong>“I/ We declare that the information stated above is true and correct and I/ we further undertake to indemnify your entity for any costs, damages and/ or any penal consequences arising to you by relying on my/ our declaration.”</strong></p> -->\n      \n      <br>\n      <ion-list>\n        <ion-item class=\"bor\">\n          <ion-label>I Agree Terms and Conditions</ion-label>\n          <ion-checkbox slot=\"start\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n      <br>\n      <ion-button expand=\"block\" color=\"secondary\" shape=\"round\" slot=\"end\">Submit</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disclaimer/disclaimer-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/disclaimer/disclaimer-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DisclaimerPageRoutingModule */

    /***/
    function srcAppDisclaimerDisclaimerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisclaimerPageRoutingModule", function () {
        return DisclaimerPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _disclaimer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./disclaimer.page */
      "./src/app/disclaimer/disclaimer.page.ts");

      var routes = [{
        path: '',
        component: _disclaimer_page__WEBPACK_IMPORTED_MODULE_3__["DisclaimerPage"]
      }];

      var DisclaimerPageRoutingModule = /*#__PURE__*/_createClass(function DisclaimerPageRoutingModule() {
        _classCallCheck(this, DisclaimerPageRoutingModule);
      });

      DisclaimerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DisclaimerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disclaimer/disclaimer.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/disclaimer/disclaimer.module.ts ***!
      \*************************************************/

    /*! exports provided: DisclaimerPageModule */

    /***/
    function srcAppDisclaimerDisclaimerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisclaimerPageModule", function () {
        return DisclaimerPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./disclaimer-routing.module */
      "./src/app/disclaimer/disclaimer-routing.module.ts");
      /* harmony import */


      var _disclaimer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./disclaimer.page */
      "./src/app/disclaimer/disclaimer.page.ts");

      var DisclaimerPageModule = /*#__PURE__*/_createClass(function DisclaimerPageModule() {
        _classCallCheck(this, DisclaimerPageModule);
      });

      DisclaimerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisclaimerPageRoutingModule"]],
        declarations: [_disclaimer_page__WEBPACK_IMPORTED_MODULE_6__["DisclaimerPage"]]
      })], DisclaimerPageModule);
      /***/
    },

    /***/
    "./src/app/disclaimer/disclaimer.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/disclaimer/disclaimer.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisclaimerDisclaimerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bor {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.card-content-md p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.card-content-md p strong.cb {\n  font-weight: 600;\n  color: #0a4f8b;\n  --ion-text-color:#0a4f8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9kaXNjbGFpbWVyL2Rpc2NsYWltZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcntcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuLmNhcmQtY29udGVudC1tZCBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY2FyZC1jb250ZW50LW1kIHAgc3Ryb25nLmNie1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMGE0ZjhiO1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjojMGE0ZjhiO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/disclaimer/disclaimer.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/disclaimer/disclaimer.page.ts ***!
      \***********************************************/

    /*! exports provided: DisclaimerPage */

    /***/
    function srcAppDisclaimerDisclaimerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisclaimerPage", function () {
        return DisclaimerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DisclaimerPage = /*#__PURE__*/function () {
        function DisclaimerPage() {
          _classCallCheck(this, DisclaimerPage);
        }

        return _createClass(DisclaimerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      DisclaimerPage.ctorParameters = function () {
        return [];
      };

      DisclaimerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disclaimer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./disclaimer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disclaimer/disclaimer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./disclaimer.page.scss */
        "./src/app/disclaimer/disclaimer.page.scss"))["default"]]
      })], DisclaimerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disclaimer-disclaimer-module-es5.js.map