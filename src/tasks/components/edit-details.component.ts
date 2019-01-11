import { Component, OnInit } from '@angular/core';
import { SyneTasksService } from '../services/syne-tasks.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronTask } from '../models/syne-task';
import { TaskForm } from '../models/task-form';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'proj-details',
    templateUrl: '../views/edit-task.component.html'
})

export class EditDetailsComponent implements OnInit {
    constructor(private _emplService:SyneTasksService, private _activatedRoute:ActivatedRoute, private _router: Router) { }
    pageTitle:String ="Details of - ";
    taskDetails:SynechronTask;
    task: TaskForm = new TaskForm();

    updateTask(): void {
        this._emplService.updateTask(this.task.newTaskForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/tasks");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }

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