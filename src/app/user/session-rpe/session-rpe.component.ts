import { Component, OnInit } from '@angular/core';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';

@Component({
  selector: 'app-session-rpe',
  templateUrl: './session-rpe.component.html',
  styleUrls: ['./session-rpe.component.css']
})
export class SessionRpeComponent implements OnInit {

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
}
