import { FormGroup, Validators, FormControl } from "../../../node_modules/@angular/forms";


export class StorieForm {

    newStorieForm = new FormGroup({
        storyId: new FormControl(0, Validators.required),
        storyName: new FormControl(undefined, Validators.required),
        projId: new FormControl(0, Validators.required),
        startDate: new FormControl(undefined, Validators.required),
        endDate: new FormControl(undefined, Validators.required),
    });
}