import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/employees-list.component';
import { EmployeesCardComponent } from './components/employees-card.component';
import { EmployeeEditComponent } from "./components/employee-edit.component";
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { employeesRoutes } from './employees.routing';
import { SyneEmployeesService } from './services/syne-employees.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { NewEmployeeComponent } from './components/new-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';


@NgModule({
    imports: [CommonModule,employeesRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [EmployeeEditComponent,EmployeesListComponent,EmployeesCardComponent,NewEmployeeComponent,EmployeeDetailsComponent,JoinDate,FirstLetter],
    
    providers: [SyneEmployeesService],
})
export class EmployeesModule { }
