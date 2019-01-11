import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SyneStoriesService } from '../services/syne-stories.service';
import { StorieForm } from '../models/storie-form';

@Component({
    selector: 'new-storie',
    templateUrl: '../views/new-storie.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class NewStorieComponent implements OnInit {
    constructor(private _storieService: SyneStoriesService, private _router: Router) { }
    pageTitle: string = "Add New Storie";
    storie: StorieForm = new StorieForm();

    ngOnInit() { }
    addNewStorie(): void {
        this._storieService.addNewStorie(this.storie.newStorieForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/stories");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/stories");
    }
}