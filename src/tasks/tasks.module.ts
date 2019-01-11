import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list.component';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { tasksRoutes } from './Tasks.routing';
import { SyneTasksService } from './services/syne-tasks.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { NewTaskComponent } from './components/new-task.component';
import { TaskDetailsComponent } from './components/task-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';
import { EditDetailsComponent } from "./components/edit-details.component";

@NgModule({
    imports: [CommonModule,tasksRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [EditDetailsComponent,TasksListComponent,NewTaskComponent,TaskDetailsComponent,JoinDate,FirstLetter],
    
    providers: [SyneTasksService],
})
export class TasksModule { }
