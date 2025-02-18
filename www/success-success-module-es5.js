(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-success-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSuccessSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>KYC Update Successful</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <br>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"3\">\n          <div class=\"ion-text-center\" style=\"text-align: center\">\n            <img src=\"../assets/imgs/checked.png\" class=\"checked\"/>\n          </div> \n        </ion-col>\n      </ion-row>\n      <br>\n      <!-- <ion-row>\n        <div class=\"ion-text-center\" style=\"text-align: center\">\n          <p class=\"ion-text-center\" style=\"text-align: center\">Thank you for submitting the document for verification.</p>\n        </div>\n      </ion-row> -->\n      <ion-row class=\"User_Label_Section\">\n        <ion-col text-center>\n          <ion-label class=\"user_Name\">Thank you for submitting the document for verification.</ion-label>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-button expand=\"block\" color=\"secondary\" shape=\"round\" (click)=\"goHome()\"> Home</ion-button>\n      \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/success/success-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/success/success-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: SuccessPageRoutingModule */

    /***/
    function srcAppSuccessSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
        return SuccessPageRoutingModule;
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


      var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success.page */
      "./src/app/success/success.page.ts");

      var routes = [{
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
      }];

      var SuccessPageRoutingModule = /*#__PURE__*/_createClass(function SuccessPageRoutingModule() {
        _classCallCheck(this, SuccessPageRoutingModule);
      });

      SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuccessPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/success/success.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/success/success.module.ts ***!
      \*******************************************/

    /*! exports provided: SuccessPageModule */

    /***/
    function srcAppSuccessSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
        return SuccessPageModule;
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


      var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./success-routing.module */
      "./src/app/success/success-routing.module.ts");
      /* harmony import */


      var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success.page */
      "./src/app/success/success.page.ts");

      var SuccessPageModule = /*#__PURE__*/_createClass(function SuccessPageModule() {
        _classCallCheck(this, SuccessPageModule);
      });

      SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
      })], SuccessPageModule);
      /***/
    },

    /***/
    "./src/app/success/success.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/success/success.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppSuccessSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checked {\n  width: 80px;\n}\n\n.user_Name {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tlZHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbi51c2VyX05hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/success/success.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/success/success.page.ts ***!
      \*****************************************/

    /*! exports provided: SuccessPage */

    /***/
    function srcAppSuccessSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
        return SuccessPage;
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

      var SuccessPage = /*#__PURE__*/function () {
        function SuccessPage(router) {
          _classCallCheck(this, SuccessPage);

          this.router = router;
        }

        return _createClass(SuccessPage, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['home']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      SuccessPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./success.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./success.page.scss */
        "./src/app/success/success.page.scss"))["default"]]
      })], SuccessPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=success-success-module-es5.js.map