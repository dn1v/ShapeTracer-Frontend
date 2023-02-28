import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bodyweight } from 'src/app/models/bodyweight.model';
import { BodyweightService } from 'src/app/services/bodyweight.service';

@Component({
  selector: 'app-bodyweight-form',
  templateUrl: './bodyweight-form.component.html',
  styleUrls: ['./bodyweight-form.component.css']
})
export class BodyweightFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        weight: new FormControl('', [Validators.required, Validators.min(1)])
    })

    @Input() _id: string = ''
    @Output() createdBodyweight: EventEmitter<void> = new EventEmitter()
    bodyweight: Bodyweight = new Bodyweight()
    constructor(private service: BodyweightService) {}

    ngOnInit(): void {

    }

    onSubmit(): void {
        if (this._id) {


        } else {
            this.service.postBodyweight(this.form.value).subscribe({
                next: (bodyweight: Bodyweight) => {
                    console.log(bodyweight)
                    this.createdBodyweight.emit()
                },
                error: (err: any) => console.log(err)
            })
        }
    }
}
