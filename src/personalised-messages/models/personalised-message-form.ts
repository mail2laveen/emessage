import { FormGroup, Validators, FormControl } from "@angular/forms";


export class PersonalisedMsgForm {

    messageForm = new FormGroup({
        messageId: new FormControl(0, Validators.required),
        senderId: new FormControl(undefined, Validators.required),
        smsType: new FormControl(undefined, Validators.required),
        smsMethod: new FormControl(undefined, Validators.required),
        mobile: new FormControl(undefined, Validators.required),
        message: new FormControl(undefined, Validators.required),
        isRemoveDuplicates: new FormControl(undefined, Validators.required),
        count: new FormControl(undefined, Validators.required),
        template: new FormControl(undefined, Validators.required),
        date: new FormControl(undefined, Validators.required),
        scheduleDate: new FormControl(undefined, Validators.required),
    });
}