import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list.component';
import { ProjectsCardComponent } from './components/projects-card.component';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { projectsRoutes } from './Projects.routing';
import { SyneProjectsService } from './services/syne-projects.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { NewProjectComponent } from './components/new-project.component';
import { ProjectDetailsComponent } from './components/project-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';

@NgModule({
    imports: [CommonModule,projectsRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [ProjectsListComponent,ProjectsCardComponent,NewProjectComponent,ProjectDetailsComponent,JoinDate,FirstLetter],
    
    providers: [SyneProjectsService],
})
export class ProjectsModule { }
