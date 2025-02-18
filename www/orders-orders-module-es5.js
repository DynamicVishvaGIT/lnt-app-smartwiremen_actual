(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content ></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"ion-padding-top ion-padding-horizontal\">\n    <ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\" style=\"text-align: start;margin-left: -26px;\">\n\t\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\" style=\"text-align: center;\">\n\t\t\t\t\t<strong class=\"header\" style=\"color:#131313;\">{{ 'orders' | translate }}</strong>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n    </ion-grid>\n  </div>\n\t<ion-searchbar class=\"custom\" name=\"search\" [(ngModel)]=\"terms\" placeholder=\"orders\" mode=\"ios\"></ion-searchbar>\n  <div class=\"order-card-gap\">\n    <ion-card class=\"ion-margin-bottom order-card border-left-color\" *ngFor=\"let item of items | search : terms; let i = index;\" (click)=\"itemSelected(item)\" mode=\"ios\">\n      <ion-grid>   <!--style=\"margin-top: 11px;margin-left: 10px;\"-->\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-grid style=\"margin-top: -5px;\">\n              <ion-row class=\"border-bottom\">\n                <ion-col size=\"12\" class=\"ion-text-wrap\">\n                  <span style=\"font-size: medium;color:#fe4e4d;font-weight: 800;\">{{ 'order_id' | translate }} : </span> <span style=\"font-size: medium;color:#131313;font-weight: 800;\">#{{ item.id }}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"text-header-align\">\n                <ion-col size=\"12\" style=\"text-align:start;\">\n                  <span class=\"card-header\">{{ item.gift_name }}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"text-header-align\" >\n                <ion-col size=\"12\" style=\"text-align:start;\">\n                  <span style=\"font-size: small;\">{{ item.created_at |date:\"dd MMM y, h:mm a\"}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'orders' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content >\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of items\" mode=\"md\" (click)=\"itemSelected(item)\">\n    <ion-card-header>\n      <ion-card-subtitle color=\"dark\">{{ 'order_id' | translate }} #{{ item.id }}</ion-card-subtitle>\n      <ion-card-subtitle ><b>{{ item.gift_name }}</b></ion-card-subtitle>\n      <ion-card-subtitle>{{ item.created_at |date:\"dd MMM y, h:mm a\"}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/orders/orders-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/orders/orders-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = /*#__PURE__*/_createClass(function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      });

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/orders/orders.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.module.ts ***!
      \*****************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/orders/orders.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/search-pipe.module */
      "./src/app/pipes/search-pipe.module.ts");

      var OrdersPageModule = /*#__PURE__*/_createClass(function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      });

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _pipes_search_pipe_module__WEBPACK_IMPORTED_MODULE_8__["SearchPipeModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/orders/orders.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-color: #EFF3F6;\n}\n\nion-searchbar.custom {\n  --background: #D8E7F0;\n  --color: #00000096;\n  --clear-button-color: black;\n}\n\n.order-card-gap {\n  margin-top: 12px;\n}\n\n.order-card {\n  height: 117px;\n  border-radius: 10px;\n  margin-top: -3px;\n}\n\n.card-header {\n  font-size: 14px;\n  color: #131313;\n  font-weight: 800;\n  text-transform: none;\n}\n\n.gap {\n  margin-top: 30px;\n}\n\n.text-header-align {\n  font-size: smaller;\n  color: #b1b1b1;\n  margin-top: 4px;\n}\n\n.text-body-align {\n  font-size: small;\n}\n\np {\n  border: 2px solid #cdc5c545;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-left: 10px;\n  margin-right: 8px;\n}\n\n.border-bottom {\n  border-bottom: 2px dotted #00000017;\n}\n\n.border-left-color {\n  border-left: 3px solid #fe4e4d;\n}\n\n.right-arrow {\n  font-size: 14px;\n  color: black;\n  font-weight: 500;\n  margin-top: 2px;\n  margin-left: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUNBQUE7QUFFSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNjtcbn1cbmlvbi1zZWFyY2hiYXIuY3VzdG9tIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEOEU3RjA7XG4gICAgLS1jb2xvcjogIzAwMDAwMDk2O1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiBibGFjaztcbn1cbi5vcmRlci1jYXJkLWdhcCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm9yZGVyLWNhcmQge1xuICAgIGhlaWdodDogMTE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IzEzMTMxMztcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uZ2Fwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi50ZXh0LWhlYWRlci1hbGlnbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGNvbG9yOiAjYjFiMWIxO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cbiAgXG4udGV4dC1ib2R5LWFsaWdue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgLy9tYXJnaW4tdG9wOiAtOHB4O1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2RjNWM1NDU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDAwMDE3O1xufVxuXG4uYm9yZGVyLWxlZnQtY29sb3J7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmU0ZTRkO1xufVxuXG4ucmlnaHQtYXJyb3d7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/orders/orders.page.ts":
    /*!***************************************!*\
      !*** ./src/app/orders/orders.page.ts ***!
      \***************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
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


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(apiService, loadingCtrl, translate, menuCtrl, toastCtrl, events, router) {
          var _this = this;

          _classCallCheck(this, OrdersPage);

          this.apiService = apiService;
          this.loadingCtrl = loadingCtrl;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.toastCtrl = toastCtrl;
          this.events = events;
          this.router = router;
          this.loading = {};
          this.items = [];
          this.refresher = null;
          this.tran_please_wait = 'Please Wait';
          this.menuCtrl.enable(true, 'myMenu');
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
        }

        return _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentLoading();
            this.loadOrders();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadOrders();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.loadOrders();
            event.target.complete();
          }
        }, {
          key: "loadOrders",
          value: function loadOrders() {
            var _this2 = this;

            this.apiService.orders().subscribe(function (data) {
              return _this2.handleResponse(data);
            }, function (error) {
              return _this2.handleError(error);
            });
            this.apiService.home().subscribe(function (data) {
              _this2.events.publish({
                name: 'update:userdata',
                params: data
              });
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.loadingCtrl.dismiss();
            this.items = data.orders; // if(this.refresher != null){
            //   this.refresher.complete();
            // }
            // this.refresher = null;

            this.loadingCtrl.dismiss();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loadingCtrl.dismiss();
            console.log(error);
          }
        }, {
          key: "itemSelected",
          value: function itemSelected(item) {
            // this.events.sharingValue = item;
            this.router.navigate(['view-order', item.id]);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'crescent',
                      message: this.tran_please_wait + '...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home']);
          }
        }]);
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=orders-orders-module-es5.js.map