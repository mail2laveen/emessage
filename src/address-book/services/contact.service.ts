import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "../models/contact";



@Injectable()
export class ContactService{
    constructor(private __http: HttpClient) { }

    getAllContacts():Observable<Contact[]>{
        return this.__http.get<Contact[]>("http://localhost:8080/contact");
    }
    getSingleContact(contactId:number):Observable<Contact>{
        return this.__http.get<Contact>("http://localhost:8080/contact"+contactId);
    }
    addNewContact(contact:Contact){
        return this.__http.post<string>("http://localhost:8080/contact",contact);
    }
    updateContact(contact:Contact){
        return this.__http.post<string>("http://localhost:8080/contact",contact);
    }
    goToHome(){
        return this.__http.get("http://localhost:8080/contact");
    }
}