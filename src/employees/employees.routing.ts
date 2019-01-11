import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { EmployeeEditComponent } from "./components/employee-edit.component";
import { EmployeesListComponent } from "./components/employees-list.component";
import { NewEmployeeComponent } from "./components/new-employee.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";
import { EmployeesCardComponent } from "./components/employees-card.component";


const employeeRoutesConfig:Routes=[
    {
        path:"",
        component:EmployeesListComponent
    },
    {
        path:"edit/:id",
        component: EmployeeEditComponent
    },
    {
        path: "new",
        component: NewEmployeeComponent
    },
    {
        path:"card",
        component: EmployeesCardComponent
    },
    {
        path:":id",
        component: EmployeeDetailsComponent
    }

    
];

export const employeesRoutes:ModuleWithProviders=RouterModule.forChild(employeeRoutesConfig);