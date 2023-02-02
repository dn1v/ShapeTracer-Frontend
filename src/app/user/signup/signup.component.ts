import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    form: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordCheck })

    constructor() {}

    ngOnInit(): void {

    }

    get firstName() {
        return this.form.get('firstName')
    }

    get lastName() {
        return this.form.get('lastName')
    }

    get email() {
        return this.form.get('email')
    }

    get password() {
        return this.form.get('password')
    }

    get confirmPassword() {
        return this.form.get('confirmPassword')
    }

    passwordCheck(group: AbstractControl): {[key: string]: any} | null {
        const form = group as FormGroup
        const pass = form.controls['password'].value;
        const confirmPass = form.controls['confirmPassword'].value;

        return pass === confirmPass ? null : {notSame: true};
    }

}
