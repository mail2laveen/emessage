import { Component, OnInit } from '@angular/core';
import { MobileMsg } from '../services/mobile-message.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ImobileMessage } from '../models/mobile-message';

@Component({
    selector: 'mobile-msg-details',
    templateUrl: '../views/mobile-msg.component.html'
})

export class MobileMsgDetailsComponent implements OnInit {
    constructor(private _msgService:MobileMsg, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    msgDetails:ImobileMessage;

    ngOnInit(): void {
        let msgId: string = "0";
        this._activatedRoute.params.subscribe(
            urlParams => {
                msgId = urlParams["id"];
                this._msgService.getSingleMsg(msgId).subscribe(
                    data => this.msgDetails = data,
                    err => console.log(err),
                    () => console.log("Service call is completed")

                );
            }
        )

    }
}