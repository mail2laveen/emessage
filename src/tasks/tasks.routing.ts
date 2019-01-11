import {  ModuleWithProviders} from "@angular/core";
import { RouterModule,Routes, Router } from "@angular/router";
import { TasksListComponent } from "./components/tasks-list.component";
import { NewTaskComponent } from "./components/new-task.component";
import { TaskDetailsComponent } from "./components/task-details.component";
import { EditDetailsComponent } from "./components/edit-details.component";

const taskRoutesConfig:Routes=[
    {
        path:"",
        component:TasksListComponent
    },
    {
        path:"edit/:id",
        component: EditDetailsComponent
    },
    {
        path: "new",
        component: NewTaskComponent
    },
    {
        path:":id",
        component: TaskDetailsComponent
    }

    
];

export const tasksRoutes:ModuleWithProviders=RouterModule.forChild(taskRoutesConfig);