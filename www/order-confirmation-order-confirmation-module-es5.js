(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-confirmation-order-confirmation-module"], {
    /***/
    "./src/app/order-confirmation/order-confirmation-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/order-confirmation/order-confirmation-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OrderConfirmationPageRoutingModule */

    /***/
    function srcAppOrderConfirmationOrderConfirmationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageRoutingModule", function () {
        return OrderConfirmationPageRoutingModule;
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


      var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-confirmation.page */
      "./src/app/order-confirmation/order-confirmation.page.ts");

      var routes = [{
        path: '',
        component: _order_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmationPage"]
      }];

      var OrderConfirmationPageRoutingModule = /*#__PURE__*/_createClass(function OrderConfirmationPageRoutingModule() {
        _classCallCheck(this, OrderConfirmationPageRoutingModule);
      });

      OrderConfirmationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderConfirmationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/order-confirmation/order-confirmation.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/order-confirmation/order-confirmation.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OrderConfirmationPageModule */

    /***/
    function srcAppOrderConfirmationOrderConfirmationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function () {
        return OrderConfirmationPageModule;
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


      var _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-confirmation-routing.module */
      "./src/app/order-confirmation/order-confirmation-routing.module.ts");
      /* harmony import */


      var _order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-confirmation.page */
      "./src/app/order-confirmation/order-confirmation.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var OrderConfirmationPageModule = /*#__PURE__*/_createClass(function OrderConfirmationPageModule() {
        _classCallCheck(this, OrderConfirmationPageModule);
      });

      OrderConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_order_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["OrderConfirmationPage"]]
      })], OrderConfirmationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-confirmation-order-confirmation-module-es5.js.map