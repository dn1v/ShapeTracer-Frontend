import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { POMS } from 'src/app/models/poms.model';
import { PomsService } from 'src/app/services/poms.service';
import { FilterOptions } from 'src/app/models/filterOptions.model';
@Component({
  selector: 'app-poms-item',
  templateUrl: './poms-item.component.html',
  styleUrls: ['./poms-item.component.css']
})
export class PomsItemComponent implements OnInit {

    @Input() index: number = 0
    @Input() poms: POMS = new POMS()
    @Output() pomsDeleted: EventEmitter<void> = new EventEmitter()



    constructor(private service: PomsService) {}

    ngOnInit(): void {
        
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
