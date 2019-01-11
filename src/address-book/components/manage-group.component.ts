import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../models/group';

@Component({
    selector: 'manage-group',
    templateUrl: '../views/manage-group.component.html'
})

export class ManageGroupComponent implements OnInit {
    constructor(private _groupService:GroupService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    groupList:Group[] = [];

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(
            urlParams => {
                this._groupService.getAllGroups().subscribe(
                    data => this.groupList = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }

    ngOnDestroy(): void {
        this.groupList = [];
    }
}