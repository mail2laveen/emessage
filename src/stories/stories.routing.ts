import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { StoriesListComponent } from "./components/stories-list.component";
import { NewStorieComponent } from "./components/new-storie.component";
import { StorieDetailsComponent } from "./components/storie-details.component";

const storieRoutesConfig:Routes=[
    {
        path:"",
        component:StoriesListComponent
    },
    {
        path: "new",
        component: NewStorieComponent
    },
    {
        path:":id",
        component: StorieDetailsComponent
    }

    
];

export const storiesRoutes:ModuleWithProviders=RouterModule.forChild(storieRoutesConfig);