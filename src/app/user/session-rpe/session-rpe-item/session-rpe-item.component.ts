import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionRpeModalComponent } from '../session-rpe-modal/session-rpe-modal.component';

@Component({
  selector: 'app-session-rpe-item',
  templateUrl: './session-rpe-item.component.html',
  styleUrls: ['./session-rpe-item.component.css']
})
export class SessionRpeItemComponent implements OnInit {



    toggle: boolean = false
    successMessage: string = ''
    errorMessage: string = ''
    @Input() sessionRPE: SessionRPEResponse = new SessionRPEResponse()
    @Input() index: number = 0
    @Output() srpeDeleted = new EventEmitter<void>()
    constructor(private sRPE: SrpeService,  private modalService: NgbModal) {}

    ngOnInit(): void {
        console.log(this.sessionRPE)
    }

    open() {
		const modalRef = this.modalService.open(SessionRpeModalComponent);
		modalRef.componentInstance._id = this.sessionRPE._id;
	}

    onDelete(): void {
        this.sRPE.deleteSessionRPE(this.sessionRPE._id).subscribe({
            next: (data: any) => {
                this.successMessage = 'sRPE deleted!'
                console.log(this.successMessage)
                this.srpeDeleted.emit()
                this.ngOnInit()
            },
            error: (err: any) => {
                this.errorMessage = err
                console.log(this.errorMessage)
            }
        })

    }

}