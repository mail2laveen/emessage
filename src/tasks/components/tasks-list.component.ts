import { Component } from "@angular/core";

import { SynechronTask } from "../models/syne-task";
import { SyneTasksService } from "../services/syne-tasks.service";

@Component({
    selector: "tasks-list",
    templateUrl: "../views/tasks-list.component.html"
})


export class TasksListComponent {
    constructor(private _taskService:SyneTasksService) {
          }
    //task:SynechronTask;
    pageTitle: string = "Synechron Employe List";
    subTitle: string = "Core Development Task Teams";
    tasks: SynechronTask[] = [];

    ngOnInit(): void {
        this._taskService.getAllTasks().subscribe(
            data => this.tasks = data,
            err => console.log(err),
            () => console.log("Service call completed!!!")
        );
    }
    ngOnDestroy(): void {
        this.tasks = [];
    }

}