import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { MobileMsgComponent } from "./components/mobile-message.component";
import { MobileMsgDetailsComponent } from "./components/moble-message-details.component";

const messaageRoutesConfig:Routes=[
    {
        path:"",
        component:MobileMsgComponent
    },
    {
        path:":id",
        component: MobileMsgDetailsComponent
    }

    
];

export const messaagesRoutes:ModuleWithProviders=RouterModule.forChild(messaageRoutesConfig);