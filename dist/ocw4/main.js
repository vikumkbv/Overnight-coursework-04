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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardcss {\r\n  width: 75rem;\r\n  margin-left: 6%;\r\n}\r\n\r\n.footercss {\r\n  background-color: white;\r\n  border-top: none;\r\n}\r\n\r\n@include media-breakpoint-up(sm) {\r\n  html {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n@include media-breakpoint-up(md) {\r\n  html {\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n@include media-breakpoint-up(lg) {\r\n  html {\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<app-navbar></app-navbar>\n<app-main-menu></app-main-menu>\n\n<div class=\"card cardcss\">\n  <div class=\"card-body\">\n\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div class=\"card-footer footercss\">\n  <app-footer></app-footer>\n</div>\n"

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
        this.title = 'ocw4';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componet/navbar/navbar.component */ "./src/app/componet/navbar/navbar.component.ts");
/* harmony import */ var _componet_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componet/footer/footer.component */ "./src/app/componet/footer/footer.component.ts");
/* harmony import */ var _componet_form_additem_form_additem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componet/form-additem/form-additem.component */ "./src/app/componet/form-additem/form-additem.component.ts");
/* harmony import */ var _componet_form_reportgen_form_reportgen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componet/form-reportgen/form-reportgen.component */ "./src/app/componet/form-reportgen/form-reportgen.component.ts");
/* harmony import */ var _componet_form_returnitem_form_returnitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componet/form-returnitem/form-returnitem.component */ "./src/app/componet/form-returnitem/form-returnitem.component.ts");
/* harmony import */ var _componet_form_borrowitem_form_borrowitem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componet/form-borrowitem/form-borrowitem.component */ "./src/app/componet/form-borrowitem/form-borrowitem.component.ts");
/* harmony import */ var _componet_form_listitems_form_listitems_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componet/form-listitems/form-listitems.component */ "./src/app/componet/form-listitems/form-listitems.component.ts");
/* harmony import */ var _componet_form_remitems_form_remitems_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componet/form-remitems/form-remitems.component */ "./src/app/componet/form-remitems/form-remitems.component.ts");
/* harmony import */ var _componet_item_book_item_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componet/item-book/item-book.component */ "./src/app/componet/item-book/item-book.component.ts");
/* harmony import */ var _componet_item_dvd_item_dvd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componet/item-dvd/item-dvd.component */ "./src/app/componet/item-dvd/item-dvd.component.ts");
/* harmony import */ var _componet_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componet/main-menu/main-menu.component */ "./src/app/componet/main-menu/main-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'componet/form-additem', component: _componet_form_additem_form_additem_component__WEBPACK_IMPORTED_MODULE_6__["FormAdditemComponent"] },
    { path: 'componet/form-borrowitem', component: _componet_form_borrowitem_form_borrowitem_component__WEBPACK_IMPORTED_MODULE_9__["FormBorrowitemComponent"] },
    { path: 'componet/form-listitems', component: _componet_form_listitems_form_listitems_component__WEBPACK_IMPORTED_MODULE_10__["FormListitemsComponent"] },
    { path: 'componet/form-remitems', component: _componet_form_remitems_form_remitems_component__WEBPACK_IMPORTED_MODULE_11__["FormRemitemsComponent"] },
    { path: 'componet/form-reportgen', component: _componet_form_reportgen_form_reportgen_component__WEBPACK_IMPORTED_MODULE_7__["FormReportgenComponent"] },
    { path: 'componet/form-returnitem', component: _componet_form_returnitem_form_returnitem_component__WEBPACK_IMPORTED_MODULE_8__["FormReturnitemComponent"] },
    { path: 'componet/item-book', component: _componet_item_book_item_book_component__WEBPACK_IMPORTED_MODULE_12__["ItemBookComponent"] },
    { path: 'componet/main-menu', component: _componet_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_14__["MainMenuComponent"] },
    { path: 'componet/item-dvd', component: _componet_item_dvd_item_dvd_component__WEBPACK_IMPORTED_MODULE_13__["ItemDvdComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _componet_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _componet_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _componet_form_additem_form_additem_component__WEBPACK_IMPORTED_MODULE_6__["FormAdditemComponent"],
                _componet_form_borrowitem_form_borrowitem_component__WEBPACK_IMPORTED_MODULE_9__["FormBorrowitemComponent"],
                _componet_form_listitems_form_listitems_component__WEBPACK_IMPORTED_MODULE_10__["FormListitemsComponent"],
                _componet_form_remitems_form_remitems_component__WEBPACK_IMPORTED_MODULE_11__["FormRemitemsComponent"],
                _componet_form_reportgen_form_reportgen_component__WEBPACK_IMPORTED_MODULE_7__["FormReportgenComponent"],
                _componet_form_returnitem_form_returnitem_component__WEBPACK_IMPORTED_MODULE_8__["FormReturnitemComponent"],
                _componet_item_book_item_book_component__WEBPACK_IMPORTED_MODULE_12__["ItemBookComponent"],
                _componet_item_dvd_item_dvd_component__WEBPACK_IMPORTED_MODULE_13__["ItemDvdComponent"],
                _componet_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_14__["MainMenuComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componet/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/componet/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-color {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componet/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/componet/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small special-color-dark pt-4\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3 bg-dark text-color\">Copyright © 2018 | Westminster\n    Library Management System |\n    Developed by Vikum Sanjeewa. All right reserved.\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n\n\n"

/***/ }),

/***/ "./src/app/componet/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/componet/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/componet/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/componet/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-additem/form-additem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/componet/form-additem/form-additem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  margin: 35px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componet/form-additem/form-additem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/componet/form-additem/form-additem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Select item type</h2>\r\n\r\n<br>\r\n<div class=\"d-flex justify-content-center\">\r\n\r\n  <div class='col-lg-3'>\r\n    <a routerLink=\"/componet/item-book\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">Book</button>\r\n    </a>\r\n    <a routerLink=\"/componet/item-dvd\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">DVD</button>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/componet/form-additem/form-additem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componet/form-additem/form-additem.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormAdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAdditemComponent", function() { return FormAdditemComponent; });
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

var FormAdditemComponent = /** @class */ (function () {
    function FormAdditemComponent() {
    }
    FormAdditemComponent.prototype.ngOnInit = function () {
    };
    FormAdditemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-additem',
            template: __webpack_require__(/*! ./form-additem.component.html */ "./src/app/componet/form-additem/form-additem.component.html"),
            styles: [__webpack_require__(/*! ./form-additem.component.css */ "./src/app/componet/form-additem/form-additem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormAdditemComponent);
    return FormAdditemComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-borrowitem/form-borrowitem.component.css":
/*!************************************************************************!*\
  !*** ./src/app/componet/form-borrowitem/form-borrowitem.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/form-borrowitem/form-borrowitem.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/componet/form-borrowitem/form-borrowitem.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"needs-validation\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip01\">Reader's first name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"First name\" required>\n    </div>\n\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip02\">Reader's last name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip02\" placeholder=\"Last name\" required>\n    </div>\n\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltipUsername\">UserID</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"validationTooltipUsernamePrepend\">@</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltipUsername\" placeholder=\"Username\"\n               aria-describedby=\"validationTooltipUsernamePrepend\" required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"validationTooltip03\">Item Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"Book or DVD title\" required>\n    </div>\n\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip04\">ISBN</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"ISBN\" required>\n    </div>\n\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip05\">Date of purchase</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Date\" required>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Borrow</button>\n</form>\n"

/***/ }),

/***/ "./src/app/componet/form-borrowitem/form-borrowitem.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componet/form-borrowitem/form-borrowitem.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormBorrowitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBorrowitemComponent", function() { return FormBorrowitemComponent; });
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

var FormBorrowitemComponent = /** @class */ (function () {
    function FormBorrowitemComponent() {
    }
    FormBorrowitemComponent.prototype.ngOnInit = function () {
    };
    FormBorrowitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-borrowitem',
            template: __webpack_require__(/*! ./form-borrowitem.component.html */ "./src/app/componet/form-borrowitem/form-borrowitem.component.html"),
            styles: [__webpack_require__(/*! ./form-borrowitem.component.css */ "./src/app/componet/form-borrowitem/form-borrowitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormBorrowitemComponent);
    return FormBorrowitemComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-listitems/form-listitems.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/componet/form-listitems/form-listitems.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/form-listitems/form-listitems.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/componet/form-listitems/form-listitems.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n      <h4>List of items</h4>\r\n      <div class=\"table-responsive\">\r\n\r\n\r\n        <table id=\"mytable\" class=\"table table-bordred table-striped\">\r\n\r\n          <thead>\r\n\r\n          <th>Type</th>\r\n          <th>ISBN</th>\r\n          <th>Topic</th>\r\n          <th>Author Details</th>\r\n          <th>Publisher/Creator</th>\r\n          <th>In</th>\r\n          <th>Borrowed</th>\r\n          </thead>\r\n          <tbody>\r\n\r\n          <tr>\r\n            <td>Book</td>\r\n            <td>2324DFFCS</td>\r\n            <td>Object oriented JAVA</td>\r\n            <td>Sashika Sandeepana</td>\r\n            <td>ISDT india</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>Book</td>\r\n            <td>we54d5s121</td>\r\n            <td>MySQL</td>\r\n            <td>Danu de silva</td>\r\n            <td>Printing co</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n\r\n\r\n          <tr>\r\n            <td>Book</td>\r\n            <td>sa564s8a</td>\r\n            <td>AngularJs</td>\r\n            <td>Robert w. perera</td>\r\n            <td>T & A printing</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n\r\n\r\n\r\n          <tr>\r\n            <td>DVD</td>\r\n            <td>ds5d445</td>\r\n            <td>Be a pro in photoshop cc 2019 </td>\r\n            <td>Mark filtix</td>\r\n            <td>Digital work production</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" ><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n\r\n          </tbody>\r\n\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componet/form-listitems/form-listitems.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componet/form-listitems/form-listitems.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormListitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListitemsComponent", function() { return FormListitemsComponent; });
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

var FormListitemsComponent = /** @class */ (function () {
    function FormListitemsComponent() {
    }
    FormListitemsComponent.prototype.ngOnInit = function () {
    };
    FormListitemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-listitems',
            template: __webpack_require__(/*! ./form-listitems.component.html */ "./src/app/componet/form-listitems/form-listitems.component.html"),
            styles: [__webpack_require__(/*! ./form-listitems.component.css */ "./src/app/componet/form-listitems/form-listitems.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormListitemsComponent);
    return FormListitemsComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-remitems/form-remitems.component.css":
/*!********************************************************************!*\
  !*** ./src/app/componet/form-remitems/form-remitems.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/form-remitems/form-remitems.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/componet/form-remitems/form-remitems.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"needs-validation\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"validationTooltip03\">Topic</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"Topic of book or DVD\" required>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip04\">ISBN</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"ISBN\" required>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip05\">Type</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Book or DVD\" required>\n    </div>\n  </div>\n  <button class=\"btn btn-danger\" type=\"submit\">Remove Item</button>\n</form>\n"

/***/ }),

/***/ "./src/app/componet/form-remitems/form-remitems.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componet/form-remitems/form-remitems.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormRemitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRemitemsComponent", function() { return FormRemitemsComponent; });
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

var FormRemitemsComponent = /** @class */ (function () {
    function FormRemitemsComponent() {
    }
    FormRemitemsComponent.prototype.ngOnInit = function () {
    };
    FormRemitemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-remitems',
            template: __webpack_require__(/*! ./form-remitems.component.html */ "./src/app/componet/form-remitems/form-remitems.component.html"),
            styles: [__webpack_require__(/*! ./form-remitems.component.css */ "./src/app/componet/form-remitems/form-remitems.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormRemitemsComponent);
    return FormRemitemsComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-reportgen/form-reportgen.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/componet/form-reportgen/form-reportgen.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componet/form-reportgen/form-reportgen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/componet/form-reportgen/form-reportgen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  >>>> Report Generation Completed <<<<\n</p>\n"

/***/ }),

/***/ "./src/app/componet/form-reportgen/form-reportgen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componet/form-reportgen/form-reportgen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormReportgenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormReportgenComponent", function() { return FormReportgenComponent; });
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

var FormReportgenComponent = /** @class */ (function () {
    function FormReportgenComponent() {
    }
    FormReportgenComponent.prototype.ngOnInit = function () {
    };
    FormReportgenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-reportgen',
            template: __webpack_require__(/*! ./form-reportgen.component.html */ "./src/app/componet/form-reportgen/form-reportgen.component.html"),
            styles: [__webpack_require__(/*! ./form-reportgen.component.css */ "./src/app/componet/form-reportgen/form-reportgen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormReportgenComponent);
    return FormReportgenComponent;
}());



/***/ }),

/***/ "./src/app/componet/form-returnitem/form-returnitem.component.css":
/*!************************************************************************!*\
  !*** ./src/app/componet/form-returnitem/form-returnitem.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/form-returnitem/form-returnitem.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/componet/form-returnitem/form-returnitem.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"needs-validation\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"validationTooltip03\">Topic</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"Topic of book or DVD\" required>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip04\">ISBN</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"ISBN\" required>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip05\">Type</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Book or DVD\" required>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Return Item</button>\n</form>\n"

/***/ }),

/***/ "./src/app/componet/form-returnitem/form-returnitem.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componet/form-returnitem/form-returnitem.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormReturnitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormReturnitemComponent", function() { return FormReturnitemComponent; });
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

var FormReturnitemComponent = /** @class */ (function () {
    function FormReturnitemComponent() {
    }
    FormReturnitemComponent.prototype.ngOnInit = function () {
    };
    FormReturnitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-returnitem',
            template: __webpack_require__(/*! ./form-returnitem.component.html */ "./src/app/componet/form-returnitem/form-returnitem.component.html"),
            styles: [__webpack_require__(/*! ./form-returnitem.component.css */ "./src/app/componet/form-returnitem/form-returnitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormReturnitemComponent);
    return FormReturnitemComponent;
}());



/***/ }),

/***/ "./src/app/componet/item-book/item-book.component.css":
/*!************************************************************!*\
  !*** ./src/app/componet/item-book/item-book.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/item-book/item-book.component.html":
/*!*************************************************************!*\
  !*** ./src/app/componet/item-book/item-book.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-verticle\">\r\n  <fieldset>\r\n\r\n    <!-- Form Name -->\r\n    <legend>Add a book</legend>\r\n\r\n    <div class=\"form-row\">\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"ISBN\">ISBN</label>\r\n        <input id=\"ISBN\" name=\"ISBN\" type=\"text\" placeholder=\"Enter isbn of the book\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Topic\">Topic</label>\r\n        <input id=\"Topic\" name=\"Topic\" type=\"text\" placeholder=\"Enter the topic\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Sector\">Sector</label>\r\n        <input id=\"Sector\" name=\"Sector\" type=\"text\" placeholder=\"Enter the category\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Publish Date\">Publish Date</label>\r\n        <input id=\"Publish Date\" name=\"Publish Date\" type=\"text\" placeholder=\"Enter the date of publish\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Author Details\">Author Details</label>\r\n        <input id=\"Author Details\" name=\"Author Details\" type=\"text\" placeholder=\"Enter Author Details\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Publisher Details\">Publisher Details</label>\r\n        <input id=\"Publisher Details\" name=\"Publisher Details\" type=\"text\" placeholder=\"Enter Publisher Details\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"NO of pages\">NO of pages</label>\r\n        <input id=\"NO of pages\" name=\"NO of pages\" type=\"text\" placeholder=\"no of pages\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n    </div>\r\n    <!-- Button -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n      <div class=\"col-md-4\">\r\n        <button id=\"\" name=\"\" class=\"btn btn-success\">Submit</button>\r\n      </div>\r\n    </div>\r\n\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/componet/item-book/item-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/componet/item-book/item-book.component.ts ***!
  \***********************************************************/
/*! exports provided: ItemBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBookComponent", function() { return ItemBookComponent; });
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

var ItemBookComponent = /** @class */ (function () {
    function ItemBookComponent() {
    }
    ItemBookComponent.prototype.ngOnInit = function () {
    };
    ItemBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-book',
            template: __webpack_require__(/*! ./item-book.component.html */ "./src/app/componet/item-book/item-book.component.html"),
            styles: [__webpack_require__(/*! ./item-book.component.css */ "./src/app/componet/item-book/item-book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemBookComponent);
    return ItemBookComponent;
}());



/***/ }),

/***/ "./src/app/componet/item-dvd/item-dvd.component.css":
/*!**********************************************************!*\
  !*** ./src/app/componet/item-dvd/item-dvd.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/item-dvd/item-dvd.component.html":
/*!***********************************************************!*\
  !*** ./src/app/componet/item-dvd/item-dvd.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n  <fieldset>\r\n\r\n    <!-- Form Name -->\r\n    <legend>Add a DVD</legend>\r\n<div class=\"form-row\">\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"ISBN\">ISBN</label>\r\n        <input id=\"ISBN\" name=\"ISBN\" type=\"text\" placeholder=\"Enter isbn of the book\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Topic\">Topic</label>\r\n        <input id=\"Topic\" name=\"Topic\" type=\"text\" placeholder=\"Enter the topic\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Sector\">Sector</label>\r\n        <input id=\"Sector\" name=\"Sector\" type=\"text\" placeholder=\"Enter the category\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Publish Date\">Publish Date</label>\r\n        <input id=\"Publish Date\" name=\"Publish Date\" type=\"text\" placeholder=\"Enter the date of publish\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Actors Details\">Actors Details</label>\r\n        <input id=\"Actors Details\" name=\"Actors Details\" type=\"text\" placeholder=\"Enter Actors Details\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Producer Details\">Producer Details</label>\r\n        <input id=\"Producer Details\" name=\"Producer Details\" type=\"text\" placeholder=\"Enter Producer Details\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Language\">Language</label>\r\n        <input id=\"Language\" name=\"Language\" type=\"text\" placeholder=\"Enter the Language\" class=\"form-control input-md\"\r\n               required=\"\">\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label class=\"control-label\" for=\"Subtitles\">Subtitles</label>\r\n        <input id=\"Subtitles\" name=\"Subtitles\" type=\"text\" placeholder=\"Subtitles Language\"\r\n               class=\"form-control input-md\" required=\"\">\r\n    </div>\r\n</div>\r\n    <!-- Button -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"\"></label>\r\n      <div class=\"col-md-4\">\r\n        <button id=\"\" name=\"\" class=\"btn btn-success\">Submit</button>\r\n      </div>\r\n    </div>\r\n\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/componet/item-dvd/item-dvd.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/componet/item-dvd/item-dvd.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemDvdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDvdComponent", function() { return ItemDvdComponent; });
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

var ItemDvdComponent = /** @class */ (function () {
    function ItemDvdComponent() {
    }
    ItemDvdComponent.prototype.ngOnInit = function () {
    };
    ItemDvdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-dvd',
            template: __webpack_require__(/*! ./item-dvd.component.html */ "./src/app/componet/item-dvd/item-dvd.component.html"),
            styles: [__webpack_require__(/*! ./item-dvd.component.css */ "./src/app/componet/item-dvd/item-dvd.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemDvdComponent);
    return ItemDvdComponent;
}());



/***/ }),

/***/ "./src/app/componet/main-menu/main-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/componet/main-menu/main-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-small-topic {\r\n  font-size: large;\r\n}\r\n\r\nh2 {\r\n  font-size: medium;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n}\r\n\r\n.welcome {\r\n  margin-left: -43%;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  width: 16.65%;\r\n  alignment: center;\r\n  color: white;\r\n}\r\n\r\n/*\r\n.btncenter {\r\n  margin-left: 34%;\r\n  width: 60%;\r\n}\r\n*/\r\n\r\n.btncenter{\r\n  text-align: center;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/componet/main-menu/main-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/componet/main-menu/main-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <br>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\n       width=\"50\" height=\"50\"\n       viewBox=\"0 0 252 252\"\n       style=\"fill:#3498db;\">\n    <g transform=\"\">\n      <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\"\n         stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"\n         stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\"\n         font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n        <path d=\"M0,252v-252h252v252z\"\n              fill=\"none\"></path>\n        <g id=\"original-icon\" fill=\"#3498db\">\n          <g id=\"surface1\">\n            <path\n              d=\"M121.15385,0c-1.62801,0 -3.40745,0.34075 -4.84615,1.21154l-111.76442,67.84615c-3.63462,2.19592 -5.33834,6.66346 -4.24038,10.90385c1.09795,4.24038 4.88401,7.26923 9.08654,7.26923h223.52885c5.14904,0 9.38942,-4.3161 9.38942,-9.69231c0,-4.08894 -2.34735,-7.64783 -5.75481,-9.08654l-110.85577,-67.24038c-1.4387,-0.87079 -2.91526,-1.21154 -4.54327,-1.21154zM121.15385,32.40865c11.50962,0 20.89904,9.38942 20.89904,20.89904c0,11.50962 -9.38942,20.89904 -20.89904,20.89904c-11.50962,0 -20.89904,-9.38942 -20.89904,-20.89904c0,-11.50962 9.38942,-20.89904 20.89904,-20.89904zM9.69231,96.92308v9.69231c0,5.33834 4.35397,9.69231 9.69231,9.69231v77.53846h29.07692v-77.53846c5.33834,0 9.69231,-4.35397 9.69231,-9.69231v-9.69231zM67.84615,96.92308v9.69231c0,5.33834 4.35397,9.69231 9.69231,9.69231v77.53846h29.07692v-77.53846c5.33834,0 9.69231,-4.35397 9.69231,-9.69231v-9.69231zM126,96.92308v9.69231c0,5.33834 4.35397,9.69231 9.69231,9.69231v77.53846h29.07692v-77.53846c5.33834,0 9.69231,-4.35397 9.69231,-9.69231v-9.69231zM184.15385,96.92308v9.69231c0,5.33834 4.35397,9.69231 9.69231,9.69231v77.53846h29.07692v-77.53846c5.33834,0 9.69231,-4.35397 9.69231,-9.69231v-9.69231zM19.38462,203.53846v19.38462h-9.69231c-5.33834,0 -9.69231,4.35397 -9.69231,9.69231v9.69231c0,5.33834 4.35397,9.69231 9.69231,9.69231h222.92308c5.33834,0 9.69231,-4.35397 9.69231,-9.69231v-9.69231c0,-5.33834 -4.35397,-9.69231 -9.69231,-9.69231h-9.69231v-19.38462z\"></path>\n          </g>\n        </g>\n        <path\n          d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126h0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\n          fill=\"none\"></path>\n        <path\n          d=\"M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96v0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z\"\n          fill=\"none\"></path>\n        <path d=\"\" fill=\"none\"></path>\n        <path d=\"\" fill=\"none\"></path>\n      </g>\n    </g>\n  </svg>\n\n  <br>\n  <h2>Welcome to Library management system</h2><br>\n</div>\n\n<div class=\"btn-group-horizontal btncenter\">\n\n  <!--<h2 class=\"text-small-topic welcome\">Select your function</h2><br>-->\n\n  <a routerLink=\"/componet/form-additem\">\n    <button type=\"button\" class=\"btn btn-primary\">Add Items</button>\n  </a>\n  <a routerLink=\"/componet/form-remitems\">\n    <button type=\"button\" class=\"btn btn-secondary\">Remove Items</button>\n  </a>\n  <a routerLink=\"/componet/form-borrowitem\">\n    <button type=\"button\" class=\"btn btn-success\">Borrow Item</button>\n  </a>\n  <br>\n  <a routerLink=\"/componet/form-returnitem\">\n    <button type=\"button\" class=\"btn btn-danger\">Return Item</button>\n  </a>\n  <a routerLink=\"/componet/form-listitems\">\n    <button type=\"button\" class=\"btn btn-warning\">List Items</button>\n  </a>\n  <a routerLink=\"/componet/form-reportgen\">\n    <button type=\"button\" class=\"btn btn-info\">Generate report</button>\n  </a>\n\n  <br><br>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/componet/main-menu/main-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/componet/main-menu/main-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
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

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/componet/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/componet/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/componet/navbar/navbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/componet/navbar/navbar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componet/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/componet/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"https://img.icons8.com/metro/50/16a085/library.png\" width=\"30\" height=\"30\"\n         class=\"d-inline-block align-top\" alt=\"\">\n    Westminster Library Manager\n  </a>\n\n  <!--\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n    -->\n</nav>\n\n"

/***/ }),

/***/ "./src/app/componet/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/componet/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/componet/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/componet/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AcerTM\Desktop\IIT 2nd Year Collection\OOP\OVERNIGHT CW\overnightcw 04\ocw4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map