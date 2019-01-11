import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SyneProjectsService } from '../services/syne-projects.service';
import { ProjectForm } from '../models/project-form';

@Component({
    selector: 'new-project',
    templateUrl: '../views/new-project.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class NewProjectComponent implements OnInit {
    constructor(private _projectService: SyneProjectsService, private _router: Router) { }
    pageTitle: string = "Add New Project";
    project: ProjectForm = new ProjectForm();

    ngOnInit() { }
    addNewProject(): void {
        this._projectService.addNewProject(this.project.newProjectForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/projects");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/projects");
    }
}