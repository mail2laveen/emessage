import { Component } from "@angular/core";

import { SynechronProject } from "../models/syne-project";
import { SyneProjectsService } from "../services/syne-projects.service";

@Component({
    selector: "projects-Card",
    templateUrl: "../views/projects-card.component.html"
})


export class ProjectsCardComponent {
    constructor(private _projectService:SyneProjectsService) {
          }
    //project:SynechronProject;
    pageTitle: string = "Synechron Projects";
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