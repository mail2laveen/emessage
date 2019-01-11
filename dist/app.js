webpackJsonp([5],{

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__(486);
var platform_browser_dynamic_1 = __webpack_require__(201);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(29);
var platform_browser_1 = __webpack_require__(77);
var app_routing_1 = __webpack_require__(487);
//Dependency Modules
var navigation_module_1 = __webpack_require__(488);
//Components
var app_component_1 = __webpack_require__(491);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, navigation_module_1.NavigationModule, app_routing_1.rootRoutes],
            exports: [],
            declarations: [app_component_1.AppComponent,],
            providers: [],
            bootstrap: [app_component_1.AppComponent] // Root component(s)
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(98);
var defaultRoute = [
    {
        path: "",
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) { resolve(__webpack_require__(204)[')SepHomeModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }
];
var homeRoute = [
    {
        path: "home",
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) { resolve(__webpack_require__(204)['SepHomeModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }
];
var employeesRoute = [{
        path: "employees",
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(3).then((function (require) { resolve(__webpack_require__(493)['EmployeesModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }];
var eventsRoute = [
    {
        path: "events",
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(494)['EventsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }
];
var jphRoute = [
    {
        path: "jph",
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(495)['JphModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
    }
];
var appRoutes = homeRoute.concat(employeesRoute, eventsRoute, jphRoute, defaultRoute);
exports.rootRoutes = router_1.RouterModule.forRoot(appRoutes);
/* EAGER Loading

import { SepHomeComponent } from "./home/components/sep-home.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EventListComponent } from "./events/components/events-list.component";
import { EventDetailsComponent } from "./events/components/event-details.component";
import { NewEventComponent } from "./events/components/new-event.component";
import { JphPostsListComponent } from "./jph/components/jph-posts-list.component";


const appRoutes: Routes = [
    {
        path: '',
        component: SepHomeComponent
    },
    {
        path: 'home',
        component: SepHomeComponent
    },
    {
        path: 'employees',
        component: EmployeesListComponent
    },
    {
        path: 'events',
        component: EventListComponent
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent
    },
    {
        path: 'newevent',
        component: NewEventComponent
    },
    {
        path: 'jph/post',
        component: JphPostsListComponent
    }
];*/


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(29);
var sep_menu_component_1 = __webpack_require__(489);
var common_1 = __webpack_require__(62);
var router_1 = __webpack_require__(98);
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [sep_menu_component_1.SepMenuComponent],
            declarations: [sep_menu_component_1.SepMenuComponent],
            providers: [],
        })
    ], NavigationModule);
    return NavigationModule;
}());
exports.NavigationModule = NavigationModule;


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(29);
var SepMenuComponent = /** @class */ (function () {
    function SepMenuComponent() {
        this.menuItems = [
            //"images/synechron-logo.png"
            "Synechron EP",
            "Home",
            "Employees",
            "Events",
            "Jph Posts",
            "Jph Users",
            "Register Event"
        ];
    }
    SepMenuComponent.prototype.ngOnInit = function () { };
    SepMenuComponent = __decorate([
        core_1.Component({
            selector: 'sep-menu',
            template: __webpack_require__(490)
        }),
        __metadata("design:paramtypes", [])
    ], SepMenuComponent);
    return SepMenuComponent;
}());
exports.SepMenuComponent = SepMenuComponent;


/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">{{menuItems[0]}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\"  routerLink=\"/home\">{{menuItems[1]}}\r\n                    <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  routerLink=\"/employees\">{{menuItems[2]}}</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" routerLink=\"/events\">{{menuItems[3]}}\r\n                    <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  routerLink=\"/jph/post\">{{menuItems[4]}}</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\">{{menuItems[5]}}\r\n                    <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  routerLink=\"/newevent\">{{menuItems[6]}}</a>\r\n            </li>\r\n            </ul>\r\n    </div>\r\n</nav>";

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(29);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = "Welocme to Synechron Pune";
        this.subTitle = "Head Office of Synechron!!!";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(492)
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<!-- <h1> {{pageTitle}}</h1>\r\n<hr>\r\n<h5> {{subTitle}} </h5> -->\r\n<!-- <h1 [innerText]=\"pageTitle\"></h1>\r\n<hr>\r\n<h5 [innerText]=\"subTitle\"></h5> -->\r\n<!-- <employees-list></employees-list> \r\n<events-list></events-list> \r\n<jph-posts-list></jph-posts-list>\r\n<new-event></new-event> -->\r\n<sep-menu></sep-menu>\r\n<div class=\"container\">\r\n\r\n    <router-outlet>\r\n        \r\n    </router-outlet>\r\n</div>\r\n";

/***/ })

},[485]);