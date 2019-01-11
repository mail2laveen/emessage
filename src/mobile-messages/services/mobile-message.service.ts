import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { MobileMessage } from "../models/mobile-message-impl";
import { ImobileMessage } from "../models/mobile-message";



@Injectable()
export class MobileMsg {
    constructor(private __http: HttpClient) { }

    addNewMessage(msg:MobileMessage){
        return this.__http.post<string>("http://localhost:9090/api/mobileMessage",msg);
    }
    getSingleMsg(messageId:string):Observable<ImobileMessage>{
        return this.__http.get<ImobileMessage>("http://localhost:9090/api/bugs/"+messageId);
    }
    // getAllBugs():Observable<SynechronBug[]>{
    //     return this.__http.get<SynechronBug[]>("http://localhost:9090/api/bugs");
    // }
    // updateBug(bug:SynechronBug){
    //     return this.__http.post<string>("http://localhost:9090/api/updateBug",bug);
    // }
    // goToHome(){
    //     return this.__http.get("http://localhost:9090/api/bugs");
    // }
}