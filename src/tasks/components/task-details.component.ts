import { Component, OnInit } from '@angular/core';
import { SyneTasksService } from '../services/syne-tasks.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronTask } from '../models/syne-task';

@Component({
    selector: 'proj-details',
    templateUrl: '../views/task-details.component.html'
})

export class TaskDetailsComponent implements OnInit {
    constructor(private _emplService:SyneTasksService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    taskDetails:SynechronTask;

    ngOnInit(): void {
        let eid: number = 0;
        this._activatedRoute.params.subscribe(
            urlParams => {
                eid = urlParams["id"];
                this._emplService.getSingleTask(eid).subscribe(
                    data => this.taskDetails = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}