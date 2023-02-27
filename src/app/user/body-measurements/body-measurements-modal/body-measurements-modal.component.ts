import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';
@Component({
  selector: 'app-body-measurements-modal',
  templateUrl: './body-measurements-modal.component.html',
  styleUrls: ['./body-measurements-modal.component.css']
})
export class BodyMeasurementsModalComponent implements OnInit {


    @Input() _id: string = ''



    form: FormGroup = new FormGroup({
        chest: new FormControl('', [Validators.required, Validators.min(1)]),
        leftArm: new FormControl('', [Validators.required, Validators.min(1)]),
        rightArm: new FormControl('', [Validators.required, Validators.min(1)]),
        aboveNavel: new FormControl('', [Validators.required, Validators.min(1)]),
        navel: new FormControl('', [Validators.required, Validators.min(1)]),
        belowNavel: new FormControl('', [Validators.required, Validators.min(1)]),
        hips: new FormControl('', [Validators.required, Validators.min(1)]),
        leftThigh: new FormControl('', [Validators.required, Validators.min(1)]),
        rightThigh: new FormControl('', [Validators.required, Validators.min(1)]),
        leftCalf: new FormControl('', [Validators.required, Validators.min(1)]),
        rightCalf: new FormControl('', [Validators.required, Validators.min(1)])
    })

    constructor(public activeModal: NgbActiveModal, private service: BodyMeasurementsService) {}

    ngOnInit(): void {

        this.service.getOne(this._id).subscribe({
            next: (bodyMeasurements: BodyMeasurements) => this.form.patchValue(bodyMeasurements),
            error: (err: any) => console.log(err)
        })
     }

    get chest () {
        return this.form.get('chest')
    }

    get leftArm() {
        return this.form.get('leftArm')
    }

    get rightArm() {
        return this.form.get('rightArm')
    }

    get aboveNavel() {
        return this.form.get('aboveNavel')
    }

    get navel() {
        return this.form.get('hips')
    }

    get belowNavel() {
        return this.form.get('belowNavel')
    }

    get hips() {
        return this.form.get('hips')
    }

    get leftThigh() {
        return this.form.get('leftThigh')
    }

    get rightThigh() {
        return this.form.get('rightThigh')
    }

    get leftCalf() {
        return this.form.get('leftCalf')
    }

    get rightCalf() {
        return this.form.get('rightCalf')
    }

    onSubmit(): void {

        if (this._id) {
            this.service.edit(this._id, this.form.value).subscribe({
                next: (response: BodyMeasurements) => console.log(response),
                error: (err: any) => console.log(err)
            })
        } else {
            this.service.postBodyMeasurements(this.form.value).subscribe({
                next: (response: BodyMeasurements) => console.log(response),
                error: (err: any) => console.log(err)
            })
        }


    }
}
