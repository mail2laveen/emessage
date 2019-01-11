import { FormGroup, Validators, FormControl } from "@angular/forms";


export class GroupForm {

    newGroupForm = new FormGroup({
        groupId: new FormControl(0, Validators.required),
        groupName: new FormControl(undefined, Validators.required),
        status: new FormControl(undefined, Validators.required),
        description: new FormControl(undefined, Validators.required),
    });
}