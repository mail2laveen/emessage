import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { AddTemplateComponent } from "./components/add-template.component";
import { ManageTemplateComponent } from "./components/manage-template.component";


const groupRoutesConfig:Routes=[
    {
        path:"new",
        component:AddTemplateComponent
    },
    {
        path: "",
        component: ManageTemplateComponent
    },
];

export const templateRoutes:ModuleWithProviders=RouterModule.forChild(groupRoutesConfig);