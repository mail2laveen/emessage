import { Component } from "@angular/core";

import { SynechronStorie } from "../models/syne-storie";
import { SyneStoriesService } from "../services/syne-stories.service";

@Component({
    selector: "stories-list",
    templateUrl: "../views/stories-list.component.html"
})


export class StoriesListComponent {
    constructor(private _storieService:SyneStoriesService) {
          }
    //storie:SynechronStorie;
    pageTitle: string = "Synechron Stories List";
    subTitle: string = "Core Development Storie Teams";
    stories: SynechronStorie[] = [];

    ngOnInit(): void {
        this._storieService.getAllStories().subscribe(
            data => this.stories = data,
            err => console.log(err),
            () => console.log("Service call completed!!!")
        );
    }
    ngOnDestroy(): void {
        this.stories = [];
    }

}