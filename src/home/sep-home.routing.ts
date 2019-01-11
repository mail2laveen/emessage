import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { SepHomeComponent } from "./components/sep-home.component";




const sepHomeRoutesConfig: Routes = [
    {
        path: "",
        component: SepHomeComponent
    }

];

export const sepHomeRouting:ModuleWithProviders=RouterModule.forChild(sepHomeRoutesConfig);