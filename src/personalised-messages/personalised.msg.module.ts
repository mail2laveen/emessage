import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { messaagesRoutes } from './personalised.msg.routing';
import { PersonalisedMsg } from './services/personalised-message.service';
import { RouterModule } from '@angular/router';
import { PersonalisedMsgComponent } from './components/personalised-message.component';
import { PersonalisedMsgDetailsComponent } from './components/personalised-message-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';

@NgModule({
    imports: [CommonModule,messaagesRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [PersonalisedMsgDetailsComponent,PersonalisedMsgComponent,JoinDate,FirstLetter],
    
    providers: [PersonalisedMsg],
})
export class PersonalisedMsgModule { }
