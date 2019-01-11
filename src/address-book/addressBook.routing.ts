import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { AddGroupComponent } from "./components/add-group.component";
import { ManageGroupComponent } from "./components/manage-group.component";
import { AddContactComponent } from "./components/add-contact.component";
import { ManageContactComponent } from "./components/manage-contact.component";


const groupRoutesConfig:Routes=[
    {
        path:"group/all",
        component:ManageGroupComponent
    },
    {
        path: "group/new",
        component: AddGroupComponent
    },
    {
        path:"contact",
        component:ManageContactComponent
    },
    {
        path: "contact/new",
        component: AddContactComponent
    },
];

export const addressBookRoutes:ModuleWithProviders=RouterModule.forChild(groupRoutesConfig);