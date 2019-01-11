import { FormGroup, Validators, FormControl } from "../../../node_modules/@angular/forms";


export class ProjectForm {

    newProjectForm = new FormGroup({
        projId: new FormControl(0, Validators.required),
        projName: new FormControl(undefined, Validators.required),
        client: new FormControl(undefined, Validators.required),
        startDate: new FormControl(undefined, Validators.required),
        endDate: new FormControl(undefined, Validators.required),
    });
}