(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectdetail-projectdetail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProjectdetailProjectdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"arrow-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Project Lead Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"project_detail\">\n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Details</strong></div>\n        </ion-col>\n      </ion-row>\n    \n      <ion-card-content >\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Project Name ::  <b>{{project_detail.pr_name}}</b></p>  \n          \n        </ion-row>\n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Address 1 :: <b>{{project_detail.add_1}}</b></p>\n        </ion-row>\n      \n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Address 2 :: <b>{{project_detail.add_2}}</b></p>\n        </ion-row>\n  \n       <ion-row class=\"ion-margin-bottom\">\n         <p>Contact :: <b>{{project_detail.pr_contact}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <!-- </ion-card>\n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Influencer</strong></div>\n        </ion-col>\n       \n      </ion-row>\n    \n      <ion-card-content >\n       \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Contractor Name :: <b>{{project_detail.pr_contractor}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Builder Name :: <b>{{project_detail.pr_builder}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Developer Name :: <b>{{project_detail.pr_developer}}</b></p>\n         \n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Architect & Interior Designer Name :: <b>{{project_detail.pr_achitect}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Consultant Name :: <b>{{project_detail.pr_consultant}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>House Owner Name :: <b>{{project_detail.pr_houseowner}}</b></p>\n       \n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Decision Maker Name :: <b>{{project_detail.pr_decmaker}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Retailer/Distributor Name :: <b>{{project_detail.pr_retailers_distributors}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Approximate Value of Requirement</strong></div>\n        </ion-col>\n        \n      </ion-row>\n    \n      <ion-card-content >\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Oris Name :: <b>{{project_detail.Oris}}</b></p>\n        </ion-row>\n  \n        <ion-row class=\"ion-margin-bottom\">\n          <p>Tripper :: <b>{{project_detail.tripper}}</b></p>\n        </ion-row>\n        <ion-row class=\"ion-margin-bottom\">\n          <p>Englaze :: <b>{{project_detail.englaze}}</b></p>\n        </ion-row>\n  \n       <ion-row class=\"ion-margin-bottom\">\n         <p>Entice :: <b>{{project_detail.entice}}</b></p>\n        </ion-row>\n       <ion-row class=\"ion-margin-bottom\">\n         <p>Engem :: <b>{{project_detail.engem}}</b></p>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    \n    \n    <ion-card>\n    \n      <ion-row class=\"card-heading\" >\n        <ion-col size=\"10\" >\n          <div class=\"ion-text-start\"><strong >Project Status </strong></div>\n        </ion-col>\n       \n      </ion-row>\n    \n      <ion-card-content >\n        <div *ngIf=\"project_detail.pr_status=='Won'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Name of Retailer/PTP/DSP :: <b>{{project_detail.won_ptp_dsp}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Value :: <b>{{project_detail.won_value}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Order Routed :: <b>{{project_detail.won_routed}}</b></p>  \n          </ion-row>\n        </div>\n        <div *ngIf=\"project_detail.pr_status=='Lost'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Name of competitor who has won :: <b>{{project_detail.lost_name}}</b></p>  \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Value :: <b>{{project_detail.lost_value}}</b></p>  \n          </ion-row>\n         \n        </div>\n        <div *ngIf=\"project_detail.pr_status=='In Progress'\">\n        <ion-row class=\"ion-margin-bottom\">\n          <p><b><b></b>{{project_detail.pr_status}}</b> </p> \n           </ion-row>\n        </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content >\n          <ion-row class=\"ion-margin-bottom\">\n          <p>Competitor Name :: <b>{{competition}}</b></p> \n        </ion-row>\n  \n          <ion-row class=\"ion-margin-bottom\"> \n              <p>Project Classification :: <b>{{project_detail.pr_classification}}</b></p> \n            </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Stage of Project :: <b>{{project_detail.pr_stage}}</b></p> \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Chances of Winning :: <b>{{project_detail.pr_chances}}</b></p> \n          </ion-row>\n          <ion-row class=\"ion-margin-bottom\">\n            <p>Tentative Order Transition Month :: <b>{{project_detail.order_month}}</b></p>\n           </ion-row>\n          <ion-row class=\"ion-margin-bottom\"><p>Project Source :: <b>{{project_detail.pr_source}}</b></p> \n          </ion-row>\n         \n        </ion-card-content>\n    </ion-card> -->\n  </div>\n  </ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/projectdetail/projectdetail-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/projectdetail/projectdetail-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProjectdetailPageRoutingModule */

    /***/
    function srcAppProjectdetailProjectdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectdetailPageRoutingModule", function () {
        return ProjectdetailPageRoutingModule;
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


      var _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projectdetail.page */
      "./src/app/projectdetail/projectdetail.page.ts");

      var routes = [{
        path: '',
        component: _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProjectdetailPage"]
      }];

      var ProjectdetailPageRoutingModule = /*#__PURE__*/_createClass(function ProjectdetailPageRoutingModule() {
        _classCallCheck(this, ProjectdetailPageRoutingModule);
      });

      ProjectdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjectdetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/projectdetail/projectdetail.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/projectdetail/projectdetail.module.ts ***!
      \*******************************************************/

    /*! exports provided: ProjectdetailPageModule */

    /***/
    function srcAppProjectdetailProjectdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectdetailPageModule", function () {
        return ProjectdetailPageModule;
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


      var _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projectdetail-routing.module */
      "./src/app/projectdetail/projectdetail-routing.module.ts");
      /* harmony import */


      var _projectdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projectdetail.page */
      "./src/app/projectdetail/projectdetail.page.ts");

      var ProjectdetailPageModule = /*#__PURE__*/_createClass(function ProjectdetailPageModule() {
        _classCallCheck(this, ProjectdetailPageModule);
      });

      ProjectdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectdetailPageRoutingModule"]],
        declarations: [_projectdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectdetailPage"]]
      })], ProjectdetailPageModule);
      /***/
    },

    /***/
    "./src/app/projectdetail/projectdetail.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/projectdetail/projectdetail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProjectdetailProjectdetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-heading {\n  height: 40px;\n  padding: 7px;\n  background-color: #01294c;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRldGFpbC9wcm9qZWN0ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0ZGV0YWlsL3Byb2plY3RkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGluZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyOTRjO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/projectdetail/projectdetail.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/projectdetail/projectdetail.page.ts ***!
      \*****************************************************/

    /*! exports provided: ProjectdetailPage */

    /***/
    function srcAppProjectdetailProjectdetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectdetailPage", function () {
        return ProjectdetailPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ProjectdetailPage = /*#__PURE__*/function () {
        function ProjectdetailPage(apiService, loadingCtrl, route, router) {
          _classCallCheck(this, ProjectdetailPage);

          this.apiService = apiService;
          this.loadingCtrl = loadingCtrl;
          this.route = route;
          this.router = router;
          this.loading = {};
          this.tran_please_wait = "Please Wait";
        }

        return _createClass(ProjectdetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewDidLoad ProjectdetailPage');
            var pr_id = this.route.snapshot.paramMap.get('project_id');
            console.log('pr_id', pr_id);

            if (pr_id) {
              this.loadProjectDetails(pr_id);
            }
          }
        }, {
          key: "loadProjectDetails",
          value: function loadProjectDetails(pr_id) {
            var _this = this;

            this.presentLoading();
            this.apiService.projectDetails(pr_id).subscribe(function (data) {
              _this.loadingCtrl.dismiss();

              _this.project = data;
              _this.project_detail = _this.project.project[0]; // this.competition=this.project.Competition

              console.log('loadProjectDetails', data);
            }, function (error) {
              _this.loadingCtrl.dismiss();

              console.log('error', error);
            });
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
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['projectlist']);
          }
        }]);
      }();

      ProjectdetailPage.ctorParameters = function () {
        return [{
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ProjectdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./projectdetail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdetail/projectdetail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./projectdetail.page.scss */
        "./src/app/projectdetail/projectdetail.page.scss"))["default"]]
      })], ProjectdetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=projectdetail-projectdetail-module-es5.js.map