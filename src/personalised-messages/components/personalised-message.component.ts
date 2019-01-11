import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalisedMsg } from '../services/personalised-message.service';
import { PersonalisedMsgForm } from '../models/personalised-message-form';

@Component({
    selector: 'new-personalised-msg',
    templateUrl: '../views/new-personalised-msg.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class PersonalisedMsgComponent implements OnInit {
    constructor(private _msgService: PersonalisedMsg, private _router: Router) { }
    pageTitle: string = "Add New Message";
    message: PersonalisedMsgForm = new PersonalisedMsgForm();

    ngOnInit() { }
    addNewMsg(): void {
        this._msgService.addNewMessage(this.message.messageForm.value).subscribe(
            data => {
                console.log(data);
                this._router.navigateByUrl("/messages");
            },
            err => console.log(err),
            () => console.log("Service Call completed"));

    }
    goToHome(): void {
        this._router.navigateByUrl("/messages");
    }
}