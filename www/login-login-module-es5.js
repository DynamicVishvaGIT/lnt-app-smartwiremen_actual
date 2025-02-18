(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"logo-pos\">\n    <img src=\"assets/logo/Lauritz_Knudsen.svg\" class=\"logo\">\n  </div>\n  <div class=\"header-align\">\n    <p style=\"font-size: 28px;font-weight: 600;padding-left: 4px;\">Sign In</p>  \n    <p style=\"font-size: 15px;margin-top: -16px;color: #00000080;padding-left: 4px;\">Enter your details to proceed further</p>  \n  </div>\n  <div mode=\"ios\" class=\"content-align\">\n    <form (ngSubmit)=\"loginForm()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"required\" style=\"color: black!important;font-size: small;font-weight: 500;\">Username(Primary mobile number)</ion-label>\n          <ion-item lines=\"none\" class=\"ion-item\" style=\"margin-top: 8px;\">\n            <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"loginFormField.username\" name=\"username\"  placeholder=\"{{ 'enter_mobile_no' | translate }}\" class=\"ion-input\" >\n              <ion-icon slot=\"start\" name=\"call\" aria-hidden=\"true\" class=\"icon-align\"></ion-icon>\n            </ion-input>\n          </ion-item> \n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" color=\"primary\" class=\"login-btn\" expand=\"block\">\n            {{ 'sign_in' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content class=\"ion-padding\">\n  <ion-row class=\"app-icon-container\">\n    <ion-col class=\"ion-text-center\">\n      <img src=\"../../assets/imgs/logo.png\" />      \n    </ion-col>\n  </ion-row>\n  <form (ngSubmit)=\"loginForm()\">\n    <ion-row>\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-label ><ion-icon slot=\"start\" name=\"call-sharp\"></ion-icon></ion-label>\n        <ion-input type=\"tel\" maxLength=\"10\" [(ngModel)]=\"loginFormField.username\" name=\"username\" placeholder=\"{{ 'enter_mobile_no' | translate }}\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-button class=\"login-btn\" size=\"default\" strong=\"true\" color=\"secondary\"  expand=\"block\" shape=\"round\" type=\"submit\">\n      <ion-icon class=\"log-icon\"  name=\"md-log-in\"  ></ion-icon> {{ 'sign_in' | translate }}\n    </ion-button>\n  </form>  \n  <br>\n  <ion-row class=\"center\">\n    <ion-col size=\"12\" class=\"sign-up-link\">\n      {{ 'dont_have_account' | translate }} <button (click)=\"goSignup()\"> <ion-icon name=\"lock-closed\"></ion-icon> {{ 'sign_up' | translate }} </button>\n    </ion-col>\n  </ion-row>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('dashboard-bg.jpg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.logo-pos {\n  text-align: center;\n  margin-top: 20%;\n}\n\n.logo {\n  width: 250px;\n  height: 125px;\n}\n\n.header-align {\n  margin-top: 25%;\n  padding-left: 23px;\n  text-align: center;\n}\n\n.content-align {\n  margin-top: 10%;\n  padding-left: 23px;\n}\n\n.login-btn {\n  width: 95%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  font-family: \"Poppins-Regular\";\n  color: white;\n}\n\n.icon-align {\n  font-size: smaller;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw4R0FBQTtFQUVBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9kYXNoYm9hcmQtYmcuanBnJyk7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubG9nby1wb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTI1cHg7XG59XG5cbi5oZWFkZXItYWxpZ257XG4gIG1hcmdpbi10b3A6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWFsaWdue1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiA5NSU7XG4gIC0tYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5pY29uLWFsaWdue1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAuYXBwLWljb24tY29udGFpbmVyIHtcbi8vICAgcGFkZGluZy10b3A6IDMzcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAzM3B4O1xuLy8gfVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogI2Y0YjQwNCAhaW1wb3J0YW50O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyBpb24taXRlbSB7XG4vLyAgIC0tYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgIC0tYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuLy8gICBjb2xvcjogIzBhNGY4Yjtcbi8vIH1cblxuLy8gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuXG4vLyBpb24tYnV0dG9uIHtcbi8vICAgLS1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gfVxuXG4vLyAuY2VudGVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAuc2lnbi11cC1saW5rIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gfVxuXG4vLyAuc2lnbi11cC1saW5rIGJ1dHRvbiB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBjb2xvcjogIzExMTtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vIH1cblxuLy8gLml0ZW0taGFzLWZvY3VzIHtcbi8vICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbi8vIH1cbi8vIC5sb2ctaWNvbiB7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/push-notification/push-notification */
      "./src/app/providers/push-notification/push-notification.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(toastController, loadingCtrl, apiService, token, translate, pushNotification, menuCtrl, router, events, changeDetector) {
          var _this = this;

          _classCallCheck(this, LoginPage);

          this.toastController = toastController;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.token = token;
          this.translate = translate;
          this.pushNotification = pushNotification;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.events = events;
          this.changeDetector = changeDetector;
          this.error = null;
          this.loading = {};
          this.loginFormField = {
            username: '',
            password: ''
          };
          this.tran_please_wait = 'Please Wait';
          this.tran_required_mobile_no = 'Please Enter Your Mobile No';
          this.tran_required_password = 'Please Enter Your Password';
          this.menuCtrl.enable(false);
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('required_mobile_no').subscribe(function (res) {
            _this.tran_required_mobile_no = res;
          });
          this.translate.get('required_password').subscribe(function (res) {
            _this.tran_required_password = res;
          });
          this.listenToUserEvents();
          console.log('a', this.save_username);
        }

        return _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // ionViewDidEnter(){
          //   // this.listenToUserEvents()
          // }

        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
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
          key: "listenToUserEvents",
          value: function listenToUserEvents() {
            var _this2 = this;

            console.log('1', this.save_username);
            this.events.getEvent().subscribe(function (data) {
              if (data) {
                if (data.name == 'user:login') {
                  _this2.token.handle(data.params.access_token);

                  _this2.pushNotification.init();

                  if (data.params.primary_verify == 0 || _this2.save_username == '' || _this2.save_username == null) {
                    _this2.router.navigate(['verification', data.params.username]);
                  } else {
                    console.log('111');

                    _this2.router.navigate(['tabs']);
                  }
                } else if (data.name == 'user:login-failed') {
                  _this2.loadingCtrl.dismiss();
                }
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            this.save_username = localStorage.getItem('save_username');
            console.log('2', this.save_username); // check for token 

            /*let accesstoken = this.token.get();
                 if(accesstoken != '' && accesstoken != null){
              
              this.loading = this.loadingCtrl.create({
                  spinner: 'crescent',
                  content: this.tran_please_wait+'...',
                  dismissOnPageChange: true
                });
                     this.loading.present().then(() => {
                   this.apiService.refresh_access_token().subscribe(
                    data => this.handleResponse(data),
                    err => {
                      this.loading.dismiss();
                    }
                  );
               });
            }*/

            if (this.save_username != '' && this.save_username != null) {
              var loading = this.presentLoading();
              this.apiService.login({
                'username': this.save_username,
                password: ''
              }).subscribe(function (data) {
                return _this3.handleResponse(data);
              }, function (error) {
                _this3.loadingCtrl.dismiss();

                if (error.status == 401) {
                  _this3.token.remove();
                }
              });
            }
          }
        }, {
          key: "goSignup",
          value: function goSignup() {
            // this.navCtrl.push(ProfilePage);
            // this.navCtrl.setRoot(ProjectLeadPage);
            // this.navCtrl.setRoot(PassbookPage);
            this.router.navigate(['signup']);
          }
        }, {
          key: "goHome",
          value: function goHome() {// this.navCtrl.push(TabsPage);
          }
        }, {
          key: "loginForm",
          value: function loginForm() {
            var _this4 = this;

            if (this.loginFormField.username == '' || this.loginFormField.username == null) {
              this.presentToast(this.tran_required_mobile_no);
            } else {
              var loading = this.presentLoading();
              this.apiService.login(this.loginFormField).subscribe(function (data) {
                _this4.handleResponse(data);

                _this4.loginFormField = {
                  username: '',
                  password: ''
                };
              }, function (error) {
                _this4.handleError(error);
              });
            }
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            console.log('3');
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'user:login',
              params: data
            }); // this.listenToUserEvents()

            this.apiService.firstLogin().then(function (data) {
              console.log('successful', data);
            })["catch"](function (error) {
              console.log('err', error);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log('4');
            this.loadingCtrl.dismiss();
            this.events.publish({
              name: 'user:login-failed',
              params: ''
            });
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error['error'];
            } // else if(error.status = 412){
            //   errorMsg = error.error.error;
            // }
            else {
              // errorMsg = error.error.error;
              errorMsg = error.error['error'];
            }

            this.presentToast(errorMsg);
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
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }]);
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _providers_push_notification_push_notification__WEBPACK_IMPORTED_MODULE_5__["PushNotificationProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map