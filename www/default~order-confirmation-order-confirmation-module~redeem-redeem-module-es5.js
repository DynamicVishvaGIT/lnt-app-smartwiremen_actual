(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~order-confirmation-order-confirmation-module~redeem-redeem-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOrderConfirmationOrderConfirmationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'order_confirmation' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n    \t<ion-button  (click)=\"close_popup()\"><ion-icon slot=\"start\" color=\"light\" name=\"close-circle\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n    {{ 'order_details' | translate }}\n  </ion-card-title>\n  <ion-row>\n    <ion-col size=\"4\"  >{{ 'product_name' | translate }}</ion-col>\n    <ion-col size=\"8\"  >{{ gift.gift_name }}</ion-col>\n    \n    <ion-col size=\"4\" >{{ 'qty' | translate }}</ion-col>\n    <ion-col size=\"8\" >{{ gift.qty }}</ion-col>\n  </ion-row>\n</ion-card-content>\n</ion-card>\n<form (ngSubmit)=\"submitOTPForm()\" *ngIf=\"otp_send\">\n  <ion-item class=\"otp-input-main\">\n    <ion-input type=\"number\" placeholder=\"{{ 'enter_otp' | translate }}\" class=\"otp-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\"></ion-input>\n  </ion-item>\n  <ion-button class=\"btn-create\" type=\"submit\"  expand=\"full\" type=\"submit\">{{ 'verify' | translate }}</ion-button>\n</form>\n\n<ion-button *ngIf=\"!otp_send\" class=\"btn-create\"  expand=\"full\"  (click)=\"sendOTP()\" color=\"secondary\">{{ 'confirm_order' | translate }}</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/order-confirmation/order-confirmation.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/order-confirmation/order-confirmation.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOrderConfirmationOrderConfirmationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --padding-right: 0;\n  --border-bottom: none;\n}\n\n.otp-input {\n  border-radius: 30px;\n  background-color: #f5f5f5;\n  margin-bottom: 10px !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  --padding-start: 8px !important;\n}\n\n.btn-create {\n  --box-shadow: none;\n  --border-radius: 30px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  --padding-left: 25px;\n  --padding-right: 25px;\n  --border-radius: 30px;\n  --color: #fff;\n}\n\n.card_timer {\n  box-shadow: none;\n}\n\n.no-padding {\n  padding: 0px;\n}\n\n.card_timer .button-inner {\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBRUUsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xuICAtLWJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ub3RwLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbn1cbi5idG4tY3JlYXRlIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAtLXBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbi5jYXJkX3RpbWVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZF90aW1lciAuYnV0dG9uLWlubmVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/order-confirmation/order-confirmation.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/order-confirmation/order-confirmation.page.ts ***!
      \***************************************************************/

    /*! exports provided: OrderConfirmationPage */

    /***/
    function srcAppOrderConfirmationOrderConfirmationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderConfirmationPage", function () {
        return OrderConfirmationPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/api-service/api.service */
      "./src/app/providers/api-service/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OrderConfirmationPage = /*#__PURE__*/function () {
        function OrderConfirmationPage(toastCtrl, loadingCtrl, apiService, translate, route, router, modalCtrl) {
          var _this = this;

          _classCallCheck(this, OrderConfirmationPage);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.translate = translate;
          this.route = route;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.error = null;
          this.loading = {};
          this.inputCode = null;
          this.msg = null;
          this.timeInSeconds = 10;
          this.otp_send = false;
          this.gift = null;
          this.tran_please_wait = 'Please Wait';
          this.tran_required_otp = 'Enter OTP';
          this.tran_went_wrong = 'Something went wrong, please try again later.';
          this.tran_otp_send = 'OTP Sent Successfully';
          this.tran_order_success = "Gift Order Created Successfully";
          this.gift = this.route.snapshot.paramMap.get('gift');
          this.translate.get('please_wait').subscribe(function (res) {
            _this.tran_please_wait = res;
          });
          this.translate.get('enter_otp').subscribe(function (res) {
            _this.tran_required_otp = res;
          });
          this.translate.get('went_wrong').subscribe(function (res) {
            _this.tran_went_wrong = res;
          });
          this.translate.get('otp_send').subscribe(function (res) {
            _this.tran_otp_send = res;
          });
          this.translate.get('order_success').subscribe(function (res) {
            _this.tran_order_success = res;
          });
        }

        return _createClass(OrderConfirmationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.apiService.home().subscribe(function (data) {
              _this2.user_id = data['id'];
            }, function (error) {
              return _this2.handleError(error);
            });
          }
        }, {
          key: "initTimer",
          value: function initTimer() {
            if (!this.timeInSeconds) {
              this.timeInSeconds = 0;
            }

            this.timer = {
              seconds: this.timeInSeconds,
              runTimer: false,
              hasStarted: false,
              hasFinished: false,
              secondsRemaining: this.timeInSeconds
            };
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
          }
        }, {
          key: "submitOTPForm",
          value: function submitOTPForm() {
            this.msg = null;

            if (this.inputCode == '' || this.inputCode == null) {
              this.presentToast(this.tran_required_otp);
            } else {
              this.verifyOTP(this.inputCode);
            }
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP(code) {
            var _this3 = this;

            var loading = this.presentLoading();
            this.apiService.verify_otp(code).subscribe(function (data) {
              return _this3.verifyOTPHandleResponse(data);
            }, function (error) {
              return _this3.handleError(error);
            });
          }
        }, {
          key: "sendOTP",
          value: function sendOTP() {
            var _this4 = this;

            var loading = this.presentLoading();
            console.log(this.gift['gift_ref_code'], this.gift_code_array);
            this.apiService.send_order_otp().subscribe(function (data) {
              return _this4.handleResponse(data);
            }, function (error) {
              return _this4.handleError(error);
            });
          }
        }, {
          key: "verifyOTPHandleResponse",
          value: function verifyOTPHandleResponse(data) {
            var _this5 = this;

            this.loadingCtrl.dismiss();

            if (data.success == true) {
              var obj = data.otp_response;

              if (obj.statusCode == 900 || obj.statusCode == 952) {
                var loading = this.presentLoading();

                if (this.isInArray(this.gift['gift_ref_code'], this.gift_code_array)) {
                  this.apiService.user_bank_upi().subscribe(function (data) {
                    console.log(data);
                  }, function (error) {
                    console.log(error);
                  });
                }

                this.apiService.redeemGift(this.gift).subscribe(function (data) {
                  return _this5.handleReedemGiftResponse(data);
                }, function (error) {
                  return _this5.handleError(error, true);
                });
              } else {
                this.msg = obj.reason;
                this.presentToast(this.msg);
              }

              if (obj.statusCode == 951) {
                this.otp_send = false;
              }
            }
          }
        }, {
          key: "handleReedemGiftResponse",
          value: function handleReedemGiftResponse(data) {
            var _this6 = this;

            this.loadingCtrl.dismiss();
            var toast = this.toastCtrl.create({
              message: '',
              duration: 1000,
              position: 'middle'
            });
            this.close_popup();
            this.presentToast(this.tran_order_success).then(function () {
              _this6.router.navigate(['orders']);

              _this6.apiService.nextGift().subscribe(function (data) {
                console.log('next gift', data);

                if (data['point'] !== 0) {
                  var notification_obj = {
                    "heading": "SMARTWIREMEN",
                    "message": "You need " + data['point'] + " points to get " + data['gift_name'],
                    "url": "",
                    "user_id": _this6.user_id
                  };
                } else {
                  var notification_obj = {
                    "heading": "SMARTWIREMEN",
                    "message": "Your next gift would be " + data['gift_name'],
                    "url": "",
                    "user_id": _this6.user_id
                  };
                } // var notification_obj={"heading":"SMARTWIREMEN","message":"You need "+data['point']+" points to get "+data['gift_name'],"url":"","user_id":this.user_id}


                _this6.apiService.sendNotification(notification_obj).subscribe(function (data) {
                  console.log(data);
                }, function (error) {
                  console.log(error);
                });
              }, function (error) {
                console.log('err', error);
              });
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.loadingCtrl.dismiss();

            if (data.success == true) {
              var obj = data.otp_response;

              if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = this.tran_otp_send;
                this.otp_send = true;
              } else {
                this.msg = this.tran_went_wrong;
              }

              if (obj.statusCode == 951) {
                this.otp_send = false;
              }

              this.presentToast(this.msg);
            }
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            console.log(error);
            this.loadingCtrl.dismiss();
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            var toast = this.toastCtrl.create({
              message: '',
              duration: 3000,
              position: 'middle'
            });

            if (errorMsg != '') {
              this.presentToast(errorMsg);
            }

            if (redirect == true) {
              this.close_popup();
            }
          }
        }, {
          key: "close_popup",
          value: function close_popup() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            this.timer.hasStarted = true;
            this.timer.runTimer = true;
            this.timerTick();
          }
        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            this.timer.runTimer = false;
          }
        }, {
          key: "resumeTimer",
          value: function resumeTimer() {
            this.startTimer();
          }
        }, {
          key: "timerTick",
          value: function timerTick() {
            var _this7 = this;

            setTimeout(function () {
              if (!_this7.timer.runTimer) {
                return;
              }

              _this7.timer.secondsRemaining--;
              _this7.timer.displayTime = _this7.getSecondsAsDigitalClock(_this7.timer.secondsRemaining);

              if (_this7.timer.secondsRemaining > 0) {
                _this7.timerTick();
              } else {
                _this7.timer.hasFinished = true;
                _this7.otp_send = false;
              }
            }, 1000);
          }
        }, {
          key: "getSecondsAsDigitalClock",
          value: function getSecondsAsDigitalClock(inputSeconds) {
            var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param

            var hours = Math.floor(secNum / 3600);
            var minutes = Math.floor((secNum - hours * 3600) / 60);
            var seconds = secNum - hours * 3600 - minutes * 60;
            var hoursString = '';
            var minutesString = '';
            var secondsString = '';
            hoursString = hours < 10 ? '0' + hours : hours.toString();
            minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
            secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
            return hoursString + ':' + minutesString + ':' + secondsString;
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
          key: "isInArray",
          value: function isInArray(gift_ref_code, array_to_search) {
            var length = array_to_search.length;

            for (var i = 0; i < length; i++) {
              if (array_to_search[i] == gift_ref_code) return true;
            }

            return false;
          }
        }]);
      }();

      OrderConfirmationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      OrderConfirmationPage.propDecorators = {
        gift_code_array: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      OrderConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-confirmation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/order-confirmation/order-confirmation.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-confirmation.page.scss */
        "./src/app/order-confirmation/order-confirmation.page.scss"))["default"]]
      })], OrderConfirmationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~order-confirmation-order-confirmation-module~redeem-redeem-module-es5.js.map