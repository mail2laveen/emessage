import { Component, OnInit } from '@angular/core';
import { PersonalisedMsg } from '../services/personalised-message.service';
import { ActivatedRoute } from '@angular/router';
import { IpersonalisedMessage } from '../models/personalised-message';

@Component({
    selector: 'personalised-msg-details',
    templateUrl: '../views/personalised-msg.component.html'
})

export class PersonalisedMsgDetailsComponent implements OnInit {
    constructor(private _msgService:PersonalisedMsg, private _activatedRoute:ActivatedRoute) { }
    pageTitle:String ="Details of - ";
    msgDetails:IpersonalisedMessage;

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