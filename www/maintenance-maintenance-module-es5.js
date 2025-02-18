(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMaintenanceMaintenancePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" style=\"background:#f4b404\">\n  <ion-row class=\"app-icon-container\" style=\"margin-top: 40%;\"> \n      <ion-col text-center>\n        <img src=\"../../assets/imgs/logo.png\" />      \n      </ion-col>\n    </ion-row>\n    <br>\n  <div style=\"text-align: center;\">\n    <p style=\"text-align: center;font-weight: bold;color:#0a4f8b ;font-size: 20px;\"> App is under development</p>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/maintenance/maintenance-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MaintenancePageRoutingModule */

    /***/
    function srcAppMaintenanceMaintenanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageRoutingModule", function () {
        return MaintenancePageRoutingModule;
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


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maintenance.page */
      "./src/app/maintenance/maintenance.page.ts");

      var routes = [{
        path: '',
        component: _maintenance_page__WEBPACK_IMPORTED_MODULE_3__["MaintenancePage"]
      }];

      var MaintenancePageRoutingModule = /*#__PURE__*/_createClass(function MaintenancePageRoutingModule() {
        _classCallCheck(this, MaintenancePageRoutingModule);
      });

      MaintenancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MaintenancePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/maintenance/maintenance.module.ts ***!
      \***************************************************/

    /*! exports provided: MaintenancePageModule */

    /***/
    function srcAppMaintenanceMaintenanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePageModule", function () {
        return MaintenancePageModule;
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


      var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maintenance-routing.module */
      "./src/app/maintenance/maintenance-routing.module.ts");
      /* harmony import */


      var _maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./maintenance.page */
      "./src/app/maintenance/maintenance.page.ts");

      var MaintenancePageModule = /*#__PURE__*/_createClass(function MaintenancePageModule() {
        _classCallCheck(this, MaintenancePageModule);
      });

      MaintenancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenancePageRoutingModule"]],
        declarations: [_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["MaintenancePage"]]
      })], MaintenancePageModule);
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/maintenance/maintenance.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMaintenanceMaintenancePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW50ZW5hbmNlL21haW50ZW5hbmNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/maintenance/maintenance.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/maintenance/maintenance.page.ts ***!
      \*************************************************/

    /*! exports provided: MaintenancePage */

    /***/
    function srcAppMaintenanceMaintenancePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenancePage", function () {
        return MaintenancePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MaintenancePage = /*#__PURE__*/function () {
        function MaintenancePage() {
          _classCallCheck(this, MaintenancePage);
        }

        return _createClass(MaintenancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      MaintenancePage.ctorParameters = function () {
        return [];
      };

      MaintenancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./maintenance.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./maintenance.page.scss */
        "./src/app/maintenance/maintenance.page.scss"))["default"]]
      })], MaintenancePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=maintenance-maintenance-module-es5.js.map