import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

    form: FormGroup = new FormGroup({
        newPassword: new FormControl('', Validators.required),
        confirmNewPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordCheck })


    @Output() cancelChange: EventEmitter<boolean> = new EventEmitter()

    constructor() {}

    ngOnInit(): void {
        
    }

    get newPassword() {
        return this.form.get('newPassword')
    }

    get confirmNewPassword() {
        return this.form.get('confirmNewPassword')
    }

    passwordCheck(group: AbstractControl): {[key: string]: any} | null {
        const form = group as FormGroup
        const pass = form.controls['newPassword'].value;
        const confirmPass = form.controls['confirmNewPassword'].value;

        return pass === confirmPass ? null : {notSame: true};
    }

    onSubmit(): void {

    }

    onCancel(): void {
        this.cancelChange.emit(false)
    }

}
