import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Bodyweight } from 'src/app/models/bodyweight.model';
import { BodyweightService } from 'src/app/services/bodyweight.service';
import { map, Observable, Subscriber, } from 'rxjs';
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
    constructor(private service: BodyweightService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = params['id']
            // .getOne(undefined) => status 500
            if (id) {
                this._id = id
                this.service.getOne(id).subscribe({
                    next: (bw: Bodyweight) => {
                        this.form.patchValue(bw)
                        console.log(bw)
                    },
                    error: (err: any) => console.log(err)
                })
            }

        })

    }

    onSubmit(): void {
        if (this._id) {
            this.service.editBodyweight(this._id, this.form.value).subscribe({
                next: (bodyweight: Bodyweight) => {
                    console.log(bodyweight)
                    this.createdBodyweight.emit()
                    this._id = ''
                },
                error: (err: any) => console.log(err)
            })

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
