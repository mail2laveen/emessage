import { Component, OnInit } from '@angular/core';
import { SyneStoriesService } from '../services/syne-stories.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SynechronStorie } from '../models/syne-storie';

@Component({
    selector: 'proj-details',
    templateUrl: '../views/storie-details.component.html'
})

export class StorieDetailsComponent implements OnInit {
    constructor(private _emplService:SyneStoriesService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    storieDetails:SynechronStorie;

    ngOnInit(): void {
        let eid: number = 0;
        this._activatedRoute.params.subscribe(
            urlParams => {
                eid = urlParams["id"];
                this._emplService.getSingleStorie(eid).subscribe(
                    data => this.storieDetails = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}