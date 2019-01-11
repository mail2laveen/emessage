import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';
import { GroupForm } from '../models/group-form';

@Component({
    selector: 'new-employee',
    templateUrl: '../views/add-group.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class AddGroupComponent implements OnInit {
    constructor(private _groupService: GroupService, private _router: Router) { }
    pageTitle: string = "Add New Group";
    group: GroupForm = new GroupForm();

    ngOnInit() { }
    addNewGroup(): void {
        this._groupService.addNewGroup(this.group.newGroupForm.value).subscribe(
            data => {
                console.log(data);
                alert("Added sucessfully!");
                this.group = new GroupForm();
                this._router.navigateByUrl("/address/group/new");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/groups");
    }
}