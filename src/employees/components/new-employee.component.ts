import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SyneEmployeesService } from '../services/syne-employees.service';
import { EmployeeForm } from '../models/employee-form';

@Component({
    selector: 'new-employee',
    templateUrl: '../views/new-employee.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class NewEmployeeComponent implements OnInit {
    constructor(private _employeeService: SyneEmployeesService, private _router: Router) { }
    pageTitle: string = "Add New Employee";
    employee: EmployeeForm = new EmployeeForm();

    ngOnInit() { }
    addNewEmployee(): void {
        this._employeeService.addNewEmployee(this.employee.newEmployeeForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/employees");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/employees");
    }
}