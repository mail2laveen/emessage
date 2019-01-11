import {NgModule} from "@angular/core";
import{BrowserModule} from "@angular/platform-browser";
import { rootRoutes } from "./app.routing";

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
//Dependency Modules

import { NavigationModule } from "./navigation/navigation.module";

//Components
import{AppComponent} from "./app.component";

@NgModule({
imports:[BrowserModule,NavigationModule,rootRoutes,ChartModule.forRoot(highcharts)],        //Angular Inbuild modules or custom modules
exports:[],                     // anyting we need to export out for later use
declarations:[AppComponent,],   //Components, Pipes and Directives
providers:[],                   // Services
bootstrap:[AppComponent]        // Root component(s)
})
export class AppModule{}