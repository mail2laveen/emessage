import { Component } from "@angular/core";

import { SynechronProject } from "../models/syne-project";
import { SyneProjectsService } from "../services/syne-projects.service";

@Component({
    selector: "projects-list",
    templateUrl: "../views/projects-list.component.html"
})


export class ProjectsListComponent {
    constructor(private _projectService:SyneProjectsService) {
          }
    //project:SynechronProject;
    pageTitle: string = "Synechron Project List";
    subTitle: string = "Core Development Project Teams";
    projects: SynechronProject[] = [];

    ngOnInit(): void {
        this._projectService.getAllProjects().subscribe(
            data => this.projects = data,
            err => console.log(err),
            () => console.log("Service call completed!!!")
        );
    }
    ngOnDestroy(): void {
        this.projects = [];
    }

}