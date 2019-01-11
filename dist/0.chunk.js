webpackJsonp([0],{

/***/ 204:
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
var common_1 = __webpack_require__(62);
var sep_home_component_1 = __webpack_require__(498);
var sep_home_routing_1 = __webpack_require__(505);
var SepHomeModule = /** @class */ (function () {
    function SepHomeModule() {
    }
    SepHomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, sep_home_routing_1.sepHomeRouting],
            exports: [],
            declarations: [sep_home_component_1.SepHomeComponent],
            providers: [],
        })
    ], SepHomeModule);
    return SepHomeModule;
}());
exports.SepHomeModule = SepHomeModule;


/***/ }),

/***/ 498:
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
var SepHomeComponent = /** @class */ (function () {
    function SepHomeComponent() {
        this.pageTitle = "Synechron Events portal Home Page!!!";
    }
    SepHomeComponent.prototype.ngOnInit = function () { };
    SepHomeComponent = __decorate([
        core_1.Component({
            selector: 'sep-home',
            template: __webpack_require__(504)
        }),
        __metadata("design:paramtypes", [])
    ], SepHomeComponent);
    return SepHomeComponent;
}());
exports.SepHomeComponent = SepHomeComponent;


/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = "<h1 [innerText]=\"pageTitle\"></h1>";

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(98);
var sep_home_component_1 = __webpack_require__(498);
var sepHomeRoutesConfig = [
    {
        path: "",
        component: sep_home_component_1.SepHomeComponent
    }
];
exports.sepHomeRouting = router_1.RouterModule.forChild(sepHomeRoutesConfig);


/***/ })

});