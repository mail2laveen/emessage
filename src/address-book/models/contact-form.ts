import { FormGroup, Validators, FormControl } from "@angular/forms";


export class ContactForm {

    newContactForm = new FormGroup({
        groupId: new FormControl(0, Validators.required),
        contactId: new FormControl(undefined, Validators.required),
        contactName: new FormControl(undefined, Validators.required),
        mobile: new FormControl(undefined, Validators.required),
        email: new FormControl(undefined, Validators.required),
        description: new FormControl(undefined, Validators.required),
    });
}