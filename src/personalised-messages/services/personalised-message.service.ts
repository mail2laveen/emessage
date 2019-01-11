import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonalisedMessage } from "../models/personalised-message-impl";
import { IpersonalisedMessage } from "../models/personalised-message";



@Injectable()
export class PersonalisedMsg {
    constructor(private __http: HttpClient) { }

    addNewMessage(msg:PersonalisedMessage){
        return this.__http.post<string>("http://localhost:9090/api/mobileMessage",msg);
    }
    getSingleMsg(messageId:string):Observable<IpersonalisedMessage>{
        return this.__http.get<IpersonalisedMessage>("http://localhost:9090/api/bugs/"+messageId);
    }
}