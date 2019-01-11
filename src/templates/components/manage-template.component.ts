import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute } from '@angular/router';
import { Template } from '../models/template';

@Component({
    selector: 'manage-template',
    templateUrl: '../views/manage-template.component.html'
})

export class ManageTemplateComponent implements OnInit {
    constructor(private _templateService:TemplateService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    templateList:Template[];

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(
            urlParams => {
                this._templateService.getAllTemplates().subscribe(
                    data => {this.templateList = data; console.log(data);},
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}