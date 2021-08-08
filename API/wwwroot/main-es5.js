(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Lly":
    /*!*************************************************************!*\
      !*** ./src/app/errors/test-errors/test-errors.component.ts ***!
      \*************************************************************/

    /*! exports provided: TestErrorsComponent */

    /***/
    function Lly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestErrorsComponent", function () {
        return TestErrorsComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TestErrorsComponent_div_11_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r2, " ");
        }
      }

      function TestErrorsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TestErrorsComponent_div_11_li_2_Template, 2, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
        }
      }

      var TestErrorsComponent = /*#__PURE__*/function () {
        function TestErrorsComponent(http) {
          _classCallCheck(this, TestErrorsComponent);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
          this.validationErrors = [];
        }

        _createClass(TestErrorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "get404Error",
          value: function get404Error() {
            this.http.get(this.baseUrl + 'buggy/not-found').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "get400Error",
          value: function get400Error() {
            this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "get500Error",
          value: function get500Error() {
            this.http.get(this.baseUrl + 'buggy/server-error').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "get401Error",
          value: function get401Error() {
            this.http.get(this.baseUrl + 'buggy/auth').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "get400ValidationError",
          value: function get400ValidationError() {
            var _this = this;

            this.http.post(this.baseUrl + 'account/register', {}).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.error(error);
              _this.validationErrors = error;
            });
          }
        }]);

        return TestErrorsComponent;
      }();

      TestErrorsComponent.ɵfac = function TestErrorsComponent_Factory(t) {
        return new (t || TestErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TestErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TestErrorsComponent,
        selectors: [["app-test-errors"]],
        decls: 12,
        vars: 1,
        consts: [[1, "btn", "btn-outline-primary", "mr-3", 3, "click"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
        template: function TestErrorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_1_listener() {
              return ctx.get500Error();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Test 500 error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_3_listener() {
              return ctx.get400Error();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Test 400 error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_5_listener() {
              return ctx.get401Error();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Test 401 error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_7_listener() {
              return ctx.get404Error();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Test 404 error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestErrorsComponent_Template_button_click_9_listener() {
              return ctx.get400ValidationError();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Test 400 validation error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TestErrorsComponent_div_11_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Amir\Documents\dotnet\copia\Social-Network-Angular-Dotnet-\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_forms/text-input/text-input.component */
      "hOav");
      /* harmony import */


      var _forms_date_inputs_date_inputs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_forms/date-inputs/date-inputs.component */
      "H46j");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_div_20_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r2);
        }
      }

      function RegisterComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_20_li_2_Template, 2, 1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(accountService, toastr, fb, router) {
          _classCallCheck(this, RegisterComponent);

          this.accountService = accountService;
          this.toastr = toastr;
          this.fb = fb;
          this.router = router;
          this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.validationErrors = [];
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.maxDate = new Date();
            this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            var _this2 = this;

            this.registerForm = this.fb.group({
              gender: ['male'],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.matchValues('password')]]
            });
            this.registerForm.controls.password.valueChanges.subscribe(function () {
              _this2.registerForm.controls.confirmPassword.updateValueAndValidity();
            });
          }
        }, {
          key: "matchValues",
          value: function matchValues(matchTo) {
            return function (control) {
              var _a;

              return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value) ? null : {
                isMatching: true
              };
            };
          }
        }, {
          key: "register",
          value: function register() {
            var _this3 = this;

            this.accountService.register(this.registerForm.value).subscribe(function (response) {
              _this3.router.navigateByUrl('/members');
            }, function (error) {
              _this3.validationErrors = error;
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.cancelRegister.emit(false);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        outputs: {
          cancelRegister: "cancelRegister"
        },
        decls: 26,
        vars: 20,
        consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [1, "form-group"], [1, "control-label", 2, "margin-right", "10px"], [1, "radio-inline"], ["type", "radio", "value", "male", "formControlName", "gender"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "ml-3"], [3, "formControl", "label"], [3, "formControl", "label", "maxDate"], [3, "formControl", "label", "type"], ["class", "row", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", "mr-2", 3, "click"], [1, "row"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() {
              return ctx.registerForm.valid && ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm a: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Male ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Female ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-text-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-date-inputs", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-text-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-text-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_24_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["username"])("label", "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["knownAs"])("label", "Known As");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["dateOfBirth"])("label", "Date of Birth")("maxDate", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["city"])("label", "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["country"])("label", "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["password"])("label", "Password")("type", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerForm.controls["confirmPassword"])("label", "Confirm Password")("type", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _forms_date_inputs_date_inputs_component__WEBPACK_IMPORTED_MODULE_6__["DateInputsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "2qCV":
    /*!**********************************************************************!*\
      !*** ./src/app/members/member-messages/member-messages.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MemberMessagesComponent */

    /***/
    function qCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function () {
        return MemberMessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/message.service */
      "Qskx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");

      var _c0 = ["messageForm"];

      function MemberMessagesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No messages yet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MemberMessagesComponent_ul_4_li_2_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (unread) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MemberMessagesComponent_ul_4_li_2_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (read) ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, message_r5.dateread), " ");
        }
      }

      function MemberMessagesComponent_ul_4_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MemberMessagesComponent_ul_4_li_2_span_10_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MemberMessagesComponent_ul_4_li_2_span_11_Template, 3, 3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r5.senderPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", message_r5.senderUsername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, message_r5.messageSent));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !message_r5.dateread && message_r5.senderUsername !== ctx_r4.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r5.dateread && message_r5.senderUsername !== ctx_r4.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r5.content);
        }
      }

      function MemberMessagesComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessagesComponent_ul_4_li_2_Template, 14, 8, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.messageService.messageThread$));
        }
      }

      var MemberMessagesComponent = /*#__PURE__*/function () {
        function MemberMessagesComponent(messageService) {
          _classCallCheck(this, MemberMessagesComponent);

          this.messageService = messageService;
        }

        _createClass(MemberMessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this4 = this;

            this.messageService.sendMessage(this.username, this.messageContent).then(function () {
              _this4.messageForm.reset();
            });
          }
        }]);

        return MemberMessagesComponent;
      }();

      MemberMessagesComponent.ɵfac = function MemberMessagesComponent_Factory(t) {
        return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
      };

      MemberMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MemberMessagesComponent,
        selectors: [["app-member-messages"]],
        viewQuery: function MemberMessagesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageForm = _t.first);
          }
        },
        inputs: {
          username: "username",
          messages: "messages"
        },
        decls: 14,
        vars: 8,
        consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], ["style", "overflow: scroll; height: 500px", "class", "chat", 3, "scrollTop", 4, "ngIf"], [1, "card-footer"], ["autocomplete", "off", 3, "ngSubmit"], ["messageForm", "ngForm"], [1, "input-group"], ["name", "messageContent", "required", "", "type", "text", "placeholder", "Send a private message", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "chat", 2, "overflow", "scroll", "height", "500px", 3, "scrollTop"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "chat-img", "float-right"], [1, "rounded-circle", 3, "src", "alt"], [1, "chat-body"], [1, "header"], [1, "text-muted"], [1, "fa", "fa-clock-o"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "text-success"]],
        template: function MemberMessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessagesComponent_div_2_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MemberMessagesComponent_ul_4_Template, 4, 4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberMessagesComponent_Template_form_ngSubmit_7_listener() {
              return ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberMessagesComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.messageContent = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var tmp_0_0 = null;
            var tmp_1_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.messageService.messageThread$)) == null ? null : tmp_0_0.length) === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.messageService.messageThread$)) == null ? null : tmp_1_0.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_4__["TimeagoPipe"]],
        styles: [".card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n  max-height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJtZW1iZXItbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2hhdCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNiM2E5YTk7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "4+ph":
    /*!**********************************************************************!*\
      !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PhotoManagementComponent */

    /***/
    function ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoManagementComponent", function () {
        return PhotoManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/admin.service */
      "OMJ/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PhotoManagementComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoManagementComponent_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var photo_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.approvePhoto(photo_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Approve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoManagementComponent_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var photo_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.rejectPhoto(photo_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photo_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", photo_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", photo_r1.username);
        }
      }

      var PhotoManagementComponent = /*#__PURE__*/function () {
        function PhotoManagementComponent(adminService) {
          _classCallCheck(this, PhotoManagementComponent);

          this.adminService = adminService;
        }

        _createClass(PhotoManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPhotosForApproval();
          }
        }, {
          key: "getPhotosForApproval",
          value: function getPhotosForApproval() {
            var _this5 = this;

            this.adminService.getPhotosForApproval().subscribe(function (photos) {
              _this5.photos = photos;
            });
          }
        }, {
          key: "approvePhoto",
          value: function approvePhoto(photoId) {
            var _this6 = this;

            this.adminService.approvePhoto(photoId).subscribe(function () {
              _this6.photos.splice(_this6.photos.findIndex(function (p) {
                return p.id === photoId;
              }), 1);
            });
          }
        }, {
          key: "rejectPhoto",
          value: function rejectPhoto(photoId) {
            var _this7 = this;

            this.adminService.rejectPhoto(photoId).subscribe(function () {
              _this7.photos.splice(_this7.photos.findIndex(function (p) {
                return p.id === photoId;
              }), 1);
            });
          }
        }]);

        return PhotoManagementComponent;
      }();

      PhotoManagementComponent.ɵfac = function PhotoManagementComponent_Factory(t) {
        return new (t || PhotoManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
      };

      PhotoManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhotoManagementComponent,
        selectors: [["app-photo-management"]],
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "col-sm-2"], [1, "img-thumbnail", "p-1", 3, "src", "alt"], [1, "text-center"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btndanger", 3, "click"]],
        template: function PhotoManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoManagementComponent_div_1_Template, 9, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    min-width: 150px !important;\r\n    margin-bottom: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InBob3RvLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5pbWctdGh1bWJuYWlsIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "4rg4":
    /*!*********************************************************!*\
      !*** ./src/app/errors/not-found/not-found.component.ts ***!
      \*********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function rg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 5,
        vars: 0,
        consts: [[1, "container"], ["routerLink", "/", 1, "btn-info", "btn-lg"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Not found ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Return to homepage ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "5ZPe":
    /*!**********************************************!*\
      !*** ./src/app/_services/account.service.ts ***!
      \**********************************************/

    /*! exports provided: AccountService */

    /***/
    function ZPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _presence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./presence.service */
      "mV+E");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http, presence) {
          _classCallCheck(this, AccountService);

          this.http = http;
          this.presence = presence;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
          this.currentUser$ = this.currentUserSource.asObservable();
        }

        _createClass(AccountService, [{
          key: "login",
          value: function login(model) {
            var _this8 = this;

            return this.http.post(this.baseUrl + 'account/login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              var user = response;

              if (user) {
                _this8.setCurrentUser(user);

                _this8.presence.createHubConnection(user);
              }
            }));
          }
        }, {
          key: "register",
          value: function register(model) {
            var _this9 = this;

            return this.http.post(this.baseUrl + 'account/register', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (user) {
                _this9.setCurrentUser(user);

                _this9.presence.createHubConnection(user);
              }
            }));
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            user.roles = [];
            var roles = this.getDecodedToken(user.token).role;
            Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            this.currentUserSource.next(null);
            this.presence.stopHubConnection();
          }
        }, {
          key: "getDecodedToken",
          value: function getDecodedToken(token) {
            return JSON.parse(atob(token.split('.')[1])); //[0] = Header [1] = Payload
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_presence_service__WEBPACK_IMPORTED_MODULE_5__["PresenceService"]));
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "81j5":
    /*!***************************************************************!*\
      !*** ./src/app/errors/server-error/server-error.component.ts ***!
      \***************************************************************/

    /*! exports provided: ServerErrorComponent */

    /***/
    function j5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
        return ServerErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ServerErrorComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Note: If you are seeing this then Angular is probably not to blame");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What to do next?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Open the chrome dev tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Inspect the network tab ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Check the failing request ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Examing the requerst URL - make sure it is correct ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Reproduce the error in Postman - if we seen the same response, then the issue is not with Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Following is the stack trace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r0.error.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error.details, " ");
        }
      }

      var ServerErrorComponent = /*#__PURE__*/function () {
        function ServerErrorComponent(router) {
          _classCallCheck(this, ServerErrorComponent);

          var _a, _b;

          this.router = router;
          var navigation = this.router.getCurrentNavigation();
          this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.error;
        }

        _createClass(ServerErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServerErrorComponent;
      }();

      ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) {
        return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServerErrorComponent,
        selectors: [["app-server-error"]],
        decls: 3,
        vars: 1,
        consts: [[4, "ngIf"], [1, "text-danger"], [1, "font-weight-bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]],
        template: function ServerErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Internal server error - refreshing the page will make the error disappear!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServerErrorComponent_ng_container_2_Template, 22, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "8T1h":
    /*!***************************************************!*\
      !*** ./src/app/_directives/has-role.directive.ts ***!
      \***************************************************/

    /*! exports provided: HasRoleDirective */

    /***/
    function T1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function () {
        return HasRoleDirective;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");

      var HasRoleDirective = /*#__PURE__*/function () {
        function HasRoleDirective(viewContainerRef, templateRef, accountService) {
          var _this10 = this;

          _classCallCheck(this, HasRoleDirective);

          this.viewContainerRef = viewContainerRef;
          this.templateRef = templateRef;
          this.accountService = accountService;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (user) {
            _this10.user = user;
          });
        }

        _createClass(HasRoleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var _a, _b;

            if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user === null) {
              this.viewContainerRef.clear();
              return;
            }

            if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(function (r) {
              return _this11.appHasRole.includes(r);
            })) {
              this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainerRef.clear();
            }
          }
        }]);

        return HasRoleDirective;
      }();

      HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) {
        return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      HasRoleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: HasRoleDirective,
        selectors: [["", "appHasRole", ""]],
        inputs: {
          appHasRole: "appHasRole"
        }
      });
      /***/
    },

    /***/
    "8rMn":
    /*!*******************************************!*\
      !*** ./src/app/_services/busy.service.ts ***!
      \*******************************************/

    /*! exports provided: BusyService */

    /***/
    function rMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusyService", function () {
        return BusyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var BusyService = /*#__PURE__*/function () {
        function BusyService(spinnerService) {
          _classCallCheck(this, BusyService);

          this.spinnerService = spinnerService;
          this.busyRequestCount = 0;
        }

        _createClass(BusyService, [{
          key: "busy",
          value: function busy() {
            this.busyRequestCount++;
            this.spinnerService.show(undefined, {
              type: 'square-jelly-box',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff'
            });
          }
        }, {
          key: "idle",
          value: function idle() {
            this.busyRequestCount--;

            if (this.busyRequestCount <= 0) {
              this.busyRequestCount = 0;
              this.spinnerService.hide();
            }
          }
        }]);

        return BusyService;
      }();

      BusyService.ɵfac = function BusyService_Factory(t) {
        return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
      };

      BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BusyService,
        factory: BusyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../register/register.component */
      "1W4x");

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Find your match");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Come on in to view your matches... all you need is to sign up!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.registerToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Learn more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-register", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelRegister", function HomeComponent_div_2_Template_app_register_cancelRegister_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.cancelRegisterMode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.registerMode = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registerToggle",
          value: function registerToggle() {
            this.registerMode = !this.registerMode;
          }
        }, {
          key: "cancelRegisterMode",
          value: function cancelRegisterMode(event) {
            this.registerMode = event;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 2,
        consts: [[1, "container", "mt-5"], ["style", "text-align: center;", 4, "ngIf"], ["class", "container", 4, "ngIf"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "btn", "btn-info", "btn-lg"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [3, "cancelRegister"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 10, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registerMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerMode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Au4E":
    /*!***************************************!*\
      !*** ./src/app/_models/pagination.ts ***!
      \***************************************/

    /*! exports provided: PaginatedResult */

    /***/
    function Au4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatedResult", function () {
        return PaginatedResult;
      });

      var PaginatedResult = function PaginatedResult() {
        _classCallCheck(this, PaginatedResult);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://localhost:5001/api/',
        hubUrl: 'https://localhost:5001/hubs/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Btx/":
    /*!**************************************************!*\
      !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function Btx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(accountService) {
          _classCallCheck(this, JwtInterceptor);

          this.accountService = accountService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser;
            this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (user) {
              return currentUser = user;
            });

            if (currentUser) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "DruN":
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function DruN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/message.service */
      "Qskx");
      /* harmony import */


      var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/confirm.service */
      "xuvy");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "s3T5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "Lm2G");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");

      function MessagesComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MessagesComponent_div_12_tr_11_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r4.recipientPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", message_r4.recipientUsername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, message_r4.recipientUsername));
        }
      }

      function MessagesComponent_div_12_tr_11_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r4.senderPhotoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", message_r4.senderUsername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, message_r4.senderUsername));
        }
      }

      var _c0 = function _c0() {
        return {
          tab: 3
        };
      };

      function MessagesComponent_div_12_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessagesComponent_div_12_tr_11_div_4_Template, 5, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_12_tr_11_div_5_Template, 5, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_12_tr_11_Template_button_click_10_listener($event) {
            return $event.stopPropagation();
          })("click", function MessagesComponent_div_12_tr_11_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var message_r4 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.deleteMessage(message_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.container === "Outbox" ? "/members/" + message_r4.recipientUsername : "/members/" + message_r4.senderUsername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.loading)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r4.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.container === "Outbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.container !== "Outbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, message_r4.messageSent));
        }
      }

      function MessagesComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "From / To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sent / Received");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessagesComponent_div_12_tr_11_Template, 12, 10, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
        }
      }

      function MessagesComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_div_13_Template_pagination_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.pagination.currentPage = $event;
          })("pageChanged", function MessagesComponent_div_13_Template_pagination_pageChanged_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r2.pagination.totalItems)("itemsPerPage", ctx_r2.pagination.itemsPerPage)("ngModel", ctx_r2.pagination.currentPage);
        }
      }

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messageService, confirmService) {
          _classCallCheck(this, MessagesComponent);

          this.messageService = messageService;
          this.confirmService = confirmService;
          this.messages = [];
          this.container = 'Unread';
          this.pageNumber = 1;
          this.pageSize = 5;
          this.loading = false;
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMessages();
          }
        }, {
          key: "loadMessages",
          value: function loadMessages() {
            var _this12 = this;

            this.loading = true;
            this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(function (response) {
              _this12.messages = response.result;
              _this12.pagination = response.pagination;
              _this12.loading = false;
            });
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(id) {
            var _this13 = this;

            this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(function (result) {
              if (result) {
                _this13.messageService.deleteMessage(id).subscribe(function () {
                  _this13.messages.splice(_this13.messages.findIndex(function (m) {
                    return m.id === id;
                  }), 1);
                });
              }
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            console.log('sigo corriendo');

            if (this.pageNumber !== event.page) {
              this.pageNumber = event.page;
              this.loadMessages();
            }
          }
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"]));
      };

      MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessagesComponent,
        selectors: [["app-messages"]],
        decls: 14,
        vars: 6,
        consts: [[1, "row", "mb-4"], ["name", "container", 1, "btn-group"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row"], [1, "table", "table-hover", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "hidden", "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "hidden", "routerLink", "queryParams"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "img-circle", "rounded-circle", "mr-2", 3, "src", "alt"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_2_listener($event) {
              return ctx.container = $event;
            })("click", function MessagesComponent_Template_button_click_2_listener() {
              return ctx.loadMessages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Unread ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_5_listener($event) {
              return ctx.container = $event;
            })("click", function MessagesComponent_Template_button_click_5_listener() {
              return ctx.loadMessages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_8_listener($event) {
              return ctx.container = $event;
            })("click", function MessagesComponent_Template_button_click_8_listener() {
              return ctx.loadMessages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Outbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessagesComponent_div_11_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 12, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 3, 4, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.container);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.container);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.container);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination && !ctx.loading);
          }
        },
        directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]],
        pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_8__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
        styles: [".img-circle[_ngcontent-%COMP%] {\r\n  max-height: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2lyY2xlIHtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "H46j":
    /*!*************************************************************!*\
      !*** ./src/app/_forms/date-inputs/date-inputs.component.ts ***!
      \*************************************************************/

    /*! exports provided: DateInputsComponent */

    /***/
    function H46j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateInputsComponent", function () {
        return DateInputsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DateInputsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }
      }

      var DateInputsComponent = /*#__PURE__*/function () {
        function DateInputsComponent(ngControl) {
          _classCallCheck(this, DateInputsComponent);

          this.ngControl = ngControl;
          this.ngControl.valueAccessor = this;
          this.bsConfig = {
            containerClass: 'theme-dark-blue',
            dateInputFormat: 'DD MM YYYY'
          };
        }

        _createClass(DateInputsComponent, [{
          key: "writeValue",
          value: function writeValue(obj) {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {}
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }]);

        return DateInputsComponent;
      }();

      DateInputsComponent.ɵfac = function DateInputsComponent_Factory(t) {
        return new (t || DateInputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 2));
      };

      DateInputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateInputsComponent,
        selectors: [["app-date-inputs"]],
        inputs: {
          label: "label",
          maxDate: "maxDate"
        },
        decls: 3,
        vars: 7,
        consts: [[1, "form-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "formControl", "placeholder", "bsConfig", "maxDate"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
        template: function DateInputsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateInputsComponent_div_2_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.ngControl.touched && ctx.ngControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ngControl.control)("bsConfig", ctx.bsConfig)("maxDate", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.required);
          }
        },
        directives: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLWlucHV0cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "IiJT":
    /*!*******************************************!*\
      !*** ./src/app/_modules/shared.module.ts ***!
      \*******************************************/

    /*! exports provided: SharedModule */

    /***/
    function IiJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @kolkov/ngx-gallery */
      "XGsO");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "Lm2G");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "s3T5");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
          positionClass: 'toast-bottom-right'
        }), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(), _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"]],
          exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"]]
        });
      })();
      /***/

    },

    /***/
    "MMab":
    /*!****************************************************!*\
      !*** ./src/app/_interceptors/error.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function MMab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router, toastr) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this14 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              if (error) {
                switch (error.status) {
                  case 400:
                    if (error.error.errors) {
                      var modalStateErrors = [];

                      for (var key in error.error.errors) {
                        if (error.error.errors[key]) {
                          modalStateErrors.push(error.error.errors[key]);
                        }
                      }

                      throw modalStateErrors.flat();
                    } else if (typeof error.error === 'object') {
                      _this14.toastr.error(error.statusText, error.status);
                    } else {
                      _this14.toastr.error(error.error, error.status);
                    }

                    break;

                  case 401:
                    _this14.toastr.error(error.statusText === 'OK' ? 'Unauthorized' : error.statusText, error.status);

                    break;

                  case 404:
                    _this14.router.navigateByUrl('/not-found');

                    break;

                  case 500:
                    var navigationExtras = {
                      state: {
                        error: error.error
                      }
                    };

                    _this14.router.navigateByUrl('/server-error', navigationExtras);

                    break;

                  default:
                    _this14.toastr.error('Something unexpected went wrong');

                    console.error(error);
                    break;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "NWYD":
    /*!****************************************!*\
      !*** ./src/app/_guards/admin.guard.ts ***!
      \****************************************/

    /*! exports provided: AdminGuard */

    /***/
    function NWYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(accountService, toastr) {
          _classCallCheck(this, AdminGuard);

          this.accountService = accountService;
          this.toastr = toastr;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this15 = this;

            return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
              if (user.roles.includes('Admin') || user.roles.includes('Moderator')) return true;

              _this15.toastr.error('You cannot enter this area');
            }));
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdminGuard,
        factory: AdminGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "OMJ/":
    /*!********************************************!*\
      !*** ./src/app/_services/admin.service.ts ***!
      \********************************************/

    /*! exports provided: AdminService */

    /***/
    function OMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AdminService = /*#__PURE__*/function () {
        function AdminService(http) {
          _classCallCheck(this, AdminService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        }

        _createClass(AdminService, [{
          key: "getUsersWithRoles",
          value: function getUsersWithRoles() {
            return this.http.get(this.baseUrl + 'admin/users-with-roles');
          }
        }, {
          key: "updateUserRoles",
          value: function updateUserRoles(username, roles) {
            return this.http.post(this.baseUrl + "admin/edit-roles/".concat(username, "?roles=") + roles, {});
          }
        }, {
          key: "getPhotosForApproval",
          value: function getPhotosForApproval() {
            return this.http.get(this.baseUrl + 'admin/photos-to-moderate');
          }
        }, {
          key: "approvePhoto",
          value: function approvePhoto(photoId) {
            return this.http.post(this.baseUrl + 'admin/approve-photo/' + photoId, {});
          }
        }, {
          key: "rejectPhoto",
          value: function rejectPhoto(photoId) {
            return this.http.post(this.baseUrl + 'admin/reject-photo/' + photoId, {});
          }
        }]);

        return AdminService;
      }();

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdminService,
        factory: AdminService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "OcPW":
    /*!********************************************************************!*\
      !*** ./src/app/admin/user-management/user-management.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserManagementComponent */

    /***/
    function OcPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
        return UserManagementComponent;
      });
      /* harmony import */


      var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/modals/roles-modal/roles-modal.component */
      "yNbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/admin.service */
      "OMJ/");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserManagementComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserManagementComponent_tr_8_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var user_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.openRolesModal(user_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Edit roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.roles);
        }
      }

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent(adminService, modalService) {
          _classCallCheck(this, UserManagementComponent);

          this.adminService = adminService;
          this.modalService = modalService;
        }

        _createClass(UserManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsersWithRoles();
          }
        }, {
          key: "getUsersWithRoles",
          value: function getUsersWithRoles() {
            var _this16 = this;

            this.adminService.getUsersWithRoles().subscribe(function (users) {
              _this16.users = users;
            });
          }
        }, {
          key: "openRolesModal",
          value: function openRolesModal(user) {
            var _this17 = this;

            var config = {
              "class": 'modal-dialog-centered',
              initialState: {
                user: user,
                roles: this.getRolesArray(user)
              }
            };
            this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__["RolesModalComponent"], config);
            this.bsModalRef.content.updateSelectedRoles.subscribe(function (values) {
              var rolesToUpdate = {
                roles: _toConsumableArray(values.filter(function (el) {
                  return el.checked === true;
                }).map(function (el) {
                  return el.name;
                }))
              };

              if (rolesToUpdate) {
                _this17.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(function () {
                  user.roles = _toConsumableArray(rolesToUpdate.roles);
                });
              }
            });
          }
        }, {
          key: "getRolesArray",
          value: function getRolesArray(user) {
            var roles = [];
            var userRoles = user.roles;
            var availableRoles = [{
              name: 'Admin',
              value: 'Admin'
            }, {
              name: 'Moderator',
              value: 'Moderator'
            }, {
              name: 'Member',
              value: 'Member'
            }];
            availableRoles.forEach(function (role) {
              var isMatch = false;

              var _iterator = _createForOfIteratorHelper(userRoles),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var userRole = _step.value;

                  if (role.name === userRole) {
                    isMatch = true;
                    role.checked = true;
                    roles.push(role);
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!isMatch) {
                role.checked = false;
                roles.push(role);
              }
            });
            return roles;
          }
        }]);

        return UserManagementComponent;
      }();

      UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) {
        return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]));
      };

      UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UserManagementComponent,
        selectors: [["app-user-management"]],
        decls: 9,
        vars: 1,
        consts: [[1, "row"], [1, "table"], [2, "width", "30%"], [2, "width", "40%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"]],
        template: function UserManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Active Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserManagementComponent_tr_8_Template, 8, 2, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "PL33":
    /*!******************************************************************!*\
      !*** ./src/app/members/member-detail/member-detail.component.ts ***!
      \******************************************************************/

    /*! exports provided: MemberDetailComponent */

    /***/
    function PL33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function () {
        return MemberDetailComponent;
      });
      /* harmony import */


      var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @kolkov/ngx-gallery */
      "XGsO");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/presence.service */
      "mV+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/message.service */
      "Qskx");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../member-messages/member-messages.component */
      "2qCV");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");

      var _c0 = ["memberTabs"];

      function MemberDetailComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Online now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var MemberDetailComponent = /*#__PURE__*/function () {
        function MemberDetailComponent(presence, route, messageService, accountService, router) {
          var _this18 = this;

          _classCallCheck(this, MemberDetailComponent);

          this.presence = presence;
          this.route = route;
          this.messageService = messageService;
          this.accountService = accountService;
          this.router = router;
          this.messages = [];
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
            return _this18.user = user;
          });

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }

        _createClass(MemberDetailComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.messageService.stopHubConnection();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.route.data.subscribe(function (data) {
              _this19.member = data.member;
            });
            this.route.queryParams.subscribe(function (params) {
              params.tab ? _this19.selectTab(params.tab) : _this19.selectTab(0);
            });
            this.galleryOptions = [{
              width: '500px',
              height: '500px',
              imagePercent: 100,
              thumbnailsColumns: 4,
              imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__["NgxGalleryAnimation"].Slide,
              preview: false
            }];
            this.galleryImages = this.getImages();
          }
        }, {
          key: "getImages",
          value: function getImages() {
            var imageUrls = [];

            var _iterator2 = _createForOfIteratorHelper(this.member.photos),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var photo = _step2.value;
                imageUrls.push({
                  small: photo === null || photo === void 0 ? void 0 : photo.url,
                  medium: photo === null || photo === void 0 ? void 0 : photo.url,
                  big: photo === null || photo === void 0 ? void 0 : photo.url
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return imageUrls;
          }
        }, {
          key: "loadMessages",
          value: function loadMessages() {
            var _this20 = this;

            this.messageService.getMessagesThread(this.member.username).subscribe(function (messages) {
              return _this20.messages = messages;
            });
          }
        }, {
          key: "selectTab",
          value: function selectTab(tabId) {
            this.memberTabs.tabs[tabId].active = true;
          }
        }, {
          key: "onTabActivated",
          value: function onTabActivated(data) {
            this.activeTab = data;

            if (this.activeTab.heading === 'Messages' && this.messages.length === 0) {
              this.messageService.createHubConnection(this.user, this.member.username);
            } else {
              this.messageService.stopHubConnection();
            }
          }
        }]);

        return MemberDetailComponent;
      }();

      MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) {
        return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      MemberDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MemberDetailComponent,
        selectors: [["app-member-detail"]],
        viewQuery: function MemberDetailComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
          }
        },
        decls: 56,
        vars: 22,
        consts: [[1, "row"], [1, "col-4"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "btn", "btn-success"], [1, "btn", "btn-info", 3, "click"], [1, "col-8"], [1, "member-tabset"], ["memberTabs", ""], [3, "heading", "selectTab"], ["heading", "Interests", 3, "selectTab"], ["heading", "Photos", 3, "selectTab"], [2, "display", "inline-block", "margin-bottom", "20px", 3, "options", "images"], ["heading", "Messages", 3, "selectTab"], [3, "username"], [1, "mb-2"], [1, "fa", "fa-user-circle", "text-success"]],
        template: function MemberDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MemberDetailComponent_div_5_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Age:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Last Activate:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "timeago");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Member since:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberDetailComponent_Template_button_click_33_listener() {
              return ctx.selectTab(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tabset", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_38_listener($event) {
              return ctx.onTabActivated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Desctription");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Looking for");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tab", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_47_listener($event) {
              return ctx.onTabActivated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Interests");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tab", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_52_listener($event) {
              return ctx.onTabActivated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "ngx-gallery", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_54_listener($event) {
              return ctx.onTabActivated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "app-member-messages", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.member.knownAs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 15, ctx.presence.onlineUsers$).includes(ctx.member.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.member.city, ", ", ctx.member.country, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.member.age);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 17, ctx.member.lastActive));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 19, ctx.member.created, "dd MMM yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx.member.knownAs, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.member.introduction);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.member.lookingFor);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.member.interests);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("username", ctx.member.username);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__["NgxGalleryComponent"], _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_9__["MemberMessagesComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], ngx_timeago__WEBPACK_IMPORTED_MODULE_10__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n  margin: 25px;\r\n  width: 85%;\r\n  height: 85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n  border-top: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gIG1hcmdpbjogMjVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "PSoG":
    /*!***************************************!*\
      !*** ./src/app/_guards/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PSoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(accountService, toastr) {
          _classCallCheck(this, AuthGuard);

          this.accountService = accountService;
          this.toastr = toastr;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this21 = this;

            return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
              if (user) return true;

              _this21.toastr.error("You shall not pass!");
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Qskx":
    /*!**********************************************!*\
      !*** ./src/app/_services/message.service.ts ***!
      \**********************************************/

    /*! exports provided: MessageService */

    /***/
    function Qskx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _paginationHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paginationHelper */
      "uFUS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MessageService = /*#__PURE__*/function () {
        function MessageService(http) {
          _classCallCheck(this, MessageService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hubUrl;
          this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.messageThread$ = this.messageThreadSource.asObservable();
        }

        _createClass(MessageService, [{
          key: "createHubConnection",
          value: function createHubConnection(user, otherUsername) {
            var _this22 = this;

            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(this.hubUrl + 'message?user=' + otherUsername, {
              accessTokenFactory: function accessTokenFactory() {
                return user.token;
              }
            }).withAutomaticReconnect().build();
            this.hubConnection.start()["catch"](function (error) {
              return console.log(error);
            });
            this.hubConnection.on('ReceiveMessageThread', function (messages) {
              _this22.messageThreadSource.next(messages);
            });
            this.hubConnection.on('NewMessage', function (message) {
              _this22.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (messages) {
                _this22.messageThreadSource.next([].concat(_toConsumableArray(messages), [message]));
              });
            });
            this.hubConnection.on('UpdatedGroup', function (group) {
              if (group.connections.some(function (x) {
                return x.username === otherUsername;
              })) {
                _this22.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (messages) {
                  messages.forEach(function (message) {
                    if (!message.dateread) {
                      message.dateread = new Date(Date.now());
                    }
                  });

                  _this22.messageThreadSource.next(_toConsumableArray(messages));
                });
              }
            });
          }
        }, {
          key: "stopHubConnection",
          value: function stopHubConnection() {
            if (this.hubConnection) {
              this.hubConnection.stop();
            }
          }
        }, {
          key: "getMessages",
          value: function getMessages(pageNumber, pageSize, container) {
            var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_5__["getPaginationHeaders"])(pageNumber, pageSize);
            params = params.append('Container', container);
            return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_5__["getPaginatedResult"])(this.baseUrl + 'messages', params, this.http);
          }
        }, {
          key: "getMessagesThread",
          value: function getMessagesThread(username) {
            return this.http.get(this.baseUrl + 'messages/thread/' + username);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(username, content) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.hubConnection.invoke('SendMessage', {
                        recipientUsername: username,
                        content: content
                      })["catch"](function (error) {
                        return console.log(error);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(id) {
            return this.http["delete"](this.baseUrl + 'messages/' + id);
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Rv1c":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-list/member-list.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberListComponent */

    /***/
    function Rv1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberListComponent", function () {
        return MemberListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "s3T5");
      /* harmony import */


      var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../member-card/member-card.component */
      "kntC");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "Lm2G");

      function MemberListComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gender_r4.display, " ");
        }
      }

      function MemberListComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("member", member_r5);
        }
      }

      function MemberListComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_31_Template_pagination_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.pagination.currentPage = $event;
          })("pageChanged", function MemberListComponent_div_31_Template_pagination_pageChanged_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r3.pagination.totalItems)("itemsPerPage", ctx_r3.pagination.itemsPerPage)("ngModel", ctx_r3.pagination.currentPage);
        }
      }

      var MemberListComponent = /*#__PURE__*/function () {
        function MemberListComponent(membersService) {
          _classCallCheck(this, MemberListComponent);

          this.membersService = membersService;
          this.genderList = [{
            value: 'male',
            display: 'Males'
          }, {
            value: 'female',
            display: 'Females'
          }];
          this.userParams = membersService.getUserParams();
        }

        _createClass(MemberListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMembers();
          }
        }, {
          key: "loadMembers",
          value: function loadMembers() {
            var _this23 = this;

            this.membersService.setUserParams(this.userParams);
            this.membersService.getMembers(this.userParams).subscribe(function (response) {
              _this23.members = response.result;
              _this23.pagination = response.pagination;
            });
          }
        }, {
          key: "resetFilters",
          value: function resetFilters() {
            this.userParams = this.membersService.resetUserParams();
            this.loadMembers();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.userParams.pageNumber = event.page;
            this.membersService.setUserParams(this.userParams);
            this.loadMembers();
          }
        }]);

        return MemberListComponent;
      }();

      MemberListComponent.ɵfac = function MemberListComponent_Factory(t) {
        return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"]));
      };

      MemberListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MemberListComponent,
        selectors: [["app-member-list"]],
        decls: 32,
        vars: 9,
        consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], ["autocomplete", "off", 1, "form-inline", "mb-3", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "number", "name", "minAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "form-group", "px-2"], ["type", "number", "name", "maxAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "form-control", "ml-1", 2, "width", "130px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "ml-1"], ["type", "submit", 1, "btn", "btn-warning", "ml-1", 3, "click"], [1, "col"], [1, "btn-group", "float-right"], ["type", "button", "name", "orderBy", "btnRadio", "lastActive", 1, "btn", "btn-info", 3, "ngModel", "click", "ngModelChange"], ["type", "button", "name", "orderBy", "btnRadio", "created", 1, "btn", "btn-info", 3, "ngModel", "click", "ngModelChange"], [1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "value"], [1, "col-2"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
        template: function MemberListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_4_listener() {
              return ctx.loadMembers();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Age from: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.userParams.minAge = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Age to: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.userParams.maxAge = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Show: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_17_listener($event) {
              return ctx.userParams.gender = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MemberListComponent_option_18_Template, 2, 2, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apply filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_21_listener() {
              return ctx.resetFilters();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Reset filters ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_25_listener() {
              return ctx.loadMembers();
            })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_25_listener($event) {
              return ctx.userParams.orderBy = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Last Active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_27_listener() {
              return ctx.loadMembers();
            })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_27_listener($event) {
              return ctx.userParams.orderBy = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Newest Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MemberListComponent_div_30_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MemberListComponent_div_31_Template, 2, 4, "div", 18);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your matches - ", ctx.pagination == null ? null : ctx.pagination.totalItems, " found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.minAge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.maxAge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genderList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_5__["MemberCardComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services/account.service */
      "5ZPe");
      /* harmony import */


      var _services_presence_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_services/presence.service */
      "mV+E");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(accountService, presence) {
          _classCallCheck(this, AppComponent);

          this.accountService = accountService;
          this.presence = presence;
          this.title = 'The Dating App';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setCurrentUser();
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser() {
            var user = JSON.parse(localStorage.getItem('user'));

            if (user) {
              this.accountService.setCurrentUser(user);
              this.presence.createHubConnection(user);
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_2__["PresenceService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [[1, "container", 2, "margin-top", "100px"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "VNsv":
    /*!******************************************************!*\
      !*** ./src/app/_interceptors/loading.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: LoadingInterceptor */

    /***/
    function VNsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
        return LoadingInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/busy.service */
      "8rMn");

      var LoadingInterceptor = /*#__PURE__*/function () {
        function LoadingInterceptor(busyService) {
          _classCallCheck(this, LoadingInterceptor);

          this.busyService = busyService;
        }

        _createClass(LoadingInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this24 = this;

            this.busyService.busy();
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
              _this24.busyService.idle();
            }));
          }
        }]);

        return LoadingInterceptor;
      }();

      LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) {
        return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]));
      };

      LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoadingInterceptor,
        factory: LoadingInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "YMan":
    /*!**********************************************!*\
      !*** ./src/app/_services/members.service.ts ***!
      \**********************************************/

    /*! exports provided: MembersService */

    /***/
    function YMan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembersService", function () {
        return MembersService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _models_userParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models/userParams */
      "nXO7");
      /* harmony import */


      var _paginationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./paginationHelper */
      "uFUS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account.service */
      "5ZPe");

      var MembersService = /*#__PURE__*/function () {
        function MembersService(http, accountService) {
          var _this25 = this;

          _classCallCheck(this, MembersService);

          this.http = http;
          this.accountService = accountService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.members = [];
          this.memberCache = new Map();
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
            _this25.user = user;
            _this25.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_3__["UserParams"](user);
          });
        }

        _createClass(MembersService, [{
          key: "getUserParams",
          value: function getUserParams() {
            return this.userParams;
          }
        }, {
          key: "setUserParams",
          value: function setUserParams(params) {
            this.userParams = params;
          }
        }, {
          key: "resetUserParams",
          value: function resetUserParams() {
            this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_3__["UserParams"](this.user);
            return this.userParams;
          }
        }, {
          key: "getMembers",
          value: function getMembers(userParams) {
            var _this26 = this;

            var response = this.memberCache.get(Object.values(userParams).join('-'));

            if (response) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(response);
            }

            var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_4__["getPaginationHeaders"])(userParams.pageNumber, userParams.pageSize);
            params = params.append('minAge', userParams.minAge.toString());
            params = params.append('maxAge', userParams.maxAge.toString());
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
            return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_4__["getPaginatedResult"])(this.baseUrl + 'users', params, this.http).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              _this26.memberCache.set(Object.values(userParams).join('-'), response);

              return response;
            }));
          }
        }, {
          key: "getMember",
          value: function getMember(username) {
            var member = _toConsumableArray(this.memberCache.values()).reduce(function (arr, elem) {
              return arr.concat(elem.result);
            }, []).find(function (member) {
              return member.username === username;
            });

            if (member) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(member);
            }

            return this.http.get(this.baseUrl + "users/".concat(username));
          }
        }, {
          key: "updateMember",
          value: function updateMember(member) {
            var _this27 = this;

            return this.http.put(this.baseUrl + 'users', member).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              var index = _this27.members.indexOf(member);

              _this27.members[index] = member;
            }));
          }
        }, {
          key: "setMainPhoto",
          value: function setMainPhoto(photoId) {
            return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photoId) {
            return this.http["delete"](this.baseUrl + 'users/delete-photo/' + photoId);
          }
        }, {
          key: "addLike",
          value: function addLike(username) {
            return this.http.post(this.baseUrl + 'likes/' + username, {});
          }
        }, {
          key: "getLikes",
          value: function getLikes(predicate, pageNumber, pageSize) {
            var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_4__["getPaginationHeaders"])(pageNumber, pageSize);
            params = params.append('predicate', predicate);
            return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_4__["getPaginatedResult"])(this.baseUrl + 'likes', params, this.http);
          }
        }]);

        return MembersService;
      }();

      MembersService.ɵfac = function MembersService_Factory(t) {
        return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]));
      };

      MembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: MembersService,
        factory: MembersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./members/member-list/member-list.component */
      "Rv1c");
      /* harmony import */


      var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./members/member-detail/member-detail.component */
      "PL33");
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./lists/lists.component */
      "hnRM");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");
      /* harmony import */


      var _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./_modules/shared.module */
      "IiJT");
      /* harmony import */


      var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./errors/test-errors/test-errors.component */
      "/Lly");
      /* harmony import */


      var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_interceptors/error.interceptor */
      "MMab");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");
      /* harmony import */


      var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./errors/server-error/server-error.component */
      "81j5");
      /* harmony import */


      var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./members/member-card/member-card.component */
      "kntC");
      /* harmony import */


      var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./_interceptors/jwt.interceptor */
      "Btx/");
      /* harmony import */


      var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./members/member-edit/member-edit.component */
      "u2he");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./_interceptors/loading.interceptor */
      "VNsv");
      /* harmony import */


      var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./members/photo-editor/photo-editor.component */
      "Zkt1");
      /* harmony import */


      var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./_forms/text-input/text-input.component */
      "hOav");
      /* harmony import */


      var _forms_date_inputs_date_inputs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./_forms/date-inputs/date-inputs.component */
      "H46j");
      /* harmony import */


      var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./members/member-messages/member-messages.component */
      "2qCV");
      /* harmony import */


      var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./admin/admin-panel/admin-panel.component */
      "qPLm");
      /* harmony import */


      var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./_directives/has-role.directive */
      "8T1h");
      /* harmony import */


      var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./admin/user-management/user-management.component */
      "OcPW");
      /* harmony import */


      var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./admin/photo-management/photo-management.component */
      "4+ph");
      /* harmony import */


      var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./modals/roles-modal/roles-modal.component */
      "yNbP");
      /* harmony import */


      var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./modals/confirm-dialog/confirm-dialog.component */
      "vMgs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_22__["LoadingInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__["MemberListComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_10__["MemberDetailComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_11__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"], _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_14__["TestErrorsComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"], _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_17__["ServerErrorComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_18__["MemberCardComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_20__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_23__["PhotoEditorComponent"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_24__["TextInputComponent"], _forms_date_inputs_date_inputs_component__WEBPACK_IMPORTED_MODULE_25__["DateInputsComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_26__["MemberMessagesComponent"], _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_27__["AdminPanelComponent"], _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_28__["HasRoleDirective"], _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_29__["UserManagementComponent"], _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_30__["PhotoManagementComponent"], _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_31__["RolesModalComponent"], _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zkt1":
    /*!****************************************************************!*\
      !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
      \****************************************************************/

    /*! exports provided: PhotoEditorComponent */

    /***/
    function Zkt1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function () {
        return PhotoEditorComponent;
      });
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PhotoEditorComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Awaiting approval");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function PhotoEditorComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PhotoEditorComponent_div_1_div_2_Template, 3, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var photo_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.setMainPhoto(photo_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Main ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var photo_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.deletePhoto(photo_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var photo_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("not-approved", !photo_r2.isApproved);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", photo_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", photo_r2.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !photo_r2.isApproved);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r2.isMain || !photo_r2.isApproved)("ngClass", photo_r2.isMain ? "btn-success active" : "btn-outline-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", photo_r2.isMain);
        }
      }

      function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, (item_r8 == null ? null : item_r8.file == null ? null : item_r8.file.size) / 1024 / 1024, ".2"), " MB ");
        }
      }

      function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 3, 4, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.file == null ? null : item_r8.file.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uploader.options.isHTML5);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          width: a0
        };
      };

      function PhotoEditorComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Queue progress: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.uploader.uploadAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Upload all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.uploader.cancelAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Cancel all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.uploader.clearQueue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Remove all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.uploader.queue);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx_r1.uploader.progress + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.getNotUploadedItems().length);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.isUploading);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.uploader.queue.length);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "nv-file-over": a0
        };
      };

      var PhotoEditorComponent = /*#__PURE__*/function () {
        function PhotoEditorComponent(accountService, memberService) {
          var _this28 = this;

          _classCallCheck(this, PhotoEditorComponent);

          this.accountService = accountService;
          this.memberService = memberService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
            return _this28.user = user;
          });
        }

        _createClass(PhotoEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeUploader();
          }
        }, {
          key: "fileOverBase",
          value: function fileOverBase(e) {
            this.hasBaseDropZoneOver = e;
          }
        }, {
          key: "setMainPhoto",
          value: function setMainPhoto(photo) {
            var _this29 = this;

            this.memberService.setMainPhoto(photo.id).subscribe(function () {
              _this29.user.photoUrl = photo.url;

              _this29.accountService.setCurrentUser(_this29.user);

              _this29.member.photoUrl = photo.url;

              _this29.member.photos.forEach(function (p) {
                if (p.isMain) p.isMain = false;
                if (p.id === photo.id) p.isMain = true;
              });
            });
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photoId) {
            var _this30 = this;

            this.memberService.deletePhoto(photoId).subscribe(function () {
              _this30.member.photos = _this30.member.photos.filter(function (x) {
                return x.id !== photoId;
              });
            });
          }
        }, {
          key: "initializeUploader",
          value: function initializeUploader() {
            var _this31 = this;

            this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__["FileUploader"]({
              url: this.baseUrl + 'users/add-photo',
              authToken: 'Bearer ' + this.user.token,
              isHTML5: true,
              allowedFileType: ['image'],
              removeAfterUpload: true,
              autoUpload: false,
              maxFileSize: 10 * 1024 * 1024
            });

            this.uploader.onAfterAddingFile = function (file) {
              file.withCredentials = false;
            };

            this.uploader.onSuccessItem = function (item, response, status, headers) {
              if (response) {
                var photo = JSON.parse(response);

                _this31.member.photos.push(photo);

                if (photo.isMain) {
                  _this31.user.photoUrl = photo.url;
                  _this31.member.photoUrl = photo.url;

                  _this31.accountService.setCurrentUser(_this31.user);
                }
              }
            };
          }
        }]);

        return PhotoEditorComponent;
      }();

      PhotoEditorComponent.ɵfac = function PhotoEditorComponent_Factory(t) {
        return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__["MembersService"]));
      };

      PhotoEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: PhotoEditorComponent,
        selectors: [["app-photo-editor"]],
        inputs: {
          member: "member"
        },
        decls: 15,
        vars: 8,
        consts: [[1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bg-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "col-2"], [1, "img-thumbnail", "p-1", 3, "src", "alt"], ["class", "text-center img-text", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-1", "mb-2"], [1, "btn", "btn-sm", 3, "disabled", "ngClass", "click"], [1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "text-center", "img-text"], [1, "text-danger"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]],
        template: function PhotoEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PhotoEditorComponent_div_1_Template, 8, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Select files");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) {
              return ctx.fileOverBase($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Drop photos here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Multiple ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Single ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.member.photos);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_0__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
        styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  width: 100px !important;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over[_ngcontent-%COMP%] {\r\n  border: dotted 3px rgb(35, 209, 58);\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  color: transparent;\r\n}\r\n\r\n.not-approved[_ngcontent-%COMP%] {\r\n  opacity: 0.2;\r\n}\r\n\r\n.img-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.img-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InBob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy10aHVtYm5haWwge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubnYtZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggcmdiKDM1LCAyMDksIDU4KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5vdC1hcHByb3ZlZCB7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbi5pbWctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbWctdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "a8qC":
    /*!********************************************************!*\
      !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
      \********************************************************/

    /*! exports provided: MemberDetailedResolver */

    /***/
    function a8qC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberDetailedResolver", function () {
        return MemberDetailedResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/members.service */
      "YMan");

      var MemberDetailedResolver = /*#__PURE__*/function () {
        function MemberDetailedResolver(memberService) {
          _classCallCheck(this, MemberDetailedResolver);

          this.memberService = memberService;
        }

        _createClass(MemberDetailedResolver, [{
          key: "resolve",
          value: function resolve(route) {
            return this.memberService.getMember(route.paramMap.get('username'));
          }
        }]);

        return MemberDetailedResolver;
      }();

      MemberDetailedResolver.ɵfac = function MemberDetailedResolver_Factory(t) {
        return new (t || MemberDetailedResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"]));
      };

      MemberDetailedResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MemberDetailedResolver,
        factory: MemberDetailedResolver.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "hOav":
    /*!***********************************************************!*\
      !*** ./src/app/_forms/text-input/text-input.component.ts ***!
      \***********************************************************/

    /*! exports provided: TextInputComponent */

    /***/
    function hOav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
        return TextInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TextInputComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter a ", ctx_r0.label, " ");
        }
      }

      function TextInputComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.label, " must be at least ", ctx_r1.ngControl.control.errors.minlegth["requiredLength"], " ");
        }
      }

      function TextInputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.label, " must be at most ", ctx_r2.ngControl.control.errors.maxlength["requiredLength"], " ");
        }
      }

      function TextInputComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm password do not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TextInputComponent = /*#__PURE__*/function () {
        function TextInputComponent(ngControl) {
          _classCallCheck(this, TextInputComponent);

          this.ngControl = ngControl;
          this.type = 'text';
          this.ngControl.valueAccessor = this;
        }

        _createClass(TextInputComponent, [{
          key: "writeValue",
          value: function writeValue(obj) {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {}
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }]);

        return TextInputComponent;
      }();

      TextInputComponent.ɵfac = function TextInputComponent_Factory(t) {
        return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 2));
      };

      TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextInputComponent,
        selectors: [["app-text-input"]],
        inputs: {
          label: "label",
          type: "type"
        },
        decls: 6,
        vars: 9,
        consts: [[1, "form-group"], [1, "form-control", 3, "type", "formControl", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]],
        template: function TextInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextInputComponent_div_3_Template, 2, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextInputComponent_div_4_Template, 2, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_div_5_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.ngControl.touched && ctx.ngControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ngControl.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.isMatching);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWlucHV0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "hnRM":
    /*!******************************************!*\
      !*** ./src/app/lists/lists.component.ts ***!
      \******************************************/

    /*! exports provided: ListsComponent */

    /***/
    function hnRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsComponent", function () {
        return ListsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/members.service */
      "YMan");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "s3T5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../members/member-card/member-card.component */
      "kntC");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "Lm2G");

      function ListsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("member", member_r2);
        }
      }

      function ListsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListsComponent_div_12_Template_pagination_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.pagination.currentPage = $event;
          })("pageChanged", function ListsComponent_div_12_Template_pagination_pageChanged_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r1.pagination.totalItems)("itemsPerPage", ctx_r1.pagination.itemsPerPage)("ngModel", ctx_r1.pagination.currentPage);
        }
      }

      var ListsComponent = /*#__PURE__*/function () {
        function ListsComponent(memberService) {
          _classCallCheck(this, ListsComponent);

          this.memberService = memberService;
          this.predicate = 'liked';
          this.pageNumber = 1;
          this.pageSize = 5;
        }

        _createClass(ListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadLikes();
          }
        }, {
          key: "loadLikes",
          value: function loadLikes() {
            var _this32 = this;

            this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(function (response) {
              _this32.members = response.result;
              _this32.pagination = response.pagination;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pageNumber = event.page;
            this.loadLikes();
          }
        }]);

        return ListsComponent;
      }();

      ListsComponent.ɵfac = function ListsComponent_Factory(t) {
        return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"]));
      };

      ListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListsComponent,
        selectors: [["app-lists"]],
        decls: 13,
        vars: 5,
        consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], ["name", "predicate", 1, "btn-group"], ["btnRadio", "liked", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "likedBy", 1, "btn", "btn-warning", 3, "ngModel", "ngModelChange", "click"], [1, "row", "mt-3"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "col-2"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]],
        template: function ListsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) {
              return ctx.predicate = $event;
            })("click", function ListsComponent_Template_button_click_6_listener() {
              return ctx.loadLikes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Members I like ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) {
              return ctx.predicate = $event;
            })("click", function ListsComponent_Template_button_click_8_listener() {
              return ctx.loadLikes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Members who like me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListsComponent_div_11_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListsComponent_div_12_Template, 2, 4, "div", 8);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.predicate === "liked" ? "Members I likes" : "Members who like me", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.predicate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.predicate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination);
          }
        },
        directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_5__["MemberCardComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "izVM":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function izVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_directives/has-role.directive */
      "8T1h");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function NavComponent_ng_container_5_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["Admin", "Moderator"];
      };

      function NavComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Matches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_ng_container_5_li_10_Template, 3, 0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function NavComponent_div_10_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_10_div_5_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_div_10_div_5_Template, 6, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r4.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r4.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, user_r4.knownAs || user_r4.username), " ");
        }
      }

      function NavComponent_form_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavComponent_form_12_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_12_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.model.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_12_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.model.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.model.password);
        }
      }

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(accountService, router, toastr) {
          _classCallCheck(this, NavComponent);

          this.accountService = accountService;
          this.router = router;
          this.toastr = toastr;
          this.model = {};
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this33 = this;

            this.accountService.login(this.model).subscribe(function (response) {
              _this33.router.navigateByUrl('/members');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.logout();
            this.router.navigateByUrl('/');
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 14,
        vars: 9,
        consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-primary"], [1, "container"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto"], [4, "ngIf"], [1, "nav-item"], ["routerLink", "/errors", "routerLinkActive", "active", 1, "nav-link"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["class", "form-inline mt-2 mt-md-0", "autocomplete", "off", 3, "ngSubmit", 4, "ngIf"], ["routerLink", "/members", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/lists", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/messages", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", 4, "appHasRole"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["dropdown", "", 1, "dropdown"], [3, "src", "alt"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light", "ml-2"], ["class", "dropdown-menu mt-3", 4, "dropdownMenu"], [1, "dropdown-menu", "mt-3"], ["routerLink", "/member/edit", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], ["autocomplete", "off", 1, "form-inline", "mt-2", "mt-md-0", 3, "ngSubmit"], ["loginForm", "ngForm"], ["name", "username", "type", "text", "placeholder", "Username", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "Password", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "my-2", "my-sm-0"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dating App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_ng_container_5_Template, 11, 2, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Errors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_div_10_Template, 6, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_form_12_Template, 6, 2, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.accountService.currentUser$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.accountService.currentUser$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.accountService.currentUser$) === null);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_5__["HasRoleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
        styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 40px;\r\n  border: 1px solid whitesmoke;\r\n  display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlLFxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "kntC":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-card/member-card.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberCardComponent */

    /***/
    function kntC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function () {
        return MemberCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/presence.service */
      "mV+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return {
          tab: 3
        };
      };

      var MemberCardComponent = /*#__PURE__*/function () {
        function MemberCardComponent(memberService, toastr, presence) {
          _classCallCheck(this, MemberCardComponent);

          this.memberService = memberService;
          this.toastr = toastr;
          this.presence = presence;
        }

        _createClass(MemberCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addLike",
          value: function addLike(member) {
            var _this34 = this;

            this.memberService.addLike(member.username).subscribe(function () {
              _this34.toastr.success("You have liked ".concat(member.knownAs));
            });
          }
        }]);

        return MemberCardComponent;
      }();

      MemberCardComponent.ɵfac = function MemberCardComponent_Factory(t) {
        return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__["PresenceService"]));
      };

      MemberCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MemberCardComponent,
        selectors: [["app-member-card"]],
        inputs: {
          member: "member"
        },
        decls: 21,
        vars: 13,
        consts: [[1, "card", "mb-4"], [1, "card-img-wrapper"], [1, "card-img-top", 3, "src", "alt"], [1, "list-inline", "member-icons", "animate", "text-center"], [1, "list-inline-item"], [1, "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], [1, "btn-primary", 3, "click"], [1, "fa", "fa-heart"], [1, "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "fa", "fa-user", "mr-2"], [1, "card-text", "text-muted", "text-center"]],
        template: function MemberCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberCardComponent_Template_button_click_8_listener() {
              return ctx.addLike(ctx.member);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.member.knownAs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-online", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx.presence.onlineUsers$).includes(ctx.member.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.member.knownAs, ", ", ctx.member.age, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.member.city);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.2, 1.2);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n  opacity: 0.8;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transform: scale(1, 1);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.member-icons[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: -10%;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  opacity: 0;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.animate[_ngcontent-%COMP%] {\r\n  transition: all 0.35s ease-in-out;\r\n}\r\n\r\n@keyframes fa-blink {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0.4;\r\n  }\r\n}\r\n\r\n.is-online[_ngcontent-%COMP%] {\r\n  animation: fa-blink 1.5s linear infinite;\r\n  color: rgb(1, 189, 42);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJtZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZW1iZXItaWNvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbWJlci1pY29ucyB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmEtYmxpbmsge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxufVxyXG5cclxuLmlzLW9ubGluZSB7XHJcbiAgYW5pbWF0aW9uOiBmYS1ibGluayAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBjb2xvcjogcmdiKDEsIDE4OSwgNDIpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "mV+E":
    /*!***********************************************!*\
      !*** ./src/app/_services/presence.service.ts ***!
      \***********************************************/

    /*! exports provided: PresenceService */

    /***/
    function mVE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresenceService", function () {
        return PresenceService;
      });
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PresenceService = /*#__PURE__*/function () {
        function PresenceService(toastr, router) {
          _classCallCheck(this, PresenceService);

          this.toastr = toastr;
          this.router = router;
          this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hubUrl;
          this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.onlineUsers$ = this.onlineUsersSource.asObservable();
        }

        _createClass(PresenceService, [{
          key: "createHubConnection",
          value: function createHubConnection(user) {
            var _this35 = this;

            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]().withUrl(this.hubUrl + 'presence', {
              accessTokenFactory: function accessTokenFactory() {
                return user.token;
              }
            }).withAutomaticReconnect().build();
            this.hubConnection.start()["catch"](function (error) {
              return console.log(error);
            });
            this.hubConnection.on('UserIsOnline', function (username) {
              _this35.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (usernames) {
                _this35.onlineUsersSource.next([].concat(_toConsumableArray(usernames), [username]));
              });
            });
            this.hubConnection.on('UserIsOffline', function (username) {
              _this35.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (usernames) {
                _this35.onlineUsersSource.next(_toConsumableArray(usernames.filter(function (x) {
                  return x !== username;
                })));
              });
            });
            this.hubConnection.on('GetOnlineUsers', function (usernames) {
              _this35.onlineUsersSource.next(usernames);
            });
            this.hubConnection.on('NewMessageReceived', function (_ref) {
              var username = _ref.username,
                  knownAs = _ref.knownAs;

              _this35.toastr.info(knownAs + ' has sent you a new message!').onTap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                return _this35.router.navigateByUrl('/members/' + username + '?tab=3');
              });
            });
          }
        }, {
          key: "stopHubConnection",
          value: function stopHubConnection() {
            this.hubConnection.stop()["catch"](function (error) {
              return console.log(error);
            });
          }
        }]);

        return PresenceService;
      }();

      PresenceService.ɵfac = function PresenceService_Factory(t) {
        return new (t || PresenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      PresenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: PresenceService,
        factory: PresenceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "nXO7":
    /*!***************************************!*\
      !*** ./src/app/_models/userParams.ts ***!
      \***************************************/

    /*! exports provided: UserParams */

    /***/
    function nXO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserParams", function () {
        return UserParams;
      });

      var UserParams = function UserParams(user) {
        _classCallCheck(this, UserParams);

        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.orderBy = 'lastActive';
        this.gender = user.gender === 'female' ? 'male' : 'female';
      };
      /***/

    },

    /***/
    "qPLm":
    /*!************************************************************!*\
      !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
      \************************************************************/

    /*! exports provided: AdminPanelComponent */

    /***/
    function qPLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
        return AdminPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_directives/has-role.directive */
      "8T1h");
      /* harmony import */


      var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-management/user-management.component */
      "OcPW");
      /* harmony import */


      var _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../photo-management/photo-management.component */
      "4+ph");

      function AdminPanelComponent_tab_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-user-management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminPanelComponent_tab_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-photo-management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["Admin"];
      };

      var _c1 = function _c1() {
        return ["Admin", "Moderator"];
      };

      var AdminPanelComponent = /*#__PURE__*/function () {
        function AdminPanelComponent() {
          _classCallCheck(this, AdminPanelComponent);
        }

        _createClass(AdminPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminPanelComponent;
      }();

      AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) {
        return new (t || AdminPanelComponent)();
      };

      AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminPanelComponent,
        selectors: [["app-admin-panel"]],
        decls: 6,
        vars: 4,
        consts: [[1, "tab-panel"], [1, "member-tabset"], ["heading", "User management", 4, "appHasRole"], ["heading", "Photo management", 4, "appHasRole"], ["heading", "User management"], [1, "container"], ["heading", "Photo management"]],
        template: function AdminPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tabset", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminPanelComponent_tab_4_Template, 3, 0, "tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminPanelComponent_tab_5_Template, 3, 0, "tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
          }
        },
        directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabsetComponent"], _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_2__["HasRoleDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabDirective"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"], _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_4__["PhotoManagementComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "u2he":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-edit/member-edit.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberEditComponent */

    /***/
    function u2he(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
        return MemberEditComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../photo-editor/photo-editor.component */
      "Zkt1");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");

      var _c0 = ["editForm"];

      function MemberEditComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Information:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " You have made changes. Any unsaved changes will be lost ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MemberEditComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MemberEditComponent_div_0_div_5_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Last Activate:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Member since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tabset", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "form", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MemberEditComponent_div_0_Template_form_ngSubmit_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.updateMember();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Desctription");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.member.introduction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Looking for");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.member.lookingFor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.member.interests = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Location Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " City: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.member.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Country: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.member.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tab", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "app-photo-editor", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.photoUrl || "./assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.member.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.member.city, ", ", ctx_r0.member.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.member.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 16, ctx_r0.member.lastActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](31, 18, ctx_r0.member.created, "dd MMM yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r2.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx_r0.member.knownAs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.member.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.member.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.member.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.member.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.member.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("member", ctx_r0.member);
        }
      }

      var MemberEditComponent = /*#__PURE__*/function () {
        function MemberEditComponent(accountService, memberService, toastr) {
          var _this36 = this;

          _classCallCheck(this, MemberEditComponent);

          this.accountService = accountService;
          this.memberService = memberService;
          this.toastr = toastr;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (user) {
            return _this36.user = user;
          });
        }

        _createClass(MemberEditComponent, [{
          key: "unloadNotification",
          value: function unloadNotification($event) {
            if (this.editForm.dirty) {
              $event.returnValue = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMember();
          }
        }, {
          key: "loadMember",
          value: function loadMember() {
            var _this37 = this;

            this.memberService.getMember(this.user.username).subscribe(function (member) {
              return _this37.member = member;
            });
          }
        }, {
          key: "updateMember",
          value: function updateMember() {
            var _this38 = this;

            this.memberService.updateMember(this.member).subscribe(function () {
              _this38.toastr.success('Profile updated successfully');

              _this38.editForm.reset(_this38.member);
            });
          }
        }]);

        return MemberEditComponent;
      }();

      MemberEditComponent.ɵfac = function MemberEditComponent_Factory(t) {
        return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
      };

      MemberEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MemberEditComponent,
        selectors: [["app-member-edit"]],
        viewQuery: function MemberEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
          }
        },
        hostBindings: function MemberEditComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) {
              return ctx.unloadNotification($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 1,
        vars: 1,
        consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "col-8"], ["class", "alert alert-info", 4, "ngIf"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], ["form", "editForm", "type", "submit", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "member-tabset"], [3, "heading"], ["id", "editForm", 3, "ngSubmit"], ["editForm", "ngForm"], ["name", "introduction", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-2"], ["name", "lookingFor", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "interests", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-inline"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "name", "country", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "member"], [1, "alert", "alert-info"]],
        template: function MemberEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MemberEditComponent_div_0_Template, 60, 21, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.member);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__["PhotoEditorComponent"]],
        pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n  margin: 25px;\r\n  width: 85%;\r\n  height: 85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n  border-top: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "uFUS":
    /*!***********************************************!*\
      !*** ./src/app/_services/paginationHelper.ts ***!
      \***********************************************/

    /*! exports provided: getPaginatedResult, getPaginationHeaders */

    /***/
    function uFUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPaginatedResult", function () {
        return getPaginatedResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPaginationHeaders", function () {
        return getPaginationHeaders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_models/pagination */
      "Au4E");

      function getPaginatedResult(url, params, http) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatedResult"]();
        return http.get(url, {
          observe: 'response',
          params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
          paginatedResult.result = response.body;

          if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }

          return paginatedResult;
        }));
      }

      function getPaginationHeaders(pageNumber, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return params;
      }
      /***/

    },

    /***/
    "v9I1":
    /*!**********************************************************!*\
      !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
      \**********************************************************/

    /*! exports provided: PreventUnsavedChangesGuard */

    /***/
    function v9I1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function () {
        return PreventUnsavedChangesGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/confirm.service */
      "xuvy");

      var PreventUnsavedChangesGuard = /*#__PURE__*/function () {
        function PreventUnsavedChangesGuard(confirmService) {
          _classCallCheck(this, PreventUnsavedChangesGuard);

          this.confirmService = confirmService;
        }

        _createClass(PreventUnsavedChangesGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            if (component.editForm.dirty) {
              return this.confirmService.confirm();
            }

            return true;
          }
        }]);

        return PreventUnsavedChangesGuard;
      }();

      PreventUnsavedChangesGuard.ɵfac = function PreventUnsavedChangesGuard_Factory(t) {
        return new (t || PreventUnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_confirm_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmService"]));
      };

      PreventUnsavedChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PreventUnsavedChangesGuard,
        factory: PreventUnsavedChangesGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vMgs":
    /*!*******************************************************************!*\
      !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function vMgs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(bsModalRef) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "confirm",
          value: function confirm() {
            this.result = true;
            this.bsModalRef.hide();
          }
        }, {
          key: "decline",
          value: function decline() {
            this.result = false;
            this.bsModalRef.hide();
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 11,
        vars: 4,
        consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
              return ctx.decline();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnOkText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnCancelText, " ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin/admin-panel/admin-panel.component */
      "qPLm");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");
      /* harmony import */


      var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./errors/server-error/server-error.component */
      "81j5");
      /* harmony import */


      var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./errors/test-errors/test-errors.component */
      "/Lly");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lists/lists.component */
      "hnRM");
      /* harmony import */


      var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./members/member-detail/member-detail.component */
      "PL33");
      /* harmony import */


      var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./members/member-edit/member-edit.component */
      "u2he");
      /* harmony import */


      var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./members/member-list/member-list.component */
      "Rv1c");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");
      /* harmony import */


      var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./_guards/admin.guard */
      "NWYD");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./_guards/auth.guard */
      "PSoG");
      /* harmony import */


      var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./_guards/prevent-unsaved-changes.guard */
      "v9I1");
      /* harmony import */


      var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./_resolvers/member-detailed.resolver */
      "a8qC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        children: [{
          path: 'members',
          component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__["MemberListComponent"]
        }, {
          path: 'members/:username',
          component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__["MemberDetailComponent"],
          resolve: {
            member: _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__["MemberDetailedResolver"]
          }
        }, {
          path: 'member/edit',
          component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"],
          canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__["PreventUnsavedChangesGuard"]]
        }, {
          path: 'lists',
          component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__["ListsComponent"]
        }, {
          path: 'messages',
          component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"]
        }, {
          path: 'admin',
          component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_1__["AdminPanelComponent"],
          canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }]
      }, {
        path: 'errors',
        component: _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_4__["TestErrorsComponent"]
      }, {
        path: 'not-found',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
      }, {
        path: 'server-error',
        component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
      }, {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xuvy":
    /*!**********************************************!*\
      !*** ./src/app/_services/confirm.service.ts ***!
      \**********************************************/

    /*! exports provided: ConfirmService */

    /***/
    function xuvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmService", function () {
        return ConfirmService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modals/confirm-dialog/confirm-dialog.component */
      "vMgs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var ConfirmService = /*#__PURE__*/function () {
        function ConfirmService(modalService) {
          _classCallCheck(this, ConfirmService);

          this.modalService = modalService;
        }

        _createClass(ConfirmService, [{
          key: "confirm",
          value: function confirm() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Confirmation';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you sure you want to do this?';
            var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Ok';
            var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Cancel';
            var config = {
              initialState: {
                title: title,
                message: message,
                btnOkText: btnOkText,
                btnCancelText: btnCancelText
              }
            };
            this.bsModal = this.modalService.show(_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], config);
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](this.getResult());
          }
        }, {
          key: "getResult",
          value: function getResult() {
            var _this39 = this;

            return function (observer) {
              var subscription = _this39.bsModal.onHidden.subscribe(function () {
                observer.next(_this39.bsModal.content.result);
                observer.complete();
              });

              return {
                unsubscribe: function unsubscribe() {
                  subscription.unsubscribe();
                }
              };
            };
          }
        }]);

        return ConfirmService;
      }();

      ConfirmService.ɵfac = function ConfirmService_Factory(t) {
        return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]));
      };

      ConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ConfirmService,
        factory: ConfirmService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "yNbP":
    /*!*************************************************************!*\
      !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
      \*************************************************************/

    /*! exports provided: RolesModalComponent */

    /***/
    function yNbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function () {
        return RolesModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RolesModalComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolesModalComponent_div_9_Template_input_change_1_listener() {
            var role_r2 = ctx.$implicit;
            return role_r2.checked = !role_r2.checked;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", role_r2.checked)("disabled", ctx_r1.roles.name === "Admin" && ctx_r1.user.username === "admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r2.name, " ");
        }
      }

      var RolesModalComponent = /*#__PURE__*/function () {
        function RolesModalComponent(bsModalRef) {
          _classCallCheck(this, RolesModalComponent);

          this.bsModalRef = bsModalRef;
          this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(RolesModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateRoles",
          value: function updateRoles() {
            this.updateSelectedRoles.emit(this.roles);
            this.bsModalRef.hide();
          }
        }]);

        return RolesModalComponent;
      }();

      RolesModalComponent.ɵfac = function RolesModalComponent_Factory(t) {
        return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
      };

      RolesModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RolesModalComponent,
        selectors: [["app-roles-modal"]],
        inputs: {
          updateSelectedRoles: "updateSelectedRoles"
        },
        decls: 15,
        vars: 2,
        consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "role.name", 1, "form-check-input", 3, "checked", "disabled", "change"]],
        template: function RolesModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_3_listener() {
              return ctx.bsModalRef.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RolesModalComponent_div_9_Template, 4, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_11_listener() {
              return ctx.bsModalRef.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_13_listener() {
              return ctx.updateRoles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit Roles for ", ctx.user.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map