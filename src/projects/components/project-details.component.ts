import { Component, OnInit } from '@angular/core';
import { SyneProjectsService } from '../services/syne-projects.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronProject } from '../models/syne-project';

@Component({
    selector: 'proj-details',
    templateUrl: '../views/project-details.component.html'
})

export class ProjectDetailsComponent implements OnInit {
    constructor(private _emplService:SyneProjectsService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    projectDetails:SynechronProject;

    ngOnInit(): void {
        let eid: number = 0;
        this._activatedRoute.params.subscribe(
            urlParams => {
                eid = urlParams["id"];
                this._emplService.getSingleProject(eid).subscribe(
                    data => this.projectDetails = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}