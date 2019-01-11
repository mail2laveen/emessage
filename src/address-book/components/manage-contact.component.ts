import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
    selector: 'manage-contact',
    templateUrl: '../views/manage-contact.component.html'
})

export class ManageContactComponent implements OnInit {
    constructor(private _contactService:ContactService, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    contactList:Contact[];

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(
            urlParams => {
                this._contactService.getAllContacts().subscribe(
                    data => this.contactList = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}