import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, pipe, map } from 'rxjs';

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

    constructor (public activeModal: NgbActiveModal) {}

    ngOnInit(): void {

        console.log('ID >>', this._id)
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

    }
}
