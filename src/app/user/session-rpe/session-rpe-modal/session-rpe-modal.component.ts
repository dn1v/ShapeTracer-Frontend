import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-session-rpe-modal',
  templateUrl: './session-rpe-modal.component.html',
  styleUrls: ['./session-rpe-modal.component.css']
})
export class SessionRpeModalComponent implements OnInit {

    constructor (public activeModal: NgbActiveModal) {}

    ngOnInit(): void {

    }
}
