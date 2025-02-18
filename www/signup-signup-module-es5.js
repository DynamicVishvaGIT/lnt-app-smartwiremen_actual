(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"header-align\">\n    <p style=\"font-size: 28px;font-weight: 600;padding-left: 4px;\">Sign Up</p>  \n    <p style=\"font-size: 15px;margin-top: -16px;color: #00000080;padding-left: 4px;\">Tell us more about yourself</p>  \n  </div>\n  <div mode=\"ios\" class=\"content-align\">\n    <form (ngSubmit)=\"signupForm()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">First Name</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <!-- <br> -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Last Name</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Mobile Number</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"number\" maxLength=\"10\" [(ngModel)]=\"signupFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mob_number' | translate }}\" class=\"ion-input\" >\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label class=\"required ion-label\">State</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ionic-selectable  [(ngModel)]=\"signupFormField.state\" name=\"state\" [items]=\"states\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_state' | translate }}\"  [canSearch]=\"true\" (onChange)=\"changeState($event)\" class=\"ion-select\">\n            </ionic-selectable>          \n          </ion-item> \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label class=\"required ion-label\">City</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ionic-selectable [(ngModel)]=\"signupFormField.city\" name=\"city\" [items]=\"cities\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_city' | translate }}\" searchPlaceholder=\"{{ 'search_city' | translate }}\" [canSearch]=\"true\" class=\"ion-select\">\n            </ionic-selectable>          \n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required ion-label\">Pincode</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"tel\" [(ngModel)]=\"signupFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\" maxLength=\"6\" minLength=\"6\" [pattern]=\"pincode_pattern\" class=\"ion-input\" >\n          </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" color=\"primary\" class=\"login-btn\" expand=\"block\">\n            {{ 'sign_up' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row style=\"margin-top: 20px;font-size: smaller;\">\n      <ion-col size=\"12\">\n         {{ 'already_have_an_acc' | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"font-size: smaller;color: #015c8d;\">\n      <ion-col (click)=\"goLogin()\">\n        <b>{{ 'sign_in' | translate }}</b>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content class=\"ion-padding\">\n  \n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center\">\n      <img src=\"../../assets/imgs/logo.png\" />      \n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-grid>\n      <form (ngSubmit)=\"signupForm()\">\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.first_name\" name=\"first_name\" placeholder=\"{{ 'enter_first_name' | translate }}\" ></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"person\"></ion-icon></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"signupFormField.last_name\" name=\"last_name\" placeholder=\"{{ 'enter_last_name' | translate }}\" ></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"call\"></ion-icon></ion-label>\n            <ion-input type=\"number\" maxLength=\"10\" [(ngModel)]=\"signupFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mob_number' | translate }}\"></ion-input>\n          </ion-item>\n        </ion-row>\n     <ion-row>\n       \n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\" style=\"-webkit-flex: none!important; \n            flex: none!important;\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            <ionic-selectable  [(ngModel)]=\"signupFormField.state\" name=\"state\" [items]=\"states\" itemValueField=\"id\" itemTextField=\"name\" placeholder=\"{{ 'select_state' | translate }}\"  [canSearch]=\"true\" (onChange)=\"changeState($event)\">\n            </ionic-selectable>\n           \n          </ion-item>\n        </ion-row>\n        <ion-row> \n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\" style=\"-webkit-flex: none!important; \n            flex: none!important;\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            \n            <ionic-selectable   #cityComponent \n                [(ngModel)]=\"signupFormField.city\" \n                name=\"city\" \n                [items]=\"cities\" \n                itemValueField=\"id\" \n                itemTextField=\"name\" \n                placeholder=\"{{ 'select_city' | translate }}\" \n                searchPlaceholder=\"{{ 'search_city' | translate }}\" \n                [canSearch]=\"true\"    \n              >\n            \t\n            </ionic-selectable>\n           \n          </ion-item>\n        </ion-row> \n        <ion-row>\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-label slot=\"start\"><ion-icon name=\"location-sharp\"></ion-icon></ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"signupFormField.pincode\" name=\"pincode\" placeholder=\"{{ 'enter_pincode' | translate }}\" maxLength=\"6\" minLength=\"6\" [pattern]=\"pincode_pattern\"></ion-input>\n          </ion-item>\n        </ion-row> \n        <ion-button class=\"login-btn\"   shape=\"round\" color=\"secondary\"  expand=\"block\" slot=\"start\" type=\"submit\">\n        \t<ion-icon  name=\"md-log-in\" style=\"margin-right: 8px;\"></ion-icon> {{ 'sign_up' | translate }}\n        </ion-button>\n      </form>\n      <ion-row class=\"center\" style=\"margin-top: 20px;\">\n\t\t<ion-col size=\"12\" class=\"sign-up-link\">\n\t\t\t {{ 'already_have_an_acc' | translate }} <button  (click)=\"goLogin()\"> <ion-icon name=\"lock-closed-sharp\"></ion-icon> {{ 'sign_in_here' | translate }} </button>\n\t\t</ion-col>\n\t  </ion-row>\n\n  </ion-grid>\n</ion-list>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      });

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");

      var SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      });

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-align {\n  margin-top: 25%;\n  padding-left: 23px;\n  text-align: center;\n}\n\n.content-align {\n  margin-top: 10%;\n  padding-left: 23px;\n}\n\n.login-btn {\n  width: 95%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  color: white;\n}\n\n.icon-align {\n  font-size: smaller;\n  padding-left: 10px;\n}\n\n.ion-select {\n  width: 100% !important;\n  max-width: 100%;\n  --padding-start: 0;\n  min-height: 33px;\n  border-radius: 10px;\n  padding-left: 10px;\n  background: #d8e6ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hbGlnbntcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtYWxpZ257XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgd2lkdGg6IDk1JTtcbiAgLS1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmljb24tYWxpZ257XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtaW4taGVpZ2h0OiAzM3B4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOWI5Y2E2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBwYWRkaW5nOiAzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Q4ZTZlZjtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");
      /* harmony import */


      var _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/push-notification/push-notification */
      "./src/app/providers/push-notification/push-notification.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(toastCtrl, loadingCtrl, apiService, events, token, translate, pushNotification, menuCtrl, formBuilder, datePicker, router) {
          var _this = this;

          _classCallCheck(this, SignupPage);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.events = events;
          this.token = token;
          this.translate = translate;
          this.pushNotification = pushNotification;
          this.menuCtrl = menuCtrl;
          this.formBuilder = formBuilder;
          this.datePicker = datePicker;
          this.router = router;
          this.error = null;
          this.loading = {};
          this.states = [];
          this.pincode_pattern = "[0-9]{6}";
          this.cities = [];
          this.signupFormField = {
            username: null,
            email: null,
            first_name: null,
            last_name: null,
            password: null,
            state: null,
            city: null,
            other_city: null,
            profile_pic: null,
            pincode: null,
            date_of_birth: null
          };
          this.tran_please_wait = 'Please Wait';
          this.tran_required_mobile_no = "Please Enter Your Mobile No";
          this.tran_required_email = "Please Enter Your Email";
          this.tran_required_first_name = "Please Enter Your First Name";
          this.tran_required_last_name = "Please Enter Your Last Name";
          this.tran_required_state = "Please Select Your State";
          this.tran_required_city = "Please Select Your City";
          this.tran_required_password = "Please Enter Your Password";
          this.tran_required_pincode = "Please Enter Your PIN Code";
          this.menuCtrl.enable(false);
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_first_name').subscribe(function (res) {
            _this.tran_required_first_name = res;
          });
          this.translate.get('required_last_name').subscribe(function (res) {
            _this.tran_required_last_name = res;
          });
          this.translate.get('required_mobile_no').subscribe(function (res) {
            _this.tran_required_mobile_no = res;
          }); // this.translate.get('required_email').subscribe(res => { this.tran_required_email = res; });

          this.translate.get('required_state').subscribe(function (res) {
            _this.tran_required_state = res;
          });
          this.translate.get('required_pincode').subscribe(function (res) {
            _this.tran_required_pincode = res;
          });
          this.translate.get('required_city').subscribe(function (res) {
            _this.tran_required_city = res;
          }); // this.translate.get('required_password').subscribe(res => { this.tran_required_password = res; });

          this.listenToUserEvents();
          this.otherCityForm = this.formBuilder.group({
            other_city: ['']
          });
        }

        return _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadStates();
          }
        }, {
          key: "loadStates",
          value: function loadStates() {
            var _this2 = this;

            this.apiService.states().subscribe(function (data) {
              return _this2.handleStates(data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "handleStates",
          value: function handleStates(data) {
            this.states = data.states;
          }
        }, {
          key: "changeState",
          value: function changeState($event) {
            this.cities = [];
            console.log('state', $event);
            this.loadCities($event.value['id']);
          }
        }, {
          key: "loadCities",
          value: function loadCities(state_id) {
            var _this3 = this;

            this.apiService.cities(state_id).subscribe(function (data) {
              _this3.handleCities(data);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "handleCities",
          value: function handleCities(data) {
            this.cities = data.cities;
          }
        }, {
          key: "listenToUserEvents",
          value: function listenToUserEvents() {
            var _this4 = this;

            this.events.getEvent().subscribe(function (data) {
              if (data.name == 'signup:success') {
                _this4.token.handle(data.access_token);

                _this4.pushNotification.init();

                if (data.primary_verify == 0) {
                  _this4.router.navigate(['verification', data.params.username]);
                } else {
                  _this4.router.navigate(['login']);
                }
              }
            });
            this.events.getEvent().subscribe(function (data) {
              if (data.name == 'signup:failed') {
                _this4.loadingCtrl.dismiss();
              }
            });
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "goLogin",
          value: function goLogin() {
            this.router.navigate(['login']);
          }
        }, {
          key: "signupForm",
          value: function signupForm() {
            var _this5 = this;

            if (this.signupFormField.first_name == '' || this.signupFormField.first_name == null) {
              this.presentToast(this.tran_required_first_name);
            } else if (this.signupFormField.last_name == '' || this.signupFormField.last_name == null) {
              this.presentToast(this.tran_required_last_name);
            } else if (this.signupFormField.username == '' || this.signupFormField.username == null) {
              this.presentToast(this.tran_required_mobile_no);
            } else if (this.signupFormField.state == '' || this.signupFormField.state == null) {
              this.presentToast(this.tran_required_state);
            } else if (this.signupFormField.city == '' || this.signupFormField.city == null) {
              this.presentToast(this.tran_required_city);
            } else if (this.signupFormField.pincode == '' || this.signupFormField.pincode == null) {
              this.presentToast(this.tran_required_pincode);
            } else {
              this.presentLoading();

              if (this.signupFormField.city.id == 0) {
                var signupFormValues = {
                  'username': this.signupFormField.username,
                  'email': null,
                  'first_name': this.signupFormField.first_name,
                  'last_name': this.signupFormField.last_name,
                  'password': null,
                  'state': this.signupFormField.state.id,
                  'city': null,
                  'other_city': this.signupFormField.city.name,
                  'profile_pic': null,
                  'pincode': this.signupFormField.pincode
                };
              } else {
                var signupFormValues = {
                  'username': this.signupFormField.username,
                  'email': null,
                  'first_name': this.signupFormField.first_name,
                  'last_name': this.signupFormField.last_name,
                  'password': null,
                  'state': this.signupFormField.state.id,
                  'city': this.signupFormField.city.id,
                  'other_city': null,
                  'profile_pic': null,
                  'pincode': this.signupFormField.pincode
                };
              }

              console.log('signupFormValues', signupFormValues);
              this.apiService.signup(signupFormValues).subscribe(function (data) {
                return _this5.handleResponse(data);
              }, function (error) {
                return _this5.handleError(error);
              });
            }
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'signup:success',
              params: data
            });
            this.signupFormField = {
              username: null,
              email: null,
              first_name: null,
              last_name: null,
              password: null,
              state: null,
              city: null,
              other_city: null,
              profile_pic: null,
              pincode: null,
              date_of_birth: null
            };
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'signup:failed',
              params: ''
            });
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            this.presentToast(errorMsg);
          }
        }, {
          key: "cityChange",
          value: function cityChange(event) {}
        }, {
          key: "onAddCity",
          value: function onAddCity(event) {
            this.otherCityForm.reset();
            this.otherCityForm.get('other_city').setValue(event.component.searchText);
            event.component.showAddItemTemplate();
          }
        }, {
          key: "addCity",
          value: function addCity() {
            this.signupFormField.city = {
              id: 0,
              name: this.otherCityForm.get('other_city').value
            };
            this.otherCityForm.reset();
            this.cityComponent.hideAddItemTemplate();
            this.cityComponent.close();
          }
        }, {
          key: "onSearchFail",
          value: function onSearchFail(event) {
            if (event.component.hasSearchText) {
              // Clean form.
              this.otherCityForm.reset(); // Copy search text to port name field, so
              // user doesn't have to type again.

              this.otherCityForm.get('other_city').setValue(event.component.searchText); // Show form.

              event.component.showAddItemTemplate();
            }
          }
        }, {
          key: "onSearchSuccess",
          value: function onSearchSuccess(event) {
            // Hide form.
            event.component.hideAddItemTemplate();
          }
        }, {
          key: "openDateDailog",
          value: function openDateDailog() {
            var _this6 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
              return _this6.formatDate(date);
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            this.signupFormField.date_of_birth = [year, month, day].join('-');
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'crescent',
                      message: this.tran_please_wait + '...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context2.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "textOnlyValidation",
          value: function textOnlyValidation(event) {
            var pattern = /[a-zA-Z ]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }]);
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_9__["PushNotificationProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }];
      };

      SignupPage.propDecorators = {
        cityComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['cityComponent']
        }]
      };
      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map