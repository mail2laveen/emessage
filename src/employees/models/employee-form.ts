import { FormGroup, Validators, FormControl } from "../../../node_modules/@angular/forms";


export class EmployeeForm {

    newEmployeeForm = new FormGroup({
        employeeId: new FormControl(0, Validators.required),
        employeeName: new FormControl(undefined, Validators.required),
        address: new FormControl(undefined, Validators.required),
        city: new FormControl(undefined, Validators.required),
        state: new FormControl(undefined, Validators.required),
        country: new FormControl(undefined, Validators.required),
        phone: new FormControl(undefined, Validators.required),
        email: new FormControl(undefined, Validators.required),
        platform: new FormControl(undefined, Validators.required),
        joinDate: new FormControl(undefined, Validators.required),
        avatar: new FormControl("images/noimage.png"),
    });
}