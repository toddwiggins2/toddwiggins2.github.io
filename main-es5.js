function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _diceroller_diceroller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./diceroller/diceroller.component */
    "./src/app/diceroller/diceroller.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");

    var routes = [// { path: '', component: AppComponent},
    {
      path: '',
      redirectTo: '/diceroller',
      pathMatch: 'full'
    }, {
      path: 'diceroller',
      component: _diceroller_diceroller_component__WEBPACK_IMPORTED_MODULE_2__["DicerollerComponent"]
    }, {
      path: 'info',
      component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navagationbar_navagationbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navagationbar/navagationbar.component */
    "./src/app/navagationbar/navagationbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Dungens & Dragons Dice Roller';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navagationbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navagationbar_navagationbar_component__WEBPACK_IMPORTED_MODULE_1__["NavagationbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxDaHJvbm9cXERlc2t0b3BcXGNvZGVcXGRuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFlRSxvQkFBQTtBQUNGOzs7RUFBQTtBQVVBOzs7Ozs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcGxpY2F0aW9uLXdpZGUgU3R5bGVzICovXHJcbi8qIGgxIHtcclxuICAgIGNvbG9yOiAjMzY5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgfVxyXG4gIGgyLCBoMyB7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgMTQ1LCAyMCk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuXHJcbiAgYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG4gIH0gKi9cclxuICAvKiBldmVyeXdoZXJlIGVsc2UgKi9cclxuLyogICAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICovXHJcbi8vICBib2R5IHtcclxuLy8gICBwYWRkaW5nOiAyMCU7XHJcbi8vICAgbWFyZ2luOiAyZW07XHJcbi8vIH1cclxuXHJcblxyXG4vKiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogYXV0bztcclxuICAvLyBwYWRkaW5nOiAyMCU7XHJcbiAgLy9sZWZ0OiAxMCU7XHJcbiAgLy9yaWdodDogMTAlO1xyXG59ICovXHJcblxyXG4vLyAubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _diceroller_diceroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./diceroller/diceroller.component */
    "./src/app/diceroller/diceroller.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _navagationbar_navagationbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navagationbar/navagationbar.component */
    "./src/app/navagationbar/navagationbar.component.ts"); // <-- NgModel lives here
    // import {FormControl} from '@angular/forms';
    // import { MatButtonModule } from '@angular/material/button';
    // import {MatSelectModule} from '@angular/material/select';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], // MatButtonModule,
      // MatSelectModule,
      _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _diceroller_diceroller_component__WEBPACK_IMPORTED_MODULE_5__["DicerollerComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"], _navagationbar_navagationbar_component__WEBPACK_IMPORTED_MODULE_11__["NavagationbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], // MatButtonModule,
        // MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _diceroller_diceroller_component__WEBPACK_IMPORTED_MODULE_5__["DicerollerComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"], _navagationbar_navagationbar_component__WEBPACK_IMPORTED_MODULE_11__["NavagationbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], // MatButtonModule,
          // MatSelectModule,
          _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"]],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'fill'
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/diceroller/diceroller.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/diceroller/diceroller.component.ts ***!
    \****************************************************/

  /*! exports provided: DicerollerComponent */

  /***/
  function srcAppDicerollerDicerollerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DicerollerComponent", function () {
      return DicerollerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DicerollerComponent_mat_header_cell_132_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_133_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_mat_cell_133_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var row_r36 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.onDel(row_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_footer_cell_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_137_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.ID, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_138_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First D20 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.FirstD20, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_144_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Second D20 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_145_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r41.SecondD20, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_146_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Final D20 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "First D20: ", element_r42.FirstD20, " Second D20: ", element_r42.SecondD20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r42.FinalD20, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_150_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_152_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Damage Die ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", element_r43.allDiceObjects);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r43.damageDie, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_154_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. of Attacks ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_157_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r44.numberofAttacks, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_158_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_160_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Damage Bonus ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_161_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r45.damageBonus, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_162_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_164_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Plus to Hit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_165_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r46.plusToHit, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_166_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_168_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Hit Value ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DicerollerComponent_mat_cell_169_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("title", "Bless: ", element_r47.bless, " - Bane: ", element_r47.bane, " - Original Total Hit: ", element_r47.totalPlustoHit, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r47.totalPlustoHit + element_r47.bless - element_r47.bane, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_170_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-cell");
      }
    }

    function DicerollerComponent_mat_header_cell_172_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Damage Total ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        crit: a0,
        miss: a1
      };
    };

    function DicerollerComponent_mat_cell_173_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, element_r48.FinalD20 === 20, element_r48.FinalD20 === 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.damageTotal, " ");
      }
    }

    function DicerollerComponent_mat_footer_cell_174_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-footer-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.getTotalDamage(), " ");
      }
    }

    function DicerollerComponent_mat_header_row_175_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function DicerollerComponent_mat_row_176_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    function DicerollerComponent_mat_footer_row_177_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-footer-row");
      }
    }

    var DICE_ARRAY = [{
      ID: 1,
      FirstD20: 10,
      SecondD20: 20,
      FinalD20: 20,
      damageDie: 6,
      numberofAttacks: 3,
      damageBonus: 5,
      plusToHit: 8,
      totalPlustoHit: 5,
      damageTotal: 0,
      bless: 0,
      bane: 0,
      allDiceObjects: '0'
    }];

    var DicerollerComponent = /*#__PURE__*/function () {
      function DicerollerComponent() {
        var _this = this;

        _classCallCheck(this, DicerollerComponent);

        // DataSource interface for Frontend Table:
        this.displayedColumns = ['ID', // 'First D20',
        // 'Second D20',
        'Final D20', 'Damage Die', // 'Number of Attacks',
        'Damage Bonus', 'Plus to Hit', 'Total Plus to Hit', 'Damage Total', 'Delete'];
        this.dataSource = DICE_ARRAY; // Slide out Nav Bar

        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('side'); // On keypress variable (not needed)

        this.values = 4; // Basic Variables for Damage rolls:

        this.bonusHitValueHTML = 9;
        this.bonusDamageValueHTML = 6;
        this.numberofAttacksHTML = 4;
        this.totalAllDamage = 0;
        this.dieNumberHTML = 1;
        this.dieTypeHTML = 6; // Bonus Rage Damage for Barb:

        this.bonusRageDamageValueHTML = 2; // Extra Factors for rolling to Hit (Buffs and DeBuffs)

        this.checkBless = false;
        this.checkBane = false;
        this.arrayOfDamageDie = [];

        this.onDel = function (row) {
          // this.dataSource3.pop();
          var index = _this.dataSource.indexOf(row, 0);

          if (index > -1) {
            _this.dataSource.splice(index, 1);
          }

          _this.dataSource = _toConsumableArray(_this.dataSource);
          _this.totalAllDamage = _this.getTotalDamage();
        };

        this.multipleAttacks('advantage');
      }

      _createClass(DicerollerComponent, [{
        key: "onKey",
        value: function onKey(value) {
          this.values += value; // + ' | ';
        }
      }, {
        key: "getTotalDamage",
        value: function getTotalDamage() {
          return this.dataSource.map(function (t) {
            return t.damageTotal;
          }).reduce(function (acc, value) {
            return acc + value;
          }, 0);
        } // *********************************
        // **       Test Button **
        // *********************************

      }, {
        key: "testButton",
        value: function testButton() {
          var baneValue = this.checkBane ? Math.floor(Math.random() * 4) + 1 : 0;
          var blessValue = this.checkBless ? Math.floor(Math.random() * 4) + 1 : 0;
          console.log("Bane: ".concat(baneValue, " Bless: ").concat(blessValue));
        } // *********************************
        // ** Roll D20 Die with Advantage **
        // *********************************

      }, {
        key: "getRoll20Advantage",
        value: function getRoll20Advantage(rollWith) {
          var firstRoll = 0;
          var secondRoll = 0;
          var finalRoll = 0;
          var returnString;
          firstRoll = Math.floor(Math.random() * 20) + 1;
          secondRoll = Math.floor(Math.random() * 20) + 1; // Roll with Advantage

          if (rollWith === 'advantage') {
            if (firstRoll >= secondRoll) {
              finalRoll = firstRoll;
            } else {
              finalRoll = secondRoll;
            } // console.log('D20 First Roll ' + firstRoll + '\n' + 'D20 Second Roll ' + secondRoll + '\n' + finalRoll);


            returnString = "Final Roll: ".concat(finalRoll, " --- First Dice: ").concat(firstRoll, " Second Dice: ").concat(secondRoll);
            this.valueD20Advantage = returnString; // this.d20advantageNumber = [firstRoll, secondRoll, finalRoll];

            return [firstRoll, secondRoll, finalRoll]; // return returnString;
          } // Roll Regular (one die)
          else if (rollWith === 'notAdvantage') {
              // console.log(
              //   `first roll: ${firstRoll} second roll: 0 final roll: ${firstRoll}`
              // );
              this.valueD20 = firstRoll;
              return [firstRoll, 0, firstRoll];
            } // Roll with Disadvantage
            else if (rollWith === 'disAdvantage') {
                if (firstRoll <= secondRoll) {
                  finalRoll = firstRoll;
                } else {
                  finalRoll = secondRoll;
                } // console.log(
                //   `first roll: ${firstRoll} second roll: 0 final roll: ${firstRoll}`
                // );
                // this.valueD20 = finalRoll;


                return [firstRoll, secondRoll, finalRoll];
              }
        } // ***************************
        // ** Method for Normal D20 **
        // ***************************

      }, {
        key: "getRoll20",
        value: function getRoll20() {
          var finalRoll = 0;
          finalRoll = Math.floor(Math.random() * 20) + 1; // console.log('D20 Final Roll ' + finalRoll);

          this.valueD20 = finalRoll;
          return finalRoll;
        } // ***********************************
        // ** Method for Rolling Damage Die **
        // ***********************************

      }, {
        key: "getDamage",
        value: function getDamage()
        /* numberOfDie, dieType */
        {
          var numberOfDie = this.dieNumberHTML;
          var dieType = this.dieTypeHTML;
          var rValueDamage = 0;
          var finalrValue = 0;
          this.arrayOfDamageDie.length = 0;

          for (var index = 0; index < Number(numberOfDie); index++) {
            // console.log('Final Value Loop: ' + finalrValue);
            rValueDamage = Math.floor(Math.random() * dieType) + 1;
            finalrValue = finalrValue + rValueDamage;
            this.arrayOfDamageDie[this.arrayOfDamageDie.length] = " Die ".concat(index + 1, ": ").concat(rValueDamage); // + ' ' + rValueDamage;
            // console.log('Die Roll: ' + rValueDamage);
            // console.log('Final Value Loop: ' + finalrValue);
          }

          this.returnDamagePlusMod = finalrValue + this.bonusDamageValueHTML + this.bonusRageDamageValueHTML;
          console.log('test array from getDamage function: ' + this.arrayOfDamageDie); // console.log(numberOfDie + 'd' + dieType + ' Result: ' + finalrValue);

          return finalrValue;
        } // *********************************
        // ** Method for Multiple Attacks **
        // *********************************

      }, {
        key: "multipleAttacks",
        value: function multipleAttacks(rollsWith) {
          // this.getRoll20Advantage();
          while (this.dataSource.length > 0) {
            // this.d20Array.pop();
            this.dataSource.pop();
          }

          var diceTotal = 0;
          this.totalAllDamage = 0;

          for (var index = 0; index < this.numberofAttacksHTML; index++) {
            // Get just Dice roll for Damage:
            var firstDice = this.getDamage(); // Roll a d20 with adv. and store three values:

            if (rollsWith === 'advantage') {
              // tslint:disable-next-line: no-var-keyword
              var _this$getRoll20Advant = this.getRoll20Advantage('advantage'),
                  _this$getRoll20Advant2 = _slicedToArray(_this$getRoll20Advant, 3),
                  resultFirstD20 = _this$getRoll20Advant2[0],
                  resultSecondD20 = _this$getRoll20Advant2[1],
                  resultFinalD20 = _this$getRoll20Advant2[2]; // this.d20advantageNumber;

            } else if (rollsWith === 'notAdvantage') {
              // tslint:disable-next-line: no-var-keyword
              var _this$getRoll20Advant3 = this.getRoll20Advantage('notAdvantage'),
                  _this$getRoll20Advant4 = _slicedToArray(_this$getRoll20Advant3, 3),
                  resultFirstD20 = _this$getRoll20Advant4[0],
                  resultSecondD20 = _this$getRoll20Advant4[1],
                  resultFinalD20 = _this$getRoll20Advant4[2]; // this.d20advantageNumber;

            } else if (rollsWith === 'disAdvantage') {
              // tslint:disable-next-line: no-var-keyword
              var _this$getRoll20Advant5 = this.getRoll20Advantage('disAdvantage'),
                  _this$getRoll20Advant6 = _slicedToArray(_this$getRoll20Advant5, 3),
                  // tslint:disable-next-line: prefer-const
              resultFirstD20 = _this$getRoll20Advant6[0],
                  // tslint:disable-next-line: prefer-const
              resultSecondD20 = _this$getRoll20Advant6[1],
                  // tslint:disable-next-line: prefer-const
              resultFinalD20 = _this$getRoll20Advant6[2]; // this.d20advantageNumber;

            }

            if (resultFinalD20 === 20) {
              // Natural 20 Crit:
              var secondDice = this.getDamage();
              diceTotal = firstDice + secondDice + this.bonusDamageValueHTML + this.bonusRageDamageValueHTML; // console.log('Dice Total test: First Dice ' + firstDice + 'Second Dice: ' + secondDice +
              // 'Total: ' + diceTotal);
            } else if (resultFinalD20 === 1) {
              // Natural Miss:
              diceTotal = 0; // console.log('Natural 1: ' + diceTotal);
            } else {
              // Normal Dice Roll no Miss or Crit:
              diceTotal = firstDice + this.bonusDamageValueHTML + this.bonusRageDamageValueHTML;
            } // Bless and Bane Values


            var baneValue = this.checkBane ? Math.floor(Math.random() * 4) + 1 : 0;
            var blessValue = this.checkBless ? Math.floor(Math.random() * 4) + 1 : 0; // Variable of Damage Output:

            var newItem = {
              ID: index,
              FirstD20: resultFirstD20,
              SecondD20: resultSecondD20,
              FinalD20: resultFinalD20,
              damageDie: firstDice,
              numberofAttacks: this.numberofAttacksHTML,
              damageBonus: this.bonusDamageValueHTML,
              plusToHit: this.bonusHitValueHTML,
              totalPlustoHit: resultFinalD20 + this.bonusHitValueHTML,
              damageTotal: diceTotal,
              bless: blessValue,
              bane: baneValue,
              allDiceObjects: this.arrayOfDamageDie.join(', ')
            }; // Push new Values into Interface and update Datasource.

            this.dataSource.push(newItem);
            this.dataSource = _toConsumableArray(this.dataSource); // All of the Damage from every Loop:

            this.totalAllDamage = this.totalAllDamage + diceTotal;
          }

          console.log(this.dataSource); // console.log('All Damage: ' + this.totalAllDamage);
          // console.log(d20Array.FirstD20);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DicerollerComponent;
    }();

    DicerollerComponent.ɵfac = function DicerollerComponent_Factory(t) {
      return new (t || DicerollerComponent)();
    };

    DicerollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DicerollerComponent,
      selectors: [["app-diceroller"]],
      decls: 210,
      vars: 61,
      consts: [[1, "wrapper"], [1, "left-data"], [2, "padding-bottom", "0"], [3, "value", "valueChange"], [3, "value"], [2, "display", "flex"], [2, "padding-right", "1rem"], ["type", "number", "min", "1", "matInput", "", 3, "ngModel", "ngModelChange"], [2, "margin-top", ".5rem"], [3, "ngModel", "ngModelChange"], [1, "center-data"], [1, "center"], [1, "centerIMG"], ["src", "../../assets/heroimage.jpg", "align", "middle"], [3, "dataSource"], ["matColumnDef", "Delete"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "ID"], ["matColumnDef", "First D20"], ["matColumnDef", "Second D20"], ["matColumnDef", "Final D20"], [3, "title", 4, "matCellDef"], ["matColumnDef", "Damage Die"], ["matColumnDef", "Number of Attacks"], ["matColumnDef", "Damage Bonus"], ["matColumnDef", "Plus to Hit"], ["matColumnDef", "Total Plus to Hit"], ["matColumnDef", "Damage Total"], [3, "ngClass", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "matFooterRowDef", "matFooterRowDefSticky"], [1, "center", 2, "text-align", "center", "background-color", "#5E548E", "margin-top", ".5rem", "margin-bottom", "0rem"], [2, "margin-bottom", "0"], [1, "right-data"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", 2, "margin", "0.5rem", "margin-left", "0", "width", "-webkit-fill-available", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", 2, "margin", "0.5rem", "margin-right", "0", "width", "-webkit-fill-available", 3, "click"], ["mat-raised-button", "", "color", "warn", "type", "button", 2, "margin", "0.5rem", "margin-left", "0", "margin-right", "0", "width", "-webkit-fill-available", 3, "click"], [2, "text-align", "center", "background-color", "#5E548E", "margin-top", ".5rem", "margin-bottom", "0rem", "border-radius", "4px"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [3, "title"], [3, "ngClass"]],
      template: function DicerollerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Damage Info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose Number of Attacks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DicerollerComponent_Template_mat_select_valueChange_9_listener($event) {
            return ctx.numberofAttacksHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Number of Die:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DicerollerComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.dieNumberHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Die Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DicerollerComponent_Template_mat_select_valueChange_32_listener($event) {
            return ctx.dieTypeHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "d4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "d6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "d8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "d10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "d12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Choose Plus Hit Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DicerollerComponent_Template_mat_select_valueChange_46_listener($event) {
            return ctx.bonusHitValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Choose Plus Damage Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DicerollerComponent_Template_mat_select_valueChange_75_listener($event) {
            return ctx.bonusDamageValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Barbarian Rage:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Rage Damage Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DicerollerComponent_Template_mat_select_valueChange_107_listener($event) {
            return ctx.bonusRageDamageValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Modification Info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DicerollerComponent_Template_mat_checkbox_ngModelChange_120_listener($event) {
            return ctx.checkBless = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Bless");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DicerollerComponent_Template_mat_checkbox_ngModelChange_123_listener($event) {
            return ctx.checkBane = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Bane");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](131, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, DicerollerComponent_mat_header_cell_132_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, DicerollerComponent_mat_cell_133_Template, 3, 0, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, DicerollerComponent_mat_footer_cell_134_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](135, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, DicerollerComponent_mat_header_cell_136_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, DicerollerComponent_mat_cell_137_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, DicerollerComponent_mat_footer_cell_138_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](139, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, DicerollerComponent_mat_header_cell_140_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, DicerollerComponent_mat_cell_141_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, DicerollerComponent_mat_footer_cell_142_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](143, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, DicerollerComponent_mat_header_cell_144_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, DicerollerComponent_mat_cell_145_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, DicerollerComponent_mat_footer_cell_146_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](147, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, DicerollerComponent_mat_header_cell_148_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, DicerollerComponent_mat_cell_149_Template, 2, 3, "mat-cell", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, DicerollerComponent_mat_footer_cell_150_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](151, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, DicerollerComponent_mat_header_cell_152_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, DicerollerComponent_mat_cell_153_Template, 2, 2, "mat-cell", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, DicerollerComponent_mat_footer_cell_154_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](155, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, DicerollerComponent_mat_header_cell_156_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, DicerollerComponent_mat_cell_157_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, DicerollerComponent_mat_footer_cell_158_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](159, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, DicerollerComponent_mat_header_cell_160_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, DicerollerComponent_mat_cell_161_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, DicerollerComponent_mat_footer_cell_162_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](163, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, DicerollerComponent_mat_header_cell_164_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, DicerollerComponent_mat_cell_165_Template, 2, 1, "mat-cell", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, DicerollerComponent_mat_footer_cell_166_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](167, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, DicerollerComponent_mat_header_cell_168_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, DicerollerComponent_mat_cell_169_Template, 2, 4, "mat-cell", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, DicerollerComponent_mat_footer_cell_170_Template, 1, 0, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](171, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, DicerollerComponent_mat_header_cell_172_Template, 2, 0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, DicerollerComponent_mat_cell_173_Template, 2, 5, "mat-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, DicerollerComponent_mat_footer_cell_174_Template, 2, 1, "mat-footer-cell", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, DicerollerComponent_mat_header_row_175_Template, 1, 0, "mat-header-row", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, DicerollerComponent_mat_row_176_Template, 1, 0, "mat-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, DicerollerComponent_mat_footer_row_177_Template, 1, 0, "mat-footer-row", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_187_listener() {
            return ctx.testButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " TestButton ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_191_listener() {
            return ctx.getRoll20Advantage("notAdvantage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Roll D20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_193_listener() {
            return ctx.getRoll20Advantage("advantage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Adv. Roll D20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_196_listener() {
            return ctx.multipleAttacks("notAdvantage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Roll Multi Attack ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_198_listener() {
            return ctx.multipleAttacks("advantage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Adv. Multi Attack ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DicerollerComponent_Template_button_click_201_listener() {
            return ctx.multipleAttacks("disAdvantage");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Disadvantage Roll Multiple Attacks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h2", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.numberofAttacksHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dieNumberHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dieTypeHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusHitValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusDamageValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusRageDamageValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBless);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBane);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Regular D20 Roll: ", ctx.valueD20, " plus ", ctx.bonusHitValueHTML, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valueD20Advantage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total of all dice: ", ctx.totalAllDamage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Regular D20 Roll: ", ctx.valueD20, " plus ", ctx.bonusHitValueHTML, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valueD20Advantage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total of all dice: ", ctx.totalAllDamage, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatFooterRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatFooterCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatFooterRow"]],
      styles: [".crit[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  background-color: #00803a;\n}\n.miss[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  background-color: red;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ff0800;\n}\n.strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.example-events[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n  border-radius: 4px;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n.navButton[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  background-color: #555;\n  color: white;\n  font-size: 16px;\n  margin: 2px;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  color: #F1FAEE;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  padding: 0;\n  color: #F1FAEE;\n}\n.mat-footer-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  padding: 0;\n  color: #F1FAEE;\n}\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  background: #5E548E;\n  color: #F1FAEE;\n  border-radius: 4px;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1px;\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background: #231942;\n}\n.mat-drawer-content[_ngcontent-%COMP%] {\n  background: #231942;\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: #5E548E;\n}\nmat-option[_ngcontent-%COMP%] {\n  background: #231942;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0.5rem 0.5rem;\n  grid-template-columns: 20% auto 20%;\n  grid-template-rows: 3;\n  background: #231942;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  height: 100%;\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #231942;\n  color: #F1FAEE;\n}\n.left-data[_ngcontent-%COMP%] {\n  grid-column: 1;\n  min-width: 280px;\n}\n.center-data[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.right-data[_ngcontent-%COMP%] {\n  grid-column: 3;\n  min-width: 280px;\n}\n@media all and (max-width: 1620px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 0.5rem 0.5rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2;\n    background: #231942;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    height: 100%;\n  }\n\n  .left-data[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 2;\n    min-width: 280px;\n  }\n\n  .center-data[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n    grid-row: 1;\n  }\n\n  .right-data[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 2;\n    min-width: 280px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media all and (max-width: 680px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 0.5rem 0.5rem;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2;\n    background: #231942;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    height: 100%;\n  }\n\n  .left-data[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 3;\n    min-width: 280px;\n  }\n\n  .center-data[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n\n  .right-data[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 2;\n    min-width: 280px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljZXJvbGxlci9DOlxcVXNlcnNcXENocm9ub1xcRGVza3RvcFxcY29kZVxcZG5kL3NyY1xcYXBwXFxkaWNlcm9sbGVyXFxkaWNlcm9sbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaWNlcm9sbGVyL2RpY2Vyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBNEJBLG9CQUFBO0FBQ0E7O0dBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUEwQkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGO0FERUE7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSw2QkFBQTtBQ0NGO0FEV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ1JGO0FEV0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1JGO0FEV0E7RUFDRSx1QkFBQTtBQ1JGO0FEaUJBO0VBQ0Usa0JBQUE7RUFDQTs7cUNBQUE7RUFJQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2hCRjtBRG9CQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDakJGO0FEcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNsQkY7QURzQkE7RUFFRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNwQkY7QUR5QkE7RUFFRSxXQUFBO0VBRUEsY0FBQTtBQ3hCRjtBRDJCQTtFQUNFLG1CQUFBO0FDeEJGO0FENEJBO0VBQ0UsbUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxtQkFBQTtBQ3pCRjtBRDRCQTtFQUNFLG1CQUFBO0FDekJGO0FENkJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUdBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDN0JGO0FEZ0NBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDN0JGO0FEZ0NBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FDN0JEO0FEZ0NBO0VBQ0EsY0FBQTtBQzdCQTtBRGdDQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzdCQTtBRGlDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsOEJBQUE7SUFDQSxxQkFBQTtJQUdBLG1CQUFBO0lBRUEscUJBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VDakNGOztFRG1DQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNoQ0Y7O0VEbUNDO0lBQ0MscUJBQUE7SUFDQSxXQUFBO0VDaENGOztFRG1DQztJQUNDLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNoQ0Y7O0VEa0NDO0lBQ0UsYUFBQTtFQy9CSDtBQUNGO0FEbUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0lBR0EsbUJBQUE7SUFFQSxxQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUNwQ0Y7O0VEc0NBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ25DRjs7RURzQ0M7SUFDQyxjQUFBO0lBQ0EsV0FBQTtFQ25DRjs7RURzQ0M7SUFDQyxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDbkNGOztFRHFDQztJQUNFLGFBQUE7RUNsQ0g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RpY2Vyb2xsZXIvZGljZXJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGgxIHtcclxuICBjb2xvcjogIzM2OTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuaDIsIGgzIHtcclxuICBjb2xvcjogcmdiKDE5MCwgMTQ1LCAyMCk7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxubGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvL3BhZGRpbmc6IDhweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5ib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG4gKi9cclxuLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbi8qICoge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59ICovXHJcbi8qIHRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuICBjb2xvcjogcmdiKDE5MCwgMTQ1LCAyMCk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgbWFyZ2luOjVweDtcclxufVxyXG4gKi9cclxuXHJcbi5jcml0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgNTgpO1xyXG59XHJcblxyXG4ubWlzcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgsIDApO1xyXG59XHJcblxyXG4uc3RyaWtlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLy8gLmV4YW1wbGUtY29udGFpbmVyIHtcclxuLy8gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gIC8vIHRvcDogNjRweDtcclxuLy8gICAvL2JvdHRvbTogMDtcclxuLy8gICAvLyBsZWZ0OiAxMCU7XHJcbi8vICAgLy8gcmlnaHQ6IDEwJTtcclxuLy8gICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4uZXhhbXBsZS1ldmVudHMge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgd2lkdGg6ODAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gIC8vIGNvbG9yOiByZ2IoMTkwLCAxNDUsIDIwKTtcclxufVxyXG5cclxuLy8gLnNpZGVCYXIge1xyXG4vLyAgIHdpZHRoOjMwMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuLm5hdkJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIHRvcDogMCU7XHJcbiAgbGVmdDogMTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxuICAvLyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gLy8gcGFkZGluZzogMTJweCAxMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICNGMUZBRUU7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICNGMUZBRUU7XHJcblxyXG59XHJcblxyXG4ubWF0LWZvb3Rlci1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjFGQUVFO1xyXG5cclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjNUU1NDhFO1xyXG4gIGNvbG9yOiAjRjFGQUVFO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbn1cclxuXHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIC8vZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xyXG4gIG1pbi13aWR0aDogMXB4O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlciB7XHJcbiAgYmFja2dyb3VuZDogIzIzMTk0MjtcclxuXHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMyMzE5NDJcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjNUU1NDhFO1xyXG5cclxufVxyXG5tYXQtb3B0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiMyMzE5NDJcclxufVxyXG5cclxuLy9MQVJHRSBTQ1JFRU5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IC41cmVtIC41cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMztcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzIzMTk0MjtcclxuICAvL2JhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtYXBwLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzE5NDI7XHJcbiAgY29sb3I6ICNGMUZBRUU7XHJcbn1cclxuXHJcbi5sZWZ0LWRhdGEge1xyXG4gZ3JpZC1jb2x1bW46IDE7XHJcbiBtaW4td2lkdGg6IDI4MHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRhdGEge1xyXG5ncmlkLWNvbHVtbjogMjtcclxufVxyXG5cclxuLnJpZ2h0LWRhdGEge1xyXG5ncmlkLWNvbHVtbjogMztcclxubWluLXdpZHRoOiAyODBweDtcclxufVxyXG5cclxuLy8gTUVESVVNIFNDUkVFTlxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IC41cmVtIC41cmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzIzMTk0MjtcclxuICAgIC8vYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sZWZ0LWRhdGEge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5jZW50ZXItZGF0YSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICB9XHJcblxyXG4gICAucmlnaHQtZGF0YSB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgfVxyXG4gICAuY2VudGVyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vU01BTEwgU0NSRUVOXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAuNXJlbSAuNXJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMxOTQyO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmxlZnQtZGF0YSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAzO1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgfVxyXG5cclxuICAgLmNlbnRlci1kYXRhIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgIH1cclxuXHJcbiAgIC5yaWdodC1kYXRhIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICB9XHJcbiAgIC5jZW50ZXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxufVxyXG4iLCIvKiBoMSB7XG4gIGNvbG9yOiAjMzY5O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNTAlO1xufVxuaDIsIGgzIHtcbiAgY29sb3I6IHJnYigxOTAsIDE0NSwgMjApO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy9wYWRkaW5nOiA4cHg7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5ib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuICovXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cbi8qICoge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn0gKi9cbi8qIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OmF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xuICBjb2xvcjogcmdiKDE5MCwgMTQ1LCAyMCk7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIG1hcmdpbjo1cHg7XG59XG4gKi9cbi5jcml0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAzYTtcbn1cblxuLm1pc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwODAwO1xufVxuXG4uc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5leGFtcGxlLWV2ZW50cyB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnRhYmxlLCB0aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm5hdkJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAwJTtcbiAgbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRjFGQUVFO1xufVxuXG4ubWF0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRjFGQUVFO1xufVxuXG4ubWF0LWZvb3Rlci1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI0YxRkFFRTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNUU1NDhFO1xuICBjb2xvcjogI0YxRkFFRTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxcHg7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZDogIzIzMTk0Mjtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMzE5NDI7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICM1RTU0OEU7XG59XG5cbm1hdC1vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjMjMxOTQyO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwLjVyZW0gMC41cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzO1xuICBiYWNrZ3JvdW5kOiAjMjMxOTQyO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxOTQyO1xuICBjb2xvcjogI0YxRkFFRTtcbn1cblxuLmxlZnQtZGF0YSB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuXG4uY2VudGVyLWRhdGEge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnJpZ2h0LWRhdGEge1xuICBncmlkLWNvbHVtbjogMztcbiAgbWluLXdpZHRoOiAyODBweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTYyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwLjVyZW0gMC41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI7XG4gICAgYmFja2dyb3VuZDogIzIzMTk0MjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5sZWZ0LWRhdGEge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAyO1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gIH1cblxuICAuY2VudGVyLWRhdGEge1xuICAgIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcbiAgICBncmlkLXJvdzogMTtcbiAgfVxuXG4gIC5yaWdodC1kYXRhIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMjtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDAuNXJlbSAwLjVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyO1xuICAgIGJhY2tncm91bmQ6ICMyMzE5NDI7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubGVmdC1kYXRhIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMztcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICB9XG5cbiAgLmNlbnRlci1kYXRhIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcbiAgfVxuXG4gIC5yaWdodC1kYXRhIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMjtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DicerollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-diceroller',
          templateUrl: './diceroller.component.html',
          styleUrls: ['./diceroller.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.numberofAttacksHTML = 3;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 283,
      vars: 48,
      consts: [[1, "wrapper"], [1, "main"], ["src", "../../assets/heroimage.jpg", "align", "middle"], [1, "table", "table-bordered", 2, "text-align", "center"], [1, "aside", "aside-1"], [2, "max-width", "100%"], [3, "value", "valueChange"], [3, "value"], [2, "display", "flex"], ["type", "number", "min", "1", "matInput", "", 3, "ngModel", "ngModelChange"], [2, "padding", "5px"], [3, "ngModel", "ngModelChange"], [1, "aside", "aside-2"], [1, "rollButtons"], ["mat-raised-button", "", "color", "primary", "type", "button", 2, "margin-right", "0.5rem", "margin-top", "0.5rem", "width", "100%"], ["mat-raised-button", "", "color", "primary", "type", "button", 2, "margin-top", "0.5rem", "width", "100%"], ["mat-raised-button", "", "color", "warn", "type", "button", 2, "margin-top", "0.5rem", "width", "100%"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First D20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Second D20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Final D20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Damage Dice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Number of Attacks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Damage Bonus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Plus to Hit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "77");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "aside", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Basic Damage Info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Choose Number of Attacks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InfoComponent_Template_mat_select_valueChange_147_listener($event) {
            return ctx.numberofAttacksHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Number of Die:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InfoComponent_Template_input_ngModelChange_166_listener($event) {
            return ctx.dieNumberHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Die Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InfoComponent_Template_mat_select_valueChange_171_listener($event) {
            return ctx.dieTypeHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "d4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "d6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "d8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "d10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "d12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Choose Plus Hit Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InfoComponent_Template_mat_select_valueChange_186_listener($event) {
            return ctx.bonusHitValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Choose Plus Damage Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InfoComponent_Template_mat_select_valueChange_215_listener($event) {
            return ctx.bonusDamageValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Barbarian Rage:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Rage Damage Bonus:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InfoComponent_Template_mat_select_valueChange_246_listener($event) {
            return ctx.bonusRageDamageValueHTML = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Modification Info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InfoComponent_Template_mat_checkbox_ngModelChange_259_listener($event) {
            return ctx.checkBless = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Bless");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InfoComponent_Template_mat_checkbox_ngModelChange_262_listener($event) {
            return ctx.checkBane = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Bane");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "aside", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Roll Options:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " ROLL D20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " ADV. ROLL D20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " ROLL MULTI ATTACK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " ADV. MULTI ATTACK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Disadvantage Roll Multiple Attacks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.numberofAttacksHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dieNumberHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dieTypeHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusHitValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusDamageValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bonusRageDamageValueHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBless);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBane);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 1 100%;\n}\n.main[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.aside-1[_ngcontent-%COMP%] {\n  height: auto;\n}\n@media all and (min-width: 600px) {\n  .aside[_ngcontent-%COMP%] {\n    flex: 1 0 0 !important;\n  }\n\n  .aside-1[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n\n  .aside-2[_ngcontent-%COMP%] {\n    order: 3 !important;\n  }\n}\n@media all and (min-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%] {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n\n  .aside-1[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n\n  .aside-2[_ngcontent-%COMP%] {\n    order: 3 !important;\n  }\n}\n@media all and (max-width: 600px) {\n  .aside-1[_ngcontent-%COMP%] {\n    order: 3 !important;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    order: 1 !important;\n  }\n\n  .aside-2[_ngcontent-%COMP%] {\n    order: 2 !important;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n.rollButtons[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.maxwidth[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcVXNlcnNcXENocm9ub1xcRGVza3RvcFxcY29kZVxcZG5kL3NyY1xcYXBwXFxpbmZvXFxpbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQTtBQW1CQTs7O0VBQUE7QUF3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7QUR5Q0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ3RDRjtBRHlDQTtFQUNFLGdCQUFBO0FDdENGO0FEMENBO0VBRUUsWUFBQTtBQ3hDRjtBRGdEQTtFQUNFO0lBQ0Usc0JBQUE7RUM3Q0Y7O0VEK0NBO0lBQ0UsbUJBQUE7RUM1Q0Y7O0VEOENBO0lBQ0UsbUJBQUE7RUMzQ0Y7O0VENkNBO0lBQ0UsbUJBQUE7RUMxQ0Y7QUFDRjtBRGdEQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQzlDRjs7RURpREE7SUFDRSxtQkFBQTtFQzlDRjs7RURnREE7SUFDRSxtQkFBQTtFQzdDRjs7RUQrQ0E7SUFDRSxtQkFBQTtFQzVDRjtBQUNGO0FEd0VBO0VBRUU7SUFDRSxtQkFBQTtFQ3ZFRjs7RUR5RUE7SUFDRSxtQkFBQTtFQ3RFRjs7RUR3RUE7SUFDRSxtQkFBQTtFQ3JFRjtBQUNGO0FEd0VBO0VBQ0UsWUFBQTtBQ3RFRjtBRHlFQTtFQUNFLFdBQUE7QUN0RUY7QUQwRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN2RUY7QUQwRUE7OztFQUdFLHVCQUFBO0FDdkVGO0FEMkVBO0VBRUUsV0FBQTtBQ3pFRjtBRDhFQTtFQUVFLFdBQUE7RUFDQSw0QkFBQTtBQzVFRiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGgxIHtcclxuICBjb2xvcjogIzM2OTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuaDIsIGgzIHtcclxuICBjb2xvcjogcmdiKDE5MCwgMTQ1LCAyMCk7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbn1cclxuLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbi8qICoge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAqL1xyXG5cclxuLy8gKiB7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gYm9keSB7XHJcbi8vICAgYmFja2dyb3VuZDogcHJpbWFyeTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAud3JhcHBlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LXNocmluazogMTtcclxuLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vIH1cclxuXHJcbi8vIC5pdGVtIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIC8vcGFkZGluZy1ib3R0b206IDE4JTsgLyogMzI6MTgsIGkuZS4gMTY6OSAqL1xyXG4vLyAgIC8vbWFyZ2luLWJvdHRvbTogMiU7IC8qICgxMDAtMzIqMykvMiAqL1xyXG4vLyAgIGJhY2tncm91bmQ6IGRhcmtjeWFuO1xyXG4vLyAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyB9XHJcblxyXG4vLyAuYnJlYWsge1xyXG4vLyAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAwO1xyXG4vLyB9XHJcblxyXG4vKlxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwxZnIpO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogIzcwOGQ4MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLml0ZW06bnRoLWNoaWxkKGV2ZW4pe1xyXG4gIGJhY2tncm91bmQ6ICNGNEQ1OEQ7XHJcbn1cclxuICovXHJcbi8qIC5sZWZ0U2lkZSB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogNztcclxuICB3aWR0aDogMTAwJTtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG4uaGVyb3tcclxuICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICBncmlkLWNvbHVtbi1lbmQ6IDc7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gIGJvcmRlcjogMXB4O1xyXG59XHJcbiAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmbGV4OiAxIDEwMCU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8vYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XHJcbn1cclxuXHJcbi5hc2lkZS0xIHtcclxuICAvLyBiYWNrZ3JvdW5kOiBnb2xkO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFzaWRlLTIge1xyXG4gIC8vIGJhY2tncm91bmQ6IGhvdHBpbms7XHJcbn1cclxuXHJcbi8vIDYwMCB0byAxMDI0XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmFzaWRlIHtcclxuICAgIGZsZXg6IDEgMCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hc2lkZS0xIHtcclxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYWluIHtcclxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hc2lkZS0yIHtcclxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIDEwMjQgYW5kIGFib3ZlXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLmFzaWRlLTEge1xyXG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1haW4ge1xyXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFzaWRlLTIge1xyXG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIDEwMjQgYW5kIGFib3ZlXHJcbi8vIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4vLyAgIC53cmFwcGVyIHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLm1haW4ge1xyXG4vLyAgICAgZmxleDogMyAwcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmFzaWRlLTEge1xyXG4vLyAgICAgb3JkZXI6IDEgIWltcG9ydGFudDtcclxuLy8gICAgIG1pbi13aWR0aDogMzg1cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5tYWluIHtcclxuLy8gICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyAgIC5hc2lkZS0yIHtcclxuLy8gICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtaW4td2lkdGg6IDM4NXB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiAzODVweDtcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8vLmFzaWRlIHsgZmxleDogMSAwIDAgIWltcG9ydGFudDsgfVxyXG4gIC5hc2lkZS0xIHtcclxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYWluIHtcclxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hc2lkZS0yIHtcclxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5yb2xsQnV0dG9ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9tYXJnaW46IC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxudGFibGUsXHJcbnRoLFxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gIC8vIGNvbG9yOiByZ2IoMTkwLCAxNDUsIDIwKTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuIC8vIG1heC13aWR0aDogNTAlO1xyXG5cclxufVxyXG5cclxuLm1heHdpZHRoIHtcclxuICAvL21heC13aWR0aDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLyogaDEge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbn1cbmgyLCBoMyB7XG4gIGNvbG9yOiByZ2IoMTkwLCAxNDUsIDIwKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmJvZHksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBidXR0b24ge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cbi8qICoge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbiAqL1xuLypcbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LDFmcik7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZDogIzcwOGQ4MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbTpudGgtY2hpbGQoZXZlbil7XG4gIGJhY2tncm91bmQ6ICNGNEQ1OEQ7XG59XG4gKi9cbi8qIC5sZWZ0U2lkZSB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDc7XG4gIHdpZHRoOiAxMDAlO1xuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG59XG5cbi5oZXJve1xuICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3O1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiA0O1xuICBib3JkZXI6IDFweDtcbn1cbiAqL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4ud3JhcHBlciA+ICoge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbGV4OiAxIDEwMCU7XG59XG5cbi5tYWluIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFzaWRlLTEge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5hc2lkZSB7XG4gICAgZmxleDogMSAwIDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hc2lkZS0xIHtcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXNpZGUtMiB7XG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gIH1cblxuICAuYXNpZGUtMSB7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFzaWRlLTIge1xuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hc2lkZS0xIHtcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXNpZGUtMiB7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxufVxuYm9keSB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLnJvbGxCdXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG50YWJsZSxcbnRoLFxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXh3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var DemoMaterialModule = function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    };

    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoMaterialModule
    });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoMaterialModule_Factory(t) {
        return new (t || DemoMaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/navagationbar/navagationbar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/navagationbar/navagationbar.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavagationbarComponent */

  /***/
  function srcAppNavagationbarNavagationbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavagationbarComponent", function () {
      return NavagationbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavagationbarComponent = /*#__PURE__*/function () {
      function NavagationbarComponent() {
        _classCallCheck(this, NavagationbarComponent);
      }

      _createClass(NavagationbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavagationbarComponent;
    }();

    NavagationbarComponent.ɵfac = function NavagationbarComponent_Factory(t) {
      return new (t || NavagationbarComponent)();
    };

    NavagationbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavagationbarComponent,
      selectors: [["app-navagationbar"]],
      decls: 14,
      vars: 1,
      consts: [["md-whiteframe", "8", "layout", "row", "color", "primary", 1, "example-container"], [1, "example-spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "href", "#", "routerLink", "/diceroller"], ["mat-menu-item", "", "href", "#", "routerLink", "/info"]],
      template: function NavagationbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dungeons & Dragons Helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Dice Roller ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  background: #5E548E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YWdhdGlvbmJhci9DOlxcVXNlcnNcXENocm9ub1xcRGVza3RvcFxcY29kZVxcZG5kL3NyY1xcYXBwXFxuYXZhZ2F0aW9uYmFyXFxuYXZhZ2F0aW9uYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZhZ2F0aW9uYmFyL25hdmFnYXRpb25iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmF2YWdhdGlvbmJhci9uYXZhZ2F0aW9uYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjNUU1NDhFO1xyXG59XHJcbiIsIi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICM1RTU0OEU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavagationbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navagationbar',
          templateUrl: './navagationbar.component.html',
          styleUrls: ['./navagationbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! C:\Users\Chrono\Desktop\code\dnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map