import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';

@Component({
  selector: 'app-session-rpe',
  templateUrl: './session-rpe.component.html',
  styleUrls: ['./session-rpe.component.css']
})
export class SessionRpeComponent implements OnInit {

    form: FormGroup = new FormGroup({
        trainingType: new FormControl('', Validators.required),
        sRPE: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
        duration: new FormControl('', [Validators.required, Validators.min(1)]),
    })

    sessionRPEs: SessionRPEResponse[] = [];

    errorMessage: string = '';

    params = {
        limit: 3,
        skip: 1
    }

    page: number = 1

    constructor (private sRPE: SrpeService) {}

    ngOnInit(): void {

        this.getSessionRPEs()
    }

    get trainingType() {
        return this.form.get('trainingType')
    }

    get sessionRPE() {
        return this.form.get('sRPE')
    }

    get duration() {
        return this.form.get('duration')
    }

    getSessionRPEs(): void {
        this.sRPE.getAll(this.params).subscribe({
            next: (data: any) => {
                this.sessionRPEs = data
                console.log(this.sessionRPEs)
            },
            error: (err: any) => this.errorMessage = err
        })
    }

    submit(): void {
        this.sRPE.postSessionRPE(this.form.value).subscribe({
            next: (res: SessionRPEResponse) => console.log(res),
            error: (err: any) => console.log(err)
        })

        this.ngOnInit()
    }

    onSrpeDeleted(): void {
        this.getSessionRPEs()
    }

    skipForward(): void {
        if (this.sessionRPEs.length === 3) {
            this.page++
            this.params.skip = this.page
            this.ngOnInit()
            console.log(this.sessionRPEs.length, '<< length')
            console.log(this.page)
        }
    }

    skipBack(): void {
        if (this.page !== 1) {
            this.page--
            this.params.skip = this.page
            this.ngOnInit()
            console.log(this.page)
        }
    }
}
