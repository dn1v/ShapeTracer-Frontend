import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { POMS } from 'src/app/models/poms.model';
import { PomsService } from 'src/app/services/poms.service';

@Component({
  selector: 'app-poms-modal',
  templateUrl: './poms-modal.component.html',
  styleUrls: ['./poms-modal.component.css']
})
export class PomsModalComponent implements OnInit {

    @Input() _id: string = ''

    poms: POMS = new POMS()
    form: FormGroup = new FormGroup({
        angry: new FormControl(0),
        annoyed: new FormControl(0),
        badTempered: new FormControl(0),
        bitter: new FormControl(0),
        confused: new FormControl(0),
        mixedUp: new FormControl(0),
        muddled: new FormControl(0),
        uncertain: new FormControl(0),
        depressed: new FormControl(0),
        downhearted: new FormControl(0),
        miserable: new FormControl(0),
        unhappy: new FormControl(0),
        exhausted: new FormControl(0),
        sleepy: new FormControl(0),
        tired: new FormControl(0),
        wornOut: new FormControl(0),
        anxious: new FormControl(0),
        nervous: new FormControl(0),
        panicky: new FormControl(0),
        worried: new FormControl(0),
        active: new FormControl(0),
        alert: new FormControl(0),
        energetic: new FormControl(0),
        lively: new FormControl(0),
    })

    constructor(public activeModal: NgbActiveModal, private service: PomsService, private router: Router) {}

    ngOnInit(): void {
        if (this._id) {
            this.service.getOne(this._id).subscribe({
                next: (poms: POMS) => {
                    this.form.patchValue(poms)
                },
                error: (err: any) => console.log(err)
            })
        }
    }

    onSubmit(): void {
        console.log(this._id)
        if (this._id) {
            this.service.editPOMS(this._id, this.form.value).subscribe({
                next: (poms: POMS) => {
                    this.poms = poms
                    this.router.navigate(['/user/POMS/submited'])
                    this._id = ''
                    
                    console.log(this.poms)
                },
                error: (err: any) => console.log(err)
            })

        } else {
            console.log(this.form.value)

            this.service.postPOMS(this.form.value).subscribe({
                next: (poms: POMS) => {
                    this.poms = poms
                    console.log(this.poms)
                },
                error: (err: any) => console.log(err)
            })
        }

        
    }
}
