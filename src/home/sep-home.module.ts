import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SepHomeComponent } from './components/sep-home.component';
import { sepHomeRouting } from './sep-home.routing';
import { SyneDashboardService } from './services/syne-dashboard.service';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
    imports: [CommonModule,sepHomeRouting,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [SepHomeComponent],
    providers: [SyneDashboardService],
})
export class SepHomeModule { }
