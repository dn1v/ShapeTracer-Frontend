import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';

@Component({
  selector: 'app-session-rpe',
  templateUrl: './session-rpe.component.html',
  styleUrls: ['./session-rpe.component.css']
})
export class SessionRpeComponent implements OnInit {

    form: FormGroup = new FormGroup({
        trainingType: new FormControl(),
        sRPE: new FormControl(),
        duration: new FormControl(),
    })

    sessionRPEs: SessionRPEResponse[] = [];

    errorMessage: string = '';

    constructor (private sRPE: SrpeService) {}

    ngOnInit(): void {
        this.sRPE.getSessionRPEs().subscribe({
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
}
