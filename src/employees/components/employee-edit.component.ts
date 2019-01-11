import { Component, OnInit, } from '@angular/core';
import { SyneEmployeesService } from '../services/syne-employees.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronEmployee } from '../models/syne-employee';
import { EmployeeForm } from '../models/employee-form';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, Validators, FormControl } from "../../../node_modules/@angular/forms";

@Component({
    selector: 'emp-details',
    templateUrl: '../views/edit-employee.component.html'
})

export class EmployeeEditComponent implements OnInit {
    constructor(private _emplService:SyneEmployeesService, private _activatedRoute:ActivatedRoute, private _router: Router) { }
    pageTitle:String ="Details of - ";
    employeeDetails:SynechronEmployee;
    employee: EmployeeForm = new EmployeeForm();
    
    updateEmployee(): void {
        this._emplService.updateEmployee(this.employee.newEmployeeForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/employees");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }

    ngOnInit(): void {
        let eid: number = 0;
        this._activatedRoute.params.subscribe(
            urlParams => {
                eid = urlParams["id"];
                 this._emplService.getSingleEmployee(eid).subscribe(
                    data => {
                        this.employeeDetails = data;console.log(data);
                        (<FormControl>this.employee.newEmployeeForm.controls['dept']).setValue(data.employeeId);
                    },
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}