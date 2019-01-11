import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SyneTasksService } from '../services/syne-tasks.service';
import { TaskForm } from '../models/task-form';

@Component({
    selector: 'new-task',
    templateUrl: '../views/new-task.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class NewTaskComponent implements OnInit {
    constructor(private _taskService: SyneTasksService, private _router: Router) { }
    pageTitle: string = "Add New Task";
    task: TaskForm = new TaskForm();

    ngOnInit() { }
    addNewTask(): void {
        this._taskService.addNewTask(this.task.newTaskForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/tasks");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/tasks");
    }
}