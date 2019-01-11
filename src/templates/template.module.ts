import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTemplateComponent } from "./components/add-template.component";
import { ManageTemplateComponent } from "./components/manage-template.component";
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { templateRoutes } from './template.routing';
import { TemplateService } from './services/template.service';
import { RouterModule } from '@angular/router';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';


@NgModule({
    imports: [CommonModule,templateRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [AddTemplateComponent,ManageTemplateComponent,JoinDate,FirstLetter],
    
    providers: [TemplateService],
})
export class Template { }
