import { Component } from "@angular/core";

import { SynechronEmployee } from "../models/syne-employee";
import { SyneEmployeesService } from "../services/syne-employees.service";

@Component({
    selector: "employees-list",
    templateUrl: "../views/employees-list.component.html"
})


export class EmployeesListComponent {
    constructor(private _employeeService:SyneEmployeesService) {
          }
    //employee:SynechronEmployee;
    pageTitle: string = "Synechron Employe List";
    subTitle: string = "Core Development Employee Teams";
    employees: SynechronEmployee[] = [];

    ngOnInit(): void {
        this._employeeService.getAllEmployees().subscribe(
            data => this.employees = data,
            err => console.log(err),
            () => console.log("Service call completed!!!")
        );
    }
    ngOnDestroy(): void {
        this.employees = [];
    }

}