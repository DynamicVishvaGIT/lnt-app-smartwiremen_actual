(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tds-tds-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTdsTdsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>TDS </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <br> -->\n  \n  <ion-row class=\"heading-info\" style=\"background: #09467a;\">\n    <ion-col size=\"4\"  class=\"home-header-img\">\n      <img src=\"../assets/imgs/avatar2.png\" /> \n      <!-- <img src=\"\" />  -->\n    </ion-col>\n    <ion-col size=\"8\"  class=\"home-header-info\">\n      <br>\n      <h3>Total Points <span> {{userInfo.points}}</span></h3>\n      <h3>TDS Points <span> {{fetchtdspoint.tdsbalance}}</span></h3>\n      <!-- <h3>TDS Points <span> 800</span></h3> -->\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <br><br>\n    <ion-col size=\"12\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goTds()\">\n            <ion-chip color=\"secondary\" style=\"width: 96%;\">\n              <ion-icon name=\"document-text-outline\"></ion-icon>\n              <ion-label>{{kyc_status.tds_value}}% TDS Slab</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col> \n        <ion-col size=\"6\">\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" [hidden]=kychidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"danger\" style=\"width: 96%;\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n              <ion-label>{{kyc_status.kyc_status}}</ion-label>\n            </ion-chip>\n          </div>\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goBack()\" [hidden]=kycnthidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"danger\" style=\"width: 96%;\">\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n              <ion-label>{{kyc_status.kyc_status}}</ion-label>\n            </ion-chip>\n          </div>\n          <div class=\"info\" style=\"border-radius: 52px;padding: 4px !important;\" (click)=\"goKyca()\" [hidden]=kycahidden>\n            <!-- <h2>TDS Verified<span></span></h2> -->\n            <ion-chip color=\"success\" style=\"width: 96%;\">\n              <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n              <ion-label>KYC Approved</ion-label>\n            </ion-chip>\n          </div>\n        </ion-col> \n      </ion-row>\n    </ion-col>\n    <br>\n  </ion-row> \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-list>\n        <ion-list-header> \n          <h5>TDS Certificate</h5>\n        </ion-list-header>\n        <div *ngIf=\"fetchtds?.length > 0; else loggedOut\">\n        <ion-card  *ngFor=\"let tds of fetchtds\">\n          <!-- <a class=\"ion-home color-primary item\" href=\"https://smartwiremen.com/storage/tdscert/{{tds.quarterly_pdf}}\" (click)=\" return false;\">  -->\n            <ion-item (click)=\"openTDS(tds)\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n                </ion-avatar>\n                <ion-label>\n                  <h2>{{tds.date_quarterly}} </h2>\n                  <h3>Download TDS Certificate here</h3>\n                </ion-label>\n            </ion-item>\n          <!-- </a> -->\n         </ion-card>\n        </div>\n        <ng-template #loggedOut>\n          <ion-card>\n            <ion-item>\n              <ion-label>\n                <h3>No TDS Certificate available</h3>\n              </ion-label>\n            </ion-item>\n          </ion-card>\n        </ng-template>\n        <!--<ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Apr - Jun 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card>\n        <ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Jul - Sep 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card>\n        <ion-card (click)=\"downTds()\">\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../assets/imgs/download.png\" style=\"border-radius: 0;\"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>Oct - Des 2022</h2>\n                <h3>Download TDS Certificate here</h3>\n              </ion-label>\n          </ion-item>\n        </ion-card> -->\n\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tds/tds-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/tds/tds-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: TdsPageRoutingModule */

    /***/
    function srcAppTdsTdsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TdsPageRoutingModule", function () {
        return TdsPageRoutingModule;
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


      var _tds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tds.page */
      "./src/app/tds/tds.page.ts");

      var routes = [{
        path: '',
        component: _tds_page__WEBPACK_IMPORTED_MODULE_3__["TdsPage"]
      }];

      var TdsPageRoutingModule = /*#__PURE__*/_createClass(function TdsPageRoutingModule() {
        _classCallCheck(this, TdsPageRoutingModule);
      });

      TdsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TdsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tds/tds.module.ts":
    /*!***********************************!*\
      !*** ./src/app/tds/tds.module.ts ***!
      \***********************************/

    /*! exports provided: TdsPageModule */

    /***/
    function srcAppTdsTdsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TdsPageModule", function () {
        return TdsPageModule;
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


      var _tds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tds-routing.module */
      "./src/app/tds/tds-routing.module.ts");
      /* harmony import */


      var _tds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tds.page */
      "./src/app/tds/tds.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var TdsPageModule = /*#__PURE__*/_createClass(function TdsPageModule() {
        _classCallCheck(this, TdsPageModule);
      });

      TdsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tds_routing_module__WEBPACK_IMPORTED_MODULE_5__["TdsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_tds_page__WEBPACK_IMPORTED_MODULE_6__["TdsPage"]]
      })], TdsPageModule);
      /***/
    },

    /***/
    "./src/app/tds/tds.page.scss":
    /*!***********************************!*\
      !*** ./src/app/tds/tds.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppTdsTdsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".home-header-info h2 {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: #fff;\n  font-weight: 300;\n}\n\n.kyc-hide {\n  display: none !important;\n}\n\n.home-header-info h2 span {\n  font-weight: 500;\n}\n\n.home-header-info h3 {\n  font-size: 14px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-weight: 300;\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 4px;\n  color: #fff;\n}\n\n.home-header-info h3 span {\n  float: right;\n  padding-right: 7px;\n  font-weight: 500;\n}\n\n.home-header-img img {\n  margin-top: 18px;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  background-color: #fff;\n  padding: 3px;\n  margin-bottom: 18px;\n}\n\n.home-header-info {\n  text-align: left !important;\n}\n\n.info {\n  background: #ffffff;\n  padding: 25px 15px;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n  float: left;\n  width: 100%;\n  color: #333;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\na:-webkit-any-link {\n  color: -webkit-link;\n  cursor: pointer;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGRzL3Rkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFFO0VBQ0UsMkJBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvdGRzL3Rkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1oZWFkZXItaW5mbyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAua3ljLWhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob21lLWhlYWRlci1pbmZvIGgyIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtaGVhZGVyLWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtaGVhZGVyLWluZm8gaDMgc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1oZWFkZXItaW1nIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1oZWFkZXItaW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tds/tds.page.ts":
    /*!*********************************!*\
      !*** ./src/app/tds/tds.page.ts ***!
      \*********************************/

    /*! exports provided: TdsPage */

    /***/
    function srcAppTdsTdsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TdsPage", function () {
        return TdsPage;
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


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");

      var TdsPage = /*#__PURE__*/function () {
        function TdsPage(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, router, events, alertController) {
          var _this = this;

          _classCallCheck(this, TdsPage);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.tokenService = tokenService;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.events = events;
          this.alertController = alertController;
          this.kychidden = true;
          this.kycahidden = true;
          this.kycnthidden = true;
          this.error = null;
          this.loading = {};
          this.refresher = null;
          this.userInfo = {
            first_name: '',
            last_name: '',
            level: '',
            points: '',
            avatar: ''
          };
          this.fetchtdspoint = [];
          this.kyc_status = [];
          this.tran_please_wait = 'Please Wait';
          this.menuCtrl.enable(true);
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
        }

        return _createClass(TdsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentLoading();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.menuCtrl.enable(true);
            this.apiService.home().subscribe(function (data) {
              return _this2.handleResponse(data);
            }, function (error) {
              return _this2.handleError(error);
            });
            this.events.getEvent().subscribe(function (data) {
              if (data) {
                if (data.name == 'update:userdata') {
                  _this2.userInfo.first_name = data.params.first_name;
                  _this2.userInfo.last_name = data.params.last_name;
                  _this2.userInfo.level = data.params.level;
                  _this2.userInfo.points = data.params.points;
                  _this2.userInfo.avatar = data.params.avatar;
                  localStorage.setItem('save_username', data.params.username);
                }
              }
            });
            this.userfetchKycstatus();
            this.userfetchTds();
            this.userfetchTdspoints();
          }
        }, {
          key: "userfetchKycstatus",
          value: function userfetchKycstatus() {
            var _this3 = this;

            this.apiService.userfetchKycstatus().subscribe(function (data) {
              _this3.kyc_status = data;

              if (_this3.kyc_status[0]['tds_value'] == null || _this3.kyc_status[0]['tds_value'] == '') {
                _this3.kyc_status.tds_value = '20';
              } else {
                _this3.kyc_status.tds_value = _this3.kyc_status[0]['tds_value'];
              }

              if (_this3.kyc_status[0]['remark'] === null || _this3.kyc_status[0]['remark'] === '') {} else {
                _this3.presentAlert(_this3.kyc_status[0]['remark']);
              }

              if (_this3.kyc_status[0]['kyc_status'] == null) {
                _this3.kyc_status.kyc_status = 'KYC Not Uploaded';
                _this3.kychidden = true;
                _this3.kycahidden = true;
                _this3.kycnthidden = false; // this.openDis()
              } else if (_this3.kyc_status[0]['kyc_status'] == "1") {
                _this3.kyc_status.kyc_status = 'KYC Pending';
                _this3.kychidden = false;
                _this3.kycahidden = true;
                _this3.kycnthidden = true;
              } else if (_this3.kyc_status[0]['kyc_status'] == "3") {
                // this.presentAlert("You have already played this game")
                _this3.kyc_status.kyc_status = 'KYC Rejected';
                _this3.kychidden = true;
                _this3.kycahidden = true;
                _this3.kycnthidden = false; // this.openDis()
              } else {
                _this3.kychidden = true;
                _this3.kycahidden = false;
                _this3.kycnthidden = true;
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "userfetchTds",
          value: function userfetchTds() {
            var _this4 = this;

            this.apiService.userfetchTds().subscribe(function (data) {
              // console.log('userfetchTds', data)
              _this4.fetchtds = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "userfetchTdspoints",
          value: function userfetchTdspoints() {
            var _this5 = this;

            this.apiService.userfetchTdspoints().subscribe(function (data) {
              _this5.fetchtdspoint = data; // console.log('userfetchTdspoints', data)
              //       this.valid_for_game=data['tdspoint']['tdsbalance'];
              // this.game_status=data['game']['status'];
              // this.game_valid=data['valid'];
              // this.fetchtdspoint.tdsbalance = ;
              // console.log('tds',  this.fetchtdspoint['tdsbalance'])
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.events.publish({
              name: 'update:userdata',
              params: data
            });
            this.loadingCtrl.dismiss();
          }
        }, {
          key: "goKyca",
          value: function goKyca() {
            this.router.navigate(['kyca']);
          }
        }, {
          key: "goKyc",
          value: function goKyc() {
            this.router.navigate(['kyc']);
          }
        }, {
          key: "goTds",
          value: function goTds() {
            this.router.navigate(['tds']);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loadingCtrl.dismiss();
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            }

            if (errorMsg != '') {
              this.presentToast(errorMsg);
            } else {
              this.presentToast('');
            }
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

                  case 10:
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
                      duration: 3000,
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
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: message,
                      buttons: ['OK'],
                      mode: "ios"
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['home']);
          }
        }, {
          key: "openTDS",
          value: function openTDS(tds) {
            window.open('https://smartwiremen.com/storage/tdscert/' + tds.quarterly_pdf, '_system', 'location=yes');
          }
        }]);
      }();

      TdsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      TdsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tds.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tds/tds.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tds.page.scss */
        "./src/app/tds/tds.page.scss"))["default"]]
      })], TdsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tds-tds-module-es5.js.map