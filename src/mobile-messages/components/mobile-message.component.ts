import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { MobileMsg } from '../services/mobile-message.service';
import { MobileMsgForm } from '../models/mobile-message-form';

@Component({
    selector: 'new-mobile-msg',
    templateUrl: '../views/new-mobile-msg.component.html',
    styles:[
        'input.ng-invalid {border-left:3px solid red}',
        'input.ng-valid {border-left:3px solid green}'
    ]
})

export class MobileMsgComponent implements OnInit {
    constructor(private _msgService: MobileMsg, private _router: Router) { }
    pageTitle: string = "Add New Message";
    message: MobileMsgForm = new MobileMsgForm();

    ngOnInit() { }

    selectTemplate() : void {
        alert("template");
    }
    
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