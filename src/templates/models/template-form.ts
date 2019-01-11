import { FormGroup, Validators, FormControl } from "@angular/forms";


export class TemplateForm {

    newTemplateForm = new FormGroup({
        templateId: new FormControl(0, Validators.required),
        tittle: new FormControl(undefined, Validators.required),
        message: new FormControl(undefined, Validators.required),
    });
}