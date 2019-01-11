import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ContactForm } from '../models/contact-form';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
    selector: 'new-contact',
    templateUrl: '../views/add-contact.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class AddContactComponent implements OnInit {
    constructor(private _contactService: ContactService, private _groupService: GroupService, private _router: Router, private _activatedRoute:ActivatedRoute) { }
    pageTitle: string = "Add New Contact";
    contact: ContactForm = new ContactForm();
    groupList:Group[] = [];

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(
            urlParams => {
                this._groupService.getAllGroups().subscribe(
                    data => this.groupList = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
    ngOnDestroy(): void {
        this.groupList = [];
    }

    addNewContact(): void {
        this._contactService.addNewContact(this.contact.newContactForm.value).subscribe(
            data => {
                alert("Added sucessfully!");
                this.contact = new ContactForm();
                console.log(data);
                this._router.navigateByUrl("/contacts");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/contacts");
    }
}