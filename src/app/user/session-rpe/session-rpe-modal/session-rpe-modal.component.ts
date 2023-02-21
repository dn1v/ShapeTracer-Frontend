import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';

@Component({
  selector: 'app-session-rpe-modal',
  templateUrl: './session-rpe-modal.component.html',
  styleUrls: ['./session-rpe-modal.component.css']
})
export class SessionRpeModalComponent implements OnInit {

    @Input() _id: string = ''

    form: FormGroup = new FormGroup({
        trainingType: new FormControl('', Validators.required),
        sRPE: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
        duration: new FormControl('', [Validators.required, Validators.min(1)])
    })

    constructor (public activeModal: NgbActiveModal, private service: SrpeService) {}

    ngOnInit(): void {
        this.service.getOne(this._id).subscribe({
            next: (sRPE: SessionRPEResponse) => this.form.patchValue(sRPE),
            error: (err: any) => console.log(err)
        })
    }

    get trainingType () {
        return this.form.get('trainingType')
    }

    get sRPE () {
        return this.form.get('sRPE')
    }

    get duration () {
        return this.form.get('duration')
    }

    onEdit(): void {
        this.service.edit(this._id, this.form.value).subscribe({
            next: (response: SessionRPEResponse) => console.log('Edited sRPE: ', response),
            error: (err: any) => console.log(err)
        })
    }
}
