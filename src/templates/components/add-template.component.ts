import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '../services/template.service';
import { TemplateForm } from '../models/template-form';

@Component({
    selector: 'new-employee',
    templateUrl: '../views/add-template.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class AddTemplateComponent implements OnInit {
    constructor(private _templateService: TemplateService, private _router: Router) { }
    pageTitle: string = "Add New Template";
    template: TemplateForm = new TemplateForm();

    ngOnInit() { }
    addNewTemplate(): void {
        this._templateService.addNewTemplate(this.template.newTemplateForm.value).subscribe(
            data => {
                alert("Added sucessfully!");
                this.template = new TemplateForm();
                this._router.navigateByUrl("/template");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/templates");
    }
}