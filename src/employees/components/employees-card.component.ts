import { Component } from "@angular/core";

import { SynechronEmployee } from "../models/syne-employee";
import { SyneEmployeesService } from "../services/syne-employees.service";

@Component({
    selector: "employees-Card",
    templateUrl: "../views/employees-card.component.html"
})


export class EmployeesCardComponent {
    constructor(private _employeeService:SyneEmployeesService) {
          }
    //employee:SynechronEmployee;
    pageTitle: string = "Synechron Employes";
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