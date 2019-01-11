import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { PersonalisedMsgComponent } from "./components/personalised-message.component";
import { PersonalisedMsgDetailsComponent } from "./components/personalised-message-details.component";

const messaageRoutesConfig:Routes=[
    {
        path:"",
        component:PersonalisedMsgComponent
    },
    {
        path:":id",
        component: PersonalisedMsgDetailsComponent
    }

    
];

export const messaagesRoutes:ModuleWithProviders=RouterModule.forChild(messaageRoutesConfig);