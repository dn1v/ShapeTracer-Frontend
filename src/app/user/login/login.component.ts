import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/authResponse.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loading: boolean = false
    errorMessage: string = ''

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    })

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        
    }

    get email() {
        return this.form.get('email')
    }

    get password() {
        return this.form.get('password')
    }

    submit(): void {

        this.loading = true

        this.authService.login(this.form.value).subscribe({
            next: (response: AuthResponse) => {
                console.log(response)
                this.loading = false
                this.router.navigate(['/user'])
            },
            error: (err: any) => {
                console.log(err)
                this.loading = false
                this.errorMessage = err
            }
        })

    }
}
