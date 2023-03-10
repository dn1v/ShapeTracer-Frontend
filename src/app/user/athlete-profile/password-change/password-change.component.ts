import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AthleteService } from 'src/app/services/athlete.service';
import { Athlete } from 'src/app/models/athlete.model';
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

    constructor(private service: AthleteService) {}

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
        let password = { password: this.newPassword?.value }
        this.service.changePassword(password).subscribe({
            next: (athlete: Athlete) => {
                console.log('Edited!')
                console.log(athlete)
            },
            error: (err: any) => console.log(err)
        })
    }

    onCancel(): void {
        this.cancelChange.emit(false)
    }

}
