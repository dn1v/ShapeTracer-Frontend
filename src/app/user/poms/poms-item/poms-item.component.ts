import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { POMS } from 'src/app/models/poms.model';
import { PomsService } from 'src/app/services/poms.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PomsModalComponent } from '../poms-modal/poms-modal.component';

@Component({
  selector: 'app-poms-item',
  templateUrl: './poms-item.component.html',
  styleUrls: ['./poms-item.component.css']
})
export class PomsItemComponent implements OnInit {

    @Input() index: number = 0
    @Input() poms: POMS = new POMS()
    @Output() pomsDeleted: EventEmitter<void> = new EventEmitter()



    constructor(private service: PomsService, private modalService: NgbModal) {}

    ngOnInit(): void {
        
    }

    open() {
		const modalRef = this.modalService.open(PomsModalComponent);
		modalRef.componentInstance._id = this.poms._id;
	}

    onDelete(): void {
        this.service.deletePOMS(this.poms._id).subscribe({
            next: (poms: POMS) => {
                console.log('Deleted: ', poms)
                this.pomsDeleted.emit()
            },
            error: (err: any) => console.log(err)
        })
    }

}
