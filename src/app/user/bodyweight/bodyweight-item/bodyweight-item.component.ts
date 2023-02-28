import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bodyweight } from 'src/app/models/bodyweight.model';
import { BodyweightService } from 'src/app/services/bodyweight.service';

@Component({
  selector: 'app-bodyweight-item',
  templateUrl: './bodyweight-item.component.html',
  styleUrls: ['./bodyweight-item.component.css']
})
export class BodyweightItemComponent implements OnInit {

    @Input() bodyweight: Bodyweight = new Bodyweight()
    @Output() bodyweightDeleted: EventEmitter<void> = new EventEmitter()


    constructor(private service: BodyweightService) {}

    ngOnInit(): void {

    }

    onDelete(): void {
        this.service.deleteBodyweight(this.bodyweight._id).subscribe({
            next: (response: Bodyweight) => {
                console.log("Deleted => ", response)
                this.bodyweightDeleted.emit()
            },
            error: (err: any) => console.log(err)
        })
    }

    onEdit(): void {
        
    }
}
