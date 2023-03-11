import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/models/authResponse.model';
import { AthleteService } from 'src/app/services/athlete.service';
import { AuthService } from 'src/app/services/auth.service';
import { Athlete } from 'src/app/models/athlete.model';
@Component({
  selector: 'app-edit-athlete',
  templateUrl: './edit-athlete.component.html',
  styleUrls: ['./edit-athlete.component.css']
})
export class EditAthleteComponent implements OnInit {

    @Output() closeEdit: EventEmitter<boolean> = new EventEmitter()
    form: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        height: new FormControl('', [Validators.required, Validators.min(1)]),
        weight: new FormControl('', [Validators.required, Validators.min(1)]),
        age: new FormControl('', [Validators.required, Validators.min(1)]),
    })

    constructor(private service: AthleteService, private authService: AuthService) {}


    ngOnInit(): void {
        this.service.getAthlete().subscribe({
            next: (athlete: Athlete) => {
                this.form.patchValue(athlete)
            },
            error: (err: any) => console.log(err)
        })
    }

    get firstName() {
        return this.form.get('firstName')
    }

    get lastName() {
        return this.form.get('lastName')
    }

    get height() {
        return this.form.get('height')
    }

    get weight() {
        return this.form.get('weight')
    }

    get age() {
        return this.form.get('age')
    }


    onCancel(): void {
        this.closeEdit.emit(false)
    }

    onEdit(): void {
        this.service.editAthlete(this.form.value).subscribe({
            next: (athlete: Athlete) => {
                console.log(athlete)
                this.closeEdit.emit(false)
            },
            error: (err: any) => console.log(err)
        })
    }
}
