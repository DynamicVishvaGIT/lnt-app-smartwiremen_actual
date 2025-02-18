(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-order-view-order-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewOrderViewOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <div class=\"ion-padding-top ion-padding-horizontal\">\n      \t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -10px;\" (click)=\"goBack()\">\n\t\t\t\t\t<ion-icon name=\"chevron-back-outline\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ 'view_order' | translate }}</strong>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n      \t</ion-grid>\n    </div>\n\t<div class=\"gap\" *ngIf=\"view_order\">\n\t\t<ion-grid>\n\t\t  <ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t  \t<ion-card class=\"order-card\"> \n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-row >\n\t\t\t\t\t\t\t<ion-col size=\"4\">{{ 'order_id' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" class=\"text-body-align\">#{{ view_order.id }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" >{{ 'courier_id' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" *ngIf=\"!view_order.courier_id\" class=\"text-body-align\">N/A</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" *ngIf=\"view_order.courier_id\" class=\"text-body-align\">#{{ view_order.courier_id ? view_order.courier_id : 'NA' }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" >{{ 'order_date' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" class=\"text-body-align\">{{ view_order.created_at|date :'dd MMM, yyyy' }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-card-content>\n\t\t\t  \t</ion-card>\n\t\t\t</ion-col>\n\t\t  </ion-row>\n\t\t</ion-grid>\n\t</div>\n\t<div class=\"gap2\" *ngIf=\"view_order\">\n\t\t<ion-grid>\n\t\t  <ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t  \t<ion-card class=\"order-card2 border-bottom-color\"> \n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">{{ 'product_name' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" class=\"text-body-align\">{{ view_order.gift_name }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" >{{ 'qty' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" >{{ view_order.quantity ? view_order.quantity : 'NA' }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\" >{{ 'total' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" >{{ view_order.total_points }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'request_received' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.request_registered == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.request_registered == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'request_registered' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.request_registered == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.request_registered == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'request_approved' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.request_approved == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.request_approved == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" >{{ 'waiting_commercial_clearance' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.waiting_commercial_clearance == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.waiting_commercial_clearance == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'gift_procured' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.gift_procured == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.gift_procured == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'gift_dispatched' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" class=\"icon-size\" color=\"success\" *ngIf=\"view_order.gift_dispatched == 'yes'\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"close-circle\" class=\"icon-size\" color=\"danger\" *ngIf=\"view_order.gift_dispatched == 'no'\"></ion-icon>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" >{{ 'dispatched_remark' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"6\" class=\"text-body-align\">{{view_order.dispatched_remark ? view_order.dispatched_remark : 'NA'}}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"5\"  *ngIf=\"view_order.dispatched_date\">{{ 'dispatched_date' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"7\" class=\"text-body-align\" *ngIf=\"view_order.dispatched_date\">{{ view_order.dispatched_date |date :'dd MMM, yyyy' }}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" >{{ 'cancel_remark' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" >{{view_order.cancel_reason ? view_order.cancel_reason : 'NA'}}</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" *ngIf=\"view_order.tracking_url\">{{ 'track_order' | translate }}:</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\" class=\"text-body-align\" *ngIf=\"view_order.tracking_url\">\n\t\t\t\t\t\t\t\t<ion-button (click)=\"openUrl(view_order.tracking_url)\" style=\"width: 76px; --color: white;\" color=\"primary\" size=\"small\" >{{ 'track' | translate }}</ion-button>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-card-content>\n\t\t\t  \t</ion-card>\n\t\t\t</ion-col>\n\t\t  </ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n\t<ion-buttons slot=\"start\">\n\t\t<ion-button (click)=\"goBack()\">\n\t\t  <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n\t\t</ion-button>\n\t  </ion-buttons>\n    <ion-title>{{ 'view_order' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-card mode=\"md\">\n  \t  \t<ion-card-content>\n  \t\t    <ion-card-title>\n\t\t\t\t{{ 'order_details' | translate }}\n\t\t\t</ion-card-title>\n\t\t\t<ion-row *ngIf=\"view_order\">\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'order_id' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >#{{ view_order.id }}</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'courier_id' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" *ngIf=\"!view_order.courier_id\">N/A</ion-col>\n\t\t\t\t<ion-col size=\"6\" *ngIf=\"view_order.courier_id\">#{{ view_order.courier_id ? view_order.courier_id : 'NA' }}</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'order_date' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >{{ view_order.created_at|date :'dd MMM, yyyy' }}</ion-col>\n\t\t\t\t\t\n\t\t\t\t<ion-col size=\"6\" >{{ 'product_name' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >{{ view_order.gift_name }}</ion-col>\n\t\t\t\t\t\n\t\t\t\t<ion-col size=\"6\" >{{ 'qty' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >{{ view_order.quantity }}</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'total' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >{{ view_order.total_points }}</ion-col>\n\t\t\t\t\n\t\t\t\t<ion-col size=\"6\" >{{ 'request_received' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.request_received == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.request_received == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'request_registered' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.request_registered == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.request_registered == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'request_approved' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.request_approved == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.request_approved == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t\t<ion-col size=\"6\" >{{ 'waiting_commercial_clearance' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.waiting_commercial_clearance == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.waiting_commercial_clearance == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'gift_procured' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.gift_procured == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.gift_procured == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'gift_dispatched' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"view_order.gift_dispatched == 'yes'\"></ion-icon>\n\t\t\t\t\t<ion-icon name=\"close-circle\" color=\"danger\" *ngIf=\"view_order.gift_dispatched == 'no'\"></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t\t<ion-col size=\"6\" >{{ 'dispatched_remark' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<span>{{view_order.dispatched_remark ? view_order.dispatched_remark : 'NA'}}</span>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'dispatched_date' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<span *ngIf=\"view_order.dispatched_date\">{{ view_order.dispatched_date |date :'dd MMM, yyyy' }}</span>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'cancel_remark' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<span>{{view_order.cancel_reason ? view_order.cancel_reason : 'NA'}}</span>\n\t\t\t\t</ion-col>\n\n\t\t\t\t<ion-col size=\"6\" >{{ 'track_order' | translate }}</ion-col>\n\t\t\t\t<ion-col size=\"6\" >\n\t\t\t\t\t<button (click)=\"openUrl(view_order.tracking_url)\" *ngIf=\"view_order.tracking_url\">{{ 'track' | translate }}</button>\n\t\t\t\t</ion-col>\n\n\t\t\t</ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n -->\n";
      /***/
    },

    /***/
    "./src/app/view-order/view-order-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/view-order/view-order-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ViewOrderPageRoutingModule */

    /***/
    function srcAppViewOrderViewOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewOrderPageRoutingModule", function () {
        return ViewOrderPageRoutingModule;
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


      var _view_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-order.page */
      "./src/app/view-order/view-order.page.ts");

      var routes = [{
        path: '',
        component: _view_order_page__WEBPACK_IMPORTED_MODULE_3__["ViewOrderPage"]
      }];

      var ViewOrderPageRoutingModule = /*#__PURE__*/_createClass(function ViewOrderPageRoutingModule() {
        _classCallCheck(this, ViewOrderPageRoutingModule);
      });

      ViewOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewOrderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/view-order/view-order.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/view-order/view-order.module.ts ***!
      \*************************************************/

    /*! exports provided: ViewOrderPageModule */

    /***/
    function srcAppViewOrderViewOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewOrderPageModule", function () {
        return ViewOrderPageModule;
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


      var _view_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-order-routing.module */
      "./src/app/view-order/view-order-routing.module.ts");
      /* harmony import */


      var _view_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-order.page */
      "./src/app/view-order/view-order.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ViewOrderPageModule = /*#__PURE__*/_createClass(function ViewOrderPageModule() {
        _classCallCheck(this, ViewOrderPageModule);
      });

      ViewOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewOrderPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_view_order_page__WEBPACK_IMPORTED_MODULE_6__["ViewOrderPage"]]
      })], ViewOrderPageModule);
      /***/
    },

    /***/
    "./src/app/view-order/view-order.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/view-order/view-order.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewOrderViewOrderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\n.gap {\n  margin-top: 10px;\n}\n\n.gap2 {\n  margin-top: -7px;\n}\n\n.order-card {\n  margin-top: -8px;\n  height: auto;\n  border-radius: 12px;\n  width: 95%;\n  background: #015c8d;\n  color: #ffff;\n}\n\n.text-body-align {\n  text-transform: none;\n  margin-left: -23px;\n}\n\n.order-card2 {\n  margin-top: -8px;\n  height: auto;\n  border-radius: 12px;\n  width: 95%;\n  background: #ffff;\n  color: #131313;\n}\n\n.icon-size {\n  font-size: 20px;\n}\n\n.border-bottom-color {\n  border-bottom: 5px solid #015c8d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1vcmRlci92aWV3LW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC92aWV3LW9yZGVyL3ZpZXctb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y2O1xufVxuLmdhcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5nYXAye1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG59XG4ub3JkZXItY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYmFja2dyb3VuZDogIzAxNWM4ZDtcbiAgICBjb2xvcjojZmZmZjtcbn1cbiAgXG4udGV4dC1ib2R5LWFsaWdue1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjNweDtcbn1cbi5vcmRlci1jYXJkMiB7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgY29sb3I6IzEzMTMxMztcbn1cbi5pY29uLXNpemV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJvcmRlci1ib3R0b20tY29sb3J7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMTVjOGQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/view-order/view-order.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/view-order/view-order.page.ts ***!
      \***********************************************/

    /*! exports provided: ViewOrderPage */

    /***/
    function srcAppViewOrderViewOrderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewOrderPage", function () {
        return ViewOrderPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");

      var ViewOrderPage = /*#__PURE__*/function () {
        function ViewOrderPage(menuCtrl, route, router, events, apiService) {
          _classCallCheck(this, ViewOrderPage);

          this.menuCtrl = menuCtrl;
          this.route = route;
          this.router = router;
          this.events = events;
          this.apiService = apiService;
          this.menuCtrl.enable(true, 'myMenu');
        }

        return _createClass(ViewOrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openUrl",
          value: function openUrl(url) {
            window.open(url, '_system');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['orders']);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.route.paramMap.subscribe(function (params) {
              _this.id = params.get("id");
              console.log(_this.id);

              _this.apiService.order_details(_this.id).subscribe(function (data) {
                console.log(data);
                _this.view_order = data;
              }, function (err) {
                console.log(err);
              });
            });
          }
        }]);
      }();

      ViewOrderPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }];
      };

      ViewOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-order.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-order.page.scss */
        "./src/app/view-order/view-order.page.scss"))["default"]]
      })], ViewOrderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-order-view-order-module-es5.js.map