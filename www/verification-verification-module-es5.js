(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomOtpInputCustomOtpInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"otp-container\">\n  <input\n    *ngFor=\"let otpDigit of otpArray; let i = index\"\n    type=\"text\"\n    maxlength=\"1\"\n    [value]=\"otpArray[i]\"\n    (input)=\"onInput($event, i)\"\n    (keydown)=\"onKeydown($event, i)\"\n    (paste)=\"onPaste($event)\"\n    (focus)=\"onInputFocus($event.target)\"\n  />\n</div>\n<!-- [(ngModel)]=\"otpArray[i]\" -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n</ion-header>\n<ion-content>\n  <div style=\"margin-top: 10%;text-align:center;\">\n    <p style=\"color:black;font-size: large;font-weight: 800;\">OTP</p>\n  </div>\n  <div style=\"margin-top:15%;text-align:start;margin-left: 15px;\">\n    <p style=\"color:black;font-size: large;font-weight: 800;\">Verify with OTP</p>\n    <p style=\"color:black\">OTP sent to your mobile no.  +91 {{mobile_no}}</p>\n  </div>\n  <div class=\"ion-text-center\">\n    <a >Change</a>\n  </div>\n  <div style=\"margin-top:10%;margin-left: -153px;\">\n    <app-custom-otp-input [length]=\"4\" (otpChange)=\"handleOtpChange($event)\" #otpInput></app-custom-otp-input>\n    <!-- <ng-otp-input #ngOtpInput\n    [config]=\"{\n      allowNumbersOnly: true,\n      length: 5,\n      isPasswordInput: false,\n      disableAutoFocus: false,\n      placeholder:'',\n      inputStyles: {\n      'color':'#ffff',\n      'text-align':'center',\n      'background': '#071947',\n      'width': '50px',\n      'height': '50px',\n      'border-radius':'8px'\n      }\n    }\"> \n    </ng-otp-input> -->\n    <p class=\"resend_otp\"><span style=\"color:#0000;font-size: smaller;\">Resend OTP in 30s</span></p>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" style=\"padding: 10px;background: #ffff;\">\n  <ion-toolbar position=\"bottom\">\n    <ion-button color=\"primary\" class=\"login-btn\" (click)=\"verifyOTP()\">Verify</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Mobile Number Verification</ion-title>\n    <ion-buttons slot=\"end\"><ion-button  (click)=\"doLogout()\" class=\"logoutbtn\"><ion-icon name=\"md-log-out\"></ion-icon></ion-button></ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <h4>{{ mobile_no }}</h4>\n      <h6>{{ 'mobile_no_verification' | translate }}</h6>\n    </ion-col>\n  </ion-row>\n\n  <form (ngSubmit)=\"submitOTPForm()\" *ngIf=\"otp_send\">\n   \n      <ion-input  type=\"number\" placeholder=\"{{ 'enter_otp' | translate }}\" class=\"otp-input\" [(ngModel)]=\"inputCode\" name=\"inputCode\"></ion-input>\n  \n    <ion-button class=\"btn-create\" style=\"--color: #ffffff;\"  expand=\"block\" type=\"submit\">{{ 'verify' | translate }}</ion-button>\n</form>\n\n<ion-card *ngIf=\"timer && otp_send\" class=\"card_timer no-padding\">\n  <ion-card-content class=\"no-padding\">\n    <ion-button  *ngIf=\"timeInSeconds && timeInSeconds > 0\" size=\"large\" expand=\"block\" fill=\"clear\" class=\"timer-button x-large\">{{ 'time_left' | translate }} : {{timer.displayTime}}</ion-button>\n  </ion-card-content>\n</ion-card>\n<ion-button  *ngIf=\"!otp_send\" class=\"btn-create\"   expand=\"block\" (click)=\"sendOTP()\" color=\"secondary\">{{ 'send_otp' | translate }}</ion-button>\n</ion-content> -->\n";
      /***/
    },

    /***/
    "./src/app/custom-otp-input/custom-otp-input.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/custom-otp-input/custom-otp-input.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomOtpInputCustomOtpInputComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".otp-container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 132px;\n  margin: 0 auto;\n}\n\n.otp-container input {\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 18px;\n  margin: 0 5px;\n  border-radius: 10px;\n  border: none;\n  background-color: #d8e6ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLW90cC1pbnB1dC9jdXN0b20tb3RwLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLW90cC1pbnB1dC9jdXN0b20tb3RwLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLm90cC1jb250YWluZXIgaW5wdXQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTZlZjs7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/custom-otp-input/custom-otp-input.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/custom-otp-input/custom-otp-input.component.ts ***!
      \****************************************************************/

    /*! exports provided: CustomOtpInputComponent */

    /***/
    function srcAppCustomOtpInputCustomOtpInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomOtpInputComponent", function () {
        return CustomOtpInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomOtpInputComponent = /*#__PURE__*/function () {
        function CustomOtpInputComponent() {
          _classCallCheck(this, CustomOtpInputComponent);

          this.length = 4;
          this.otpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.otpArray = [];
        }

        return _createClass(CustomOtpInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.otpArray = Array(this.length).fill('');
          }
        }, {
          key: "onInput",
          value: function onInput(event, index) {
            var input = event.target;
            var value = input.value.slice(0, 1); // console.log(`Input event at index ${index}: ${value}`);
            // this.otpArray[index] = value;
            // input.value = value; // Ensure the input field value is updated correctly
            // if (value && index < this.length - 1) {
            //   this.focusNextInput(index);
            // }

            if (value && index == 0) {
              // this.otpArray[index] = '';
              // input.value = ''; // Clear the current input field
              this.otpArray[index] = value;
              input.value = this.otpArray[index];
              this.otpArray[index + 1] = '';
              input.value = this.otpArray[index + 1];
              this.focusNextInput(index - 1);
            } else if (index > 0) {
              if (value && index < this.length - 1) {
                this.otpArray[index] = value;
                input.value = this.otpArray[index];
                this.otpArray[index + 1] = '';
                input.value = this.otpArray[index + 1];
                this.focusNextInput(index);
              } else if (value && index == this.length - 1) {
                this.otpArray[index] = value;
                input.value = this.otpArray[index]; // this.otpArray[index + 1] = '';
                // input.value = this.otpArray[index+1];
                // this.focusNextInput(index);
              }
            }

            this.emitOtpChange();
          } // onInput(event: Event, index: number): void {
          //   console.log(index);
          //     const input = event.target as HTMLInputElement;
          //     console.log(input.value);
          //     const value = input.value;
          //     if (input.value.length > 1) {
          //       input.value = input.value.slice(0, 1);
          //     }
          //     console.log(this.length)
          //     if (index < this.length - 1 && value) {
          //       this.focusNextInput(index);
          //     }
          //     else if (index <= this.length && !value){
          //       this.focusPreviousInput(index+1);
          //     }
          //     this.emitOtpChange();
          // }

        }, {
          key: "onKeydown",
          value: function onKeydown(event, index) {
            // console.log(index);
            // console.log(this.otpArray[index]);
            // console.log(index);
            // console.log(this.otpArray[index]);
            if (event.key === 'Backspace') {
              event.preventDefault();
              var input = event.target;

              if (input.value) {
                this.otpArray[index] = '';
                input.value = ''; // Clear the current input field

                this.focusPreviousInput(index + 1);
              } else if (index > 0) {
                this.focusPreviousInput(index);
                this.otpArray[index - 1] = '';
                var previousInput = document.querySelectorAll('input')[index - 1];

                if (previousInput) {
                  previousInput.value = ''; // Clear the previous input field

                  setTimeout(function () {
                    previousInput.focus();
                    previousInput.select(); // Select the previous input field after a brief delay
                  }, 0);
                }
              }

              this.emitOtpChange();
            }
          } // onKeydown(event: KeyboardEvent, index: number): void {
          //   if (event.key === 'Backspace') {
          //     if (index==this.length-1) {alert('1');
          //       const input = event.target as HTMLInputElement;
          //       input.value = '';
          //       this.focusPreviousInput(index);
          //     } 
          //     else if (index > 0) {
          //       this.otpArray[index - 1] = '';
          //       this.focusPreviousInput(index - 1);
          //     }
          //     this.emitOtpChange();
          //   }
          //   if (event.key === 'Backspace' && !this.otpArray[index] && index > 0) {
          //     this.otpArray[index - 1] = '';
          //     this.focusPreviousInput(index);
          //     this.emitOtpChange();
          //   }
          // }

        }, {
          key: "onPaste",
          value: function onPaste(event) {
            var _a;

            event.preventDefault();
            var pastedData = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            var otpValues = pastedData.split('').slice(0, this.length);
            this.otpArray = otpValues.concat(Array(this.length - otpValues.length).fill(''));
            this.emitOtpChange();
          }
        }, {
          key: "focusNextInput",
          value: function focusNextInput(index) {
            var nextInput = document.querySelectorAll('input')[index + 1];

            if (nextInput) {
              nextInput.focus();
              setTimeout(function () {
                nextInput.select(); // Select the previous input field after a brief delay
              }, 0);
            }
          }
        }, {
          key: "focusPreviousInput",
          value: function focusPreviousInput(index) {
            // console.log(index);
            var previousInput = document.querySelectorAll('input')[index - 1];

            if (previousInput) {
              previousInput.focus();
              setTimeout(function () {
                previousInput.select(); // Select the previous input field after a brief delay
              }, 0);
            }
          }
        }, {
          key: "onInputFocus",
          value: function onInputFocus(target) {
            if (target instanceof HTMLInputElement) {
              setTimeout(function () {
                target.select(); // Select the focused input field after a brief delay
              }, 0);
            }
          }
        }, {
          key: "emitOtpChange",
          value: function emitOtpChange() {
            console.log('Current OTP Array:', this.otpArray); // this.otpChange.emit(this.otpArray.join(''));
          }
        }]);
      }();

      CustomOtpInputComponent.ctorParameters = function () {
        return [];
      };

      CustomOtpInputComponent.propDecorators = {
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        otpChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      CustomOtpInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-otp-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./custom-otp-input.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-otp-input/custom-otp-input.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./custom-otp-input.component.scss */
        "./src/app/custom-otp-input/custom-otp-input.component.scss"))["default"]]
      })], CustomOtpInputComponent);
      /***/
    },

    /***/
    "./src/app/share/share.module.ts":
    /*!***************************************!*\
      !*** ./src/app/share/share.module.ts ***!
      \***************************************/

    /*! exports provided: ShareModule */

    /***/
    function srcAppShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
        return ShareModule;
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


      var _custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../custom-otp-input/custom-otp-input.component */
      "./src/app/custom-otp-input/custom-otp-input.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ShareModule = /*#__PURE__*/_createClass(function ShareModule() {
        _classCallCheck(this, ShareModule);
      });

      ShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__["CustomOtpInputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
        exports: [_custom_otp_input_custom_otp_input_component__WEBPACK_IMPORTED_MODULE_3__["CustomOtpInputComponent"]]
      })], ShareModule);
      /***/
    },

    /***/
    "./src/app/verification/verification-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/verification/verification-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: VerificationPageRoutingModule */

    /***/
    function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
        return VerificationPageRoutingModule;
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


      var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verification.page */
      "./src/app/verification/verification.page.ts");

      var routes = [{
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
      }];

      var VerificationPageRoutingModule = /*#__PURE__*/_createClass(function VerificationPageRoutingModule() {
        _classCallCheck(this, VerificationPageRoutingModule);
      });

      VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerificationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/verification/verification.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/verification/verification.module.ts ***!
      \*****************************************************/

    /*! exports provided: VerificationPageModule */

    /***/
    function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
        return VerificationPageModule;
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


      var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verification-routing.module */
      "./src/app/verification/verification-routing.module.ts");
      /* harmony import */


      var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verification.page */
      "./src/app/verification/verification.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../share/share.module */
      "./src/app/share/share.module.ts");

      var VerificationPageModule = /*#__PURE__*/_createClass(function VerificationPageModule() {
        _classCallCheck(this, VerificationPageModule);
      });

      VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"] // NgOtpInputModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
      })], VerificationPageModule);
      /***/
    },

    /***/
    "./src/app/verification/verification.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/verification/verification.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #ffff;\n}\n\n.new-background-color {\n  --background: var(--ion-color-primary);\n}\n\n.otp-submit-button {\n  margin-left: 37%;\n  margin-top: 22px;\n}\n\n#header-icons {\n  text-align: right;\n}\n\n#header-icons ion-icon {\n  color: #50537a;\n  font-size: 1.5rem;\n}\n\n.header {\n  color: #50537a;\n  font-size: medium;\n  font-family: \"Alef\";\n  margin-top: 2px;\n}\n\n.image-round {\n  background-color: #CECECE;\n  border: 2px solid #FAFAFA;\n  border-radius: 50%;\n  display: block;\n  height: 120px;\n  margin: 0 auto;\n  width: 120px;\n}\n\n.resend_otp {\n  text-align: right;\n  margin-top: 15px;\n  margin-right: 59px;\n}\n\n.login-btn {\n  width: 100%;\n  --border-radius: 9px;\n  margin-left: 0px;\n  font-family: \"Poppins-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSxtQkFBQTtBQVZKOztBQWFBO0VBQ0ksc0NBQUE7QUFWSjs7QUFZQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLGlCQUFBO0FBVEo7O0FBVUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFSUjs7QUFXQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVRKOztBQWFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBNUNTO0VBNkNULGNBQUE7RUFDQSxZQTlDUztBQW9DYjs7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW1hZ2Utc2l6ZTogMTIwcHg7XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MTk0Nztcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIH1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIH1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm90cC1zdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMzclO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbiNoZWFkZXItaWNvbnN7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiM1MDUzN2E7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuLmhlYWRlciB7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICM1MDUzN2E7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC1mYW1pbHk6IFwiQWxlZlwiO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uaW1hZ2Utcm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUNFQ0U7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZBRkFGQTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAkaW1hZ2Utc2l6ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogJGltYWdlLXNpemU7XG59XG5cbi5yZXNlbmRfb3RwIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNTlweDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbn1cblxuXG5cblxuXG5cbi8vIC5vdHAtaW5wdXQtbWFpbiB7XG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbi8vIH1cbi8vIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gfVxuLy8gLm90cC1pbnB1dCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuYnRuLWNyZWF0ZSB7XG4vLyAgIC0tYm94LXNoYWRvdzogbm9uZTtcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuLy8gICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuLy8gICAtLXBhZGRpbmctbGVmdDogMjVweDtcbi8vICAgLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi8vIC5jYXJkX3RpbWVyIHtcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gfVxuLy8gLm5vLXBhZGRpbmcge1xuLy8gICBwYWRkaW5nOiAwcHg7XG4vLyB9XG4vLyAuY2FyZF90aW1lciAuYnV0dG9uLWlubmVyIHtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4vLyB9XG4vLyAubG9nb3V0YnRuIHtcbi8vICAgZm9udC1zaXplOiAyNXB4O1xuLy8gfVxuXG4vLyBpb24taWNvbixcbi8vIGlvbi10aXRsZSB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vIH1cbi8vIGlvbi1pdGVtIHtcbi8vICAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICAtLWJvcmRlci1ib3R0b206IG5vbmU7XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/verification/verification.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/verification/verification.page.ts ***!
      \***************************************************/

    /*! exports provided: VerificationPage */

    /***/
    function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
        return VerificationPage;
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


      var _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/token-service/token.service */
      "./src/app/providers/token-service/token.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/events-service/events.service */
      "./src/app/providers/events-service/events.service.ts");

      var VerificationPage = /*#__PURE__*/function () {
        function VerificationPage(toastCtrl, loadingCtrl, apiService, tokenService, translate, menuCtrl, route, router, eventService) {
          var _this = this;

          _classCallCheck(this, VerificationPage);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.tokenService = tokenService;
          this.translate = translate;
          this.menuCtrl = menuCtrl;
          this.route = route;
          this.router = router;
          this.eventService = eventService;
          this.error = null;
          this.loading = {};
          this.inputCode = null;
          this.msg = null;
          this.timeInSeconds = 10;
          this.otp_send = false;
          this.tran_please_wait = 'Please Wait';
          this.tran_required_otp = 'Enter OTP';
          this.tran_went_wrong = 'Something went wrong, please try again later.';
          this.tran_otp_send = 'OTP Sent Successfully';
          this.menuCtrl.enable(false);
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
        }

        return _createClass(VerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mobile_no = this.route.snapshot.paramMap.get('mobile_no');
            this.sendOTP();
          } // ionViewWillEnter(){
          //   this.mobile_no=this.route.snapshot.paramMap.get('mobile_no');
          // }

        }, {
          key: "doLogout",
          value: function doLogout() {
            this.tokenService.remove();
            this.router.navigate(['login']);
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
          } //  submitOTPForm(){
          //    this.msg = null;
          //    if (this.inputCode == '' || this.inputCode == null) {
          //      this.presentToast(this.tran_required_otp,1000)
          //    }else{
          //      this.verifyOTP(this.inputCode);
          //    }
          //  }

        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this2 = this;

            var enteredOtp = this.otpInput.otpArray.join('');
            console.log('Verifying OTP:', enteredOtp);
            var loading = this.presentLoading();
            this.apiService.verify_otp(enteredOtp).subscribe(function (data) {
              return _this2.verifyOTPHandleResponse(data);
            }, function (error) {
              return _this2.handleError(error);
            });
          }
        }, {
          key: "sendOTP",
          value: function sendOTP() {
            var _this3 = this;

            var loading = this.presentLoading();
            this.apiService.send_otp().subscribe(function (data) {
              return _this3.handleResponse(data);
            }, function (error) {
              return _this3.handleError(error);
            });
          }
        }, {
          key: "verifyOTPHandleResponse",
          value: function verifyOTPHandleResponse(data) {
            console.log('3');
            this.loadingCtrl.dismiss();

            if (data.success == true) {
              console.log(data);
              var obj = data.otp_response;

              if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = obj.reason; // if(this.userstatus=='1'){
                //  this.navCtrl.setRoot(TabsPage)
                // this.eventService.getEvent().subscribe(user => {
                //   // Publish the user details
                //   this.eventService.publish(user);
                // });

                this.router.navigate(['home']);
                this.inputCode = ''; //   }
                //   else{
                //    this.navCtrl.setRoot(MaintenancePage)
                // }
              } else {
                this.msg = obj.reason;
              }

              if (obj.statusCode == 951) {
                this.otp_send = false;
              }

              this.presentToast(this.msg, 3000);
            }
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            console.log('1');
            this.loadingCtrl.dismiss();

            if (data.success == true) {
              var obj = data.otp_response;

              if (obj.statusCode == 900 || obj.statusCode == 952 || obj.statusCode == 957) {
                this.msg = this.tran_otp_send;
                this.otp_send = true;
              } else {
                this.msg = this.tran_went_wrong;
                this.otp_send = false;
              }

              this.presentToast(this.msg, 3000);
            }
            /*this.initTimer();
            this.startTimer();*/

          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log(error);
            console.log('2');
            this.loadingCtrl.dismiss();
            var errorMsg = '';

            if (error.status == 401) {
              errorMsg = error.error.message;
            } else {
              errorMsg = error.error.error;
            }

            if (errorMsg != '') {
              this.presentToast(errorMsg, 3000);
            }
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
            var _this4 = this;

            setTimeout(function () {
              if (!_this4.timer.runTimer) {
                return;
              }

              _this4.timer.secondsRemaining--;
              _this4.timer.displayTime = _this4.getSecondsAsDigitalClock(_this4.timer.secondsRemaining);

              if (_this4.timer.secondsRemaining > 0) {
                _this4.timerTick();
              } else {
                _this4.timer.hasFinished = true;
                _this4.otp_send = false;
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
          key: "presentToast",
          value: function presentToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: duration,
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
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.otp_send = false;
          }
        }, {
          key: "handleOtpChange",
          value: function handleOtpChange(otp) {
            console.log('OTP:', otp);
          }
        }]);
      }();

      VerificationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _providers_token_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _providers_events_service_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]
        }];
      };

      VerificationPage.propDecorators = {
        otpInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['otpInput']
        }]
      };
      VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verification.page.scss */
        "./src/app/verification/verification.page.scss"))["default"]]
      })], VerificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verification-verification-module-es5.js.map