import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { ProjectsListComponent } from "./components/projects-list.component";
import { NewProjectComponent } from "./components/new-project.component";
import { ProjectDetailsComponent } from "./components/project-details.component";
import { ProjectsCardComponent } from "./components/projects-card.component";

const projectRoutesConfig:Routes=[
    {
        path:"",
        component:ProjectsListComponent
    },
    {
        path: "new",
        component: NewProjectComponent
    },
    {
        path:"card",
        component: ProjectsCardComponent
    },
    {
        path:":id",
        component: ProjectDetailsComponent
    }

    
];

export const projectsRoutes:ModuleWithProviders=RouterModule.forChild(projectRoutesConfig);