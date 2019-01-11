import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupComponent } from './components/add-group.component';
import { ManageGroupComponent } from './components/manage-group.component';
import { AddContactComponent } from "./components/add-contact.component";
import { ManageContactComponent } from "./components/manage-contact.component";
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { addressBookRoutes } from './addressBook.routing';
import { GroupService } from './services/group.service';
import { ContactService } from './services/contact.service';
import { RouterModule } from '@angular/router';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';


@NgModule({
    imports: [CommonModule,addressBookRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [AddGroupComponent,ManageGroupComponent,AddContactComponent,ManageContactComponent,JoinDate,FirstLetter],
    
    providers: [GroupService,ContactService],
})
export class AddressBook { }
