import { FormGroup, Validators, FormControl } from "../../../node_modules/@angular/forms";


export class TaskForm {

    newTaskForm = new FormGroup({
        taskId: new FormControl(0, Validators.required),
        taskName: new FormControl(undefined, Validators.required),
        storyId: new FormControl(undefined, Validators.required),
        projId: new FormControl(undefined, Validators.required),
        DEV: new FormControl(undefined, Validators.required),
        QA: new FormControl(undefined, Validators.required),
        startDate: new FormControl(undefined, Validators.required),
        endDate: new FormControl(undefined, Validators.required),
    });
}