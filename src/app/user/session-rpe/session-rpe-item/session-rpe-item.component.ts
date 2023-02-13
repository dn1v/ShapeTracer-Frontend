import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';

@Component({
  selector: 'app-session-rpe-item',
  templateUrl: './session-rpe-item.component.html',
  styleUrls: ['./session-rpe-item.component.css']
})
export class SessionRpeItemComponent implements OnInit {

    @Input() sessionRPE: SessionRPEResponse = new SessionRPEResponse()

    constructor() {}

    ngOnInit(): void {
        console.log(this.sessionRPE)
    }

}
