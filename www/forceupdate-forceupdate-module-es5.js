(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forceupdate-forceupdate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForceupdateForceupdatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n\n<ion-content class=\"ion-padding\" style=\"background:#f4b404\">\n  <ion-row class=\"app-icon-container\" style=\"margin-top: 40%;\"> \n      <ion-col text-center>\n        <img src=\"../../assets/imgs/logo.png\" />      \n      </ion-col>\n    </ion-row>\n    <br>\n  <div style=\"text-align: center;\">\n    <p style=\"text-align: center;font-weight: bold;color:#0a4f8b ;font-size: 20px;\"> Please Update Application</p>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/forceupdate/forceupdate-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/forceupdate/forceupdate-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForceupdatePageRoutingModule */

    /***/
    function srcAppForceupdateForceupdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceupdatePageRoutingModule", function () {
        return ForceupdatePageRoutingModule;
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


      var _forceupdate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forceupdate.page */
      "./src/app/forceupdate/forceupdate.page.ts");

      var routes = [{
        path: '',
        component: _forceupdate_page__WEBPACK_IMPORTED_MODULE_3__["ForceupdatePage"]
      }];

      var ForceupdatePageRoutingModule = /*#__PURE__*/_createClass(function ForceupdatePageRoutingModule() {
        _classCallCheck(this, ForceupdatePageRoutingModule);
      });

      ForceupdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForceupdatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forceupdate/forceupdate.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/forceupdate/forceupdate.module.ts ***!
      \***************************************************/

    /*! exports provided: ForceupdatePageModule */

    /***/
    function srcAppForceupdateForceupdateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceupdatePageModule", function () {
        return ForceupdatePageModule;
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


      var _forceupdate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forceupdate-routing.module */
      "./src/app/forceupdate/forceupdate-routing.module.ts");
      /* harmony import */


      var _forceupdate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forceupdate.page */
      "./src/app/forceupdate/forceupdate.page.ts");

      var ForceupdatePageModule = /*#__PURE__*/_createClass(function ForceupdatePageModule() {
        _classCallCheck(this, ForceupdatePageModule);
      });

      ForceupdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forceupdate_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForceupdatePageRoutingModule"]],
        declarations: [_forceupdate_page__WEBPACK_IMPORTED_MODULE_6__["ForceupdatePage"]]
      })], ForceupdatePageModule);
      /***/
    },

    /***/
    "./src/app/forceupdate/forceupdate.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/forceupdate/forceupdate.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppForceupdateForceupdatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmNldXBkYXRlL2ZvcmNldXBkYXRlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/forceupdate/forceupdate.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/forceupdate/forceupdate.page.ts ***!
      \*************************************************/

    /*! exports provided: ForceupdatePage */

    /***/
    function srcAppForceupdateForceupdatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceupdatePage", function () {
        return ForceupdatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ForceupdatePage = /*#__PURE__*/function () {
        function ForceupdatePage() {
          _classCallCheck(this, ForceupdatePage);
        }

        return _createClass(ForceupdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ForceupdatePage.ctorParameters = function () {
        return [];
      };

      ForceupdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forceupdate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forceupdate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forceupdate/forceupdate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forceupdate.page.scss */
        "./src/app/forceupdate/forceupdate.page.scss"))["default"]]
      })], ForceupdatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forceupdate-forceupdate-module-es5.js.map