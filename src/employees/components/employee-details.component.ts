import { Component, OnInit } from '@angular/core';
import { SyneEmployeesService } from '../services/syne-employees.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronEmployee } from '../models/syne-employee';

@Component({
    selector: 'emp-details',
    templateUrl: '../views/employee-details.component.html'
})

export class EmployeeDetailsComponent implements OnInit {
    constructor(private _emplService:SyneEmployeesService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    employeeDetails:SynechronEmployee;

    ngOnInit(): void {
        let eid: number = 0;
        this._activatedRoute.params.subscribe(
            urlParams => {
                eid = urlParams["id"];
                this._emplService.getSingleEmployee(eid).subscribe(
                    data => this.employeeDetails = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}