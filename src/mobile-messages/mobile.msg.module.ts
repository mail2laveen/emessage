import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { messaagesRoutes } from './mobile.msg.routing';
import { MobileMsg } from './services/mobile-message.service';
import { RouterModule } from '@angular/router';
import { MobileMsgComponent } from './components/mobile-message.component';
import { MobileMsgDetailsComponent } from './components/moble-message-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';
import {MatDialogModule} from "@angular/material";

@NgModule({
    imports: [CommonModule,messaagesRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [MobileMsgDetailsComponent,MobileMsgComponent,JoinDate,FirstLetter],
    
    providers: [MobileMsg],
})
export class MobileMsgModule { }
