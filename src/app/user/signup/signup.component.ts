import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/models/authResponse.model';
import { AuthService } from 'src/app/services/auth.service';
import { errorMessages } from 'src/app/utils/error-messages';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    errors = errorMessages
    authResponse: AuthResponse = new AuthResponse()

    bsAuthResponse: AuthResponse = new AuthResponse()
    loading: boolean = false

    errorMessage: string = ''

    form: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordCheck })

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authehticationRes.subscribe(res => {
            this.bsAuthResponse = res
            console.log('BehaviourSubject >>', this.bsAuthResponse)
        })
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

    submit(): void {

        const athlete = {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value
        }

        this.loading = true
        this.authService.signup(athlete).subscribe({

            next: (response: AuthResponse) => {
                this.authResponse = response
                console.log(this.authResponse)
                this.loading = false
            },
            error: (err: any) => {
                console.log(err)
                this.loading = false
                this.errorMessage = err
            }
        })


    }

}
