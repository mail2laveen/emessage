import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list.component';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { storiesRoutes } from './Stories.routing';
import { SyneStoriesService } from './services/syne-stories.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { NewStorieComponent } from './components/new-storie.component';
import { StorieDetailsComponent } from './components/storie-details.component';
import { JoinDate } from './pipes/join-date.pipe';
import { FirstLetter } from './pipes/first-letter.pipe';

@NgModule({
    imports: [CommonModule,storiesRoutes,HttpClientModule,RouterModule,FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [StoriesListComponent,NewStorieComponent,StorieDetailsComponent,JoinDate,FirstLetter],
    
    providers: [SyneStoriesService],
})
export class StoriesModule { }
