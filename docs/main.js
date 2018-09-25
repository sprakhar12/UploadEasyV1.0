(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loginReg_log_reg_screen_log_reg_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginReg/log-reg-screen/log-reg-screen.component */ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', component: _loginReg_log_reg_screen_log_reg_screen_component__WEBPACK_IMPORTED_MODULE_2__["LogRegScreenComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loginReg_log_reg_screen_log_reg_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginReg/log-reg-screen/log-reg-screen.component */ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _loginReg_log_reg_screen_log_reg_screen_component__WEBPACK_IMPORTED_MODULE_3__["LogRegScreenComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/loginReg/log-reg-screen/log-reg-screen.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\r\n\tbackground-color: #000;\r\n\tbackground: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('sky-cloud.jpg');\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\tdisplay: table;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n}\r\n\r\n#loginContainer * {\r\n\tcolor: #fff;\r\n\tfont-family: Georgia, Times, serif;\r\n\tfont-weight: normal;\r\n\tline-height: 1em;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n#loginContainer{\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tmax-width: 1024px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\r\n    color:    #fff;\r\n    opacity:  0.6;\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color:    #fff;\r\n   opacity:  0.6;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color:    #fff;\r\n   opacity:  0.6;\r\n}\r\n\r\n::placeholder { /* Most modern browsers support this now. */\r\n   color:    #fff;\r\n   opacity:  0.6;\r\n}\r\n\r\n#inputContainer{\r\n\twidth: 400px;\r\n\tpadding: 45px;\r\n\tfloat: right;\r\n\tborder-left: 1px solid #999;\r\n}\r\n\r\n#inputContainer h2{\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#inputContainer input[type=\"text\"],\r\n#inputContainer input[type=\"email\"],\r\n#inputContainer input[type=\"password\"]{\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n\tborder-bottom: 1px solid #fff;\r\n\theight: 27px;\r\n\tline-height: 27px;\r\n\twidth: 100%;\r\n\tmargin: 10px auto;\r\n    text-align: center;\r\n}\r\n\r\n#inputContainer label{\r\n\tcolor: #f9c059;\r\n    margin-top: 15px;\r\n    font-size: 15px;\r\n    display: block;\r\n}\r\n\r\n#inputContainer button{\r\n\tbackground-color: transparent;\r\n    border: 2px solid #fff;\r\n    border-radius: 250px;\r\n    color: #fff;\r\n    display: block;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    margin: 40px auto;\r\n    height: 41px;\r\n    width: 100%;\r\n}\r\n\r\n#inputContainer button:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n.ifHasAccount span{\r\n\tfont-weight: normal;\r\n\tfont-size: 12px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.ifHasAccount{\r\n\ttext-align: center;\r\n}\r\n\r\n#registerForm,\r\n#loginForm{\r\n\t/* display: block; */\r\n\ttext-align: center;\r\n}\r\n\r\n#loginFormSideText{\r\n\tpadding: 45px;\r\n\tdisplay: table-cell;\r\n}\r\n\r\n#loginFormSideText h1{\r\n\tcolor: #ff2323;\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n    font-family: Georgia, Times, serif;\r\n    text-align: center;\r\n}\r\n\r\n#loginFormSideText h2{\r\n\tmargin: 35px 0;\r\n\tfont-family: \"Georgia\", \"Times\", serif;\r\n\ttext-align: center;\r\n}\r\n\r\n#loginFormSideText ul{\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n\tpadding: 13px 30px;\r\n}\r\n\r\n#loginFormSideText li{\r\n\tfont-size: 20px;\r\n\tfont-family: Georgia, Times, serif;\r\n\tlist-style-type: none;\r\n\tpadding: 13px 60px;\r\n\tbackground: url('heart.png') no-repeat; \r\n}\r\n\r\n#inputContainer .errorMessage{\r\n\tcolor: #00ffc4c7;\r\n    font-size: 13px;\r\n    display: block;\r\n    margin-top: 15px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/loginReg/log-reg-screen/log-reg-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n\n  <div id=\"loginContainer\">\n\n    <div id=\"inputContainer\">\n\n      <br>\n      <br>\n      <!-- Login -->\n      <form [hidden]=\"showSelected\" id=\"loginForm\">\n        <h2>Login account</h2>\n        <p>\n          <label for=\"loginUsername\">Username</label>\n          <input id=\"loginUsername\" name=\"loginUsername\" type=\"text\" placeholder=\"your username\" required>\n        </p>\n        <p>\n          <label for=\"loginPassword\">Password</label>\n          <input id=\"loginPassword\" name=\"loginPassword\" type=\"password\" placeholder=\"your password\" required>\n        </p>\n        <button type=\"submit\" name=\"loginButton\">LOGIN</button>\n\n        <div class=\"ifHasAccount\">\n          <span (click)=\"showRegister()\" id=\"hideLoginForm\">Don't have an account yet? Create one here for <em>FREE</em>.</span>\n        </div>\n\n      </form>\n\n      <!-- Register -->\n      <form [hidden]=\"!showSelected\" id=\"registerForm\">\n        <h2>Create your account</h2>\n        <p>\n          <label for=\"username\">Username</label>\n          <input id=\"username\" name=\"username\" type=\"text\" placeholder=\"e.g. macWin\" required>\n        </p>\n        <p>\n          <label for=\"firstname\">First name</label>\n          <input id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"e.g. Mac\" required>\n        </p>\n        <p>\n          <label for=\"lastname\">Last name</label>\n          <input id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"e.g. Win\" required>\n        </p>\n        <p>\n          <label for=\"email\">Email</label>\n          <input id=\"email\" name=\"email\" type=\"email\" placeholder=\"e.g. win@outlook.com\" required>\n        </p>\n        <p>\n          <label for=\"email2\">Confirm email</label>\n          <input id=\"email2\" name=\"email2\" type=\"email\" placeholder=\"e.g. win@outlook.com\" required>\n        </p>\n        <p>\n          <label for=\"password\">Password</label>\n          <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Your password\" required>\n        </p>\n        <p>\n          <label for=\"password2\">Confirm password</label>\n          <input id=\"password2\" name=\"password2\" type=\"password\" placeholder=\"Your password\" required>\n        </p>\n        <button type=\"submit\" name=\"registerButton\">SIGN UP</button>\n\n        <div class=\"ifHasAccount\">\n          <span (click)=\"showLogin()\" id=\"hideRegisterForm\">Already have an account? log in here</span>\n        </div>\n\n      </form>\n    </div>\n\n    <br>\n    <br>\n    <div id=\"loginFormSideText\">\n      <h1>Upload Easy</h1>\n      <h2>Video Management System</h2>\n      <ul>\n        <li>Lets you upload media files to AWS S3</li>\n        <li>Show them in action all at one place</li>\n        <li>Ofcourse it's free</li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/loginReg/log-reg-screen/log-reg-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogRegScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRegScreenComponent", function() { return LogRegScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogRegScreenComponent = /** @class */ (function () {
    function LogRegScreenComponent() {
        this.showSelected = false;
    }
    LogRegScreenComponent.prototype.ngOnInit = function () {
    };
    LogRegScreenComponent.prototype.showLogin = function () {
        this.showSelected = false;
    };
    LogRegScreenComponent.prototype.showRegister = function () {
        this.showSelected = true;
    };
    LogRegScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-reg-screen',
            template: __webpack_require__(/*! ./log-reg-screen.component.html */ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.html"),
            styles: [__webpack_require__(/*! ./log-reg-screen.component.css */ "./src/app/loginReg/log-reg-screen/log-reg-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogRegScreenComponent);
    return LogRegScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\AngularProjects\uploadEasyRegTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map