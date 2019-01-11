webpackJsonp([3],{

/***/ 493:
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
var employees_list_component_1 = __webpack_require__(499);
var employees_routing_1 = __webpack_require__(507);
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, employees_routing_1.employeesRoutes],
            exports: [],
            declarations: [employees_list_component_1.EmployeesListComponent],
            providers: [],
        })
    ], EmployeesModule);
    return EmployeesModule;
}());
exports.EmployeesModule = EmployeesModule;


/***/ }),

/***/ 499:
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
var EmployeesListComponent = /** @class */ (function () {
    function EmployeesListComponent() {
        //employee:SynechronEmployee;
        this.pageTitle = "Synechron Employe List";
        this.subTitle = "Core Development Employee Teams";
        this.employees = [
            {
                employeeId: 1000,
                employeeName: "Subrat",
                address: "Bomonahalli",
                city: "Bangalore",
                state: "Karnataka",
                country: "India",
                phone: "+91 8050947645",
                email: "Spanda@outlook.com",
                joinDate: new Date(),
                platform: "Java",
                avatar: "images/noimage.png"
            },
            {
                employeeId: 1001,
                employeeName: "Mukesh",
                address: "SilkBoard",
                city: "Delhi",
                state: "Delhi",
                country: "India",
                phone: "+92 80509478945",
                email: "subpanda@outlook.com",
                joinDate: new Date(),
                platform: "Microsoft",
                avatar: "images/noimage1.png"
            },
            {
                employeeId: 1002,
                employeeName: "Labin",
                address: "QueensLand",
                city: "Sydney",
                state: "Sydney",
                country: "Australia",
                phone: "+91 8050947852",
                email: "subrat@outlook.com",
                joinDate: new Date(),
                platform: "OpenStack",
                avatar: "images/noimage2.png"
            }
        ];
        // this.employee= new SynechronEmployee();
        // this.employee.employeeId=1000;
        // this.employee.employeeName="Subrat";
        // this.employee.address="Bomonahalli";
        // this.employee.city="Bangalore";
        // this.employee.state="Karnataka";
        // this.employee.country="India";
        // this.employee.phone="+91 8050947645";
        // this.employee.email="Spanda@outlook.com";
        // this.employee.joinDate= new Date();
        // this.employee.platform="Java";
        // this.employee.avatar="images/noimage.png";
    }
    EmployeesListComponent = __decorate([
        core_1.Component({
            selector: "employees-list",
            template: __webpack_require__(506)
        }),
        __metadata("design:paramtypes", [])
    ], EmployeesListComponent);
    return EmployeesListComponent;
}());
exports.EmployeesListComponent = EmployeesListComponent;


/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports = "<h1 [innerText]=\"pageTitle\"></h1>\r\n<hr>\r\n<h5 [innerText]=\"subTitle\"></h5>\r\n<table class=\"table table-hover table-striped\" *ngIf=\"employees.length>0;else noDataTemplate\">\r\n    <thead>\r\n        <tr>\r\n            <th>EmployeeName</th>\r\n            <th>City</th>\r\n            <th>Contact Number</th>\r\n            <th>Email</th>\r\n            <th>Show Details</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let employee of employees\">\r\n            <td><span [innerText]=\"employee.employeeName\"></span></td>\r\n            <td><span [innerText]=\"employee.city\"></span></td>\r\n            <td><span [innerText]=\"employee.phone\"></span></td>\r\n            <td><span [innerText]=\"employee.email\"></span></td>\r\n            <td><button class=\"btn btn-success\">More Details..</button></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<ng-template #noDataTemplate>\r\n    <h4>No Employees Data Found!! Please try after some time..</h4>\r\n</ng-template>";

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(98);
var employees_list_component_1 = __webpack_require__(499);
var employeeRoutesConfig = [
    {
        path: "",
        component: employees_list_component_1.EmployeesListComponent
    }
];
exports.employeesRoutes = router_1.RouterModule.forChild(employeeRoutesConfig);


/***/ })

});