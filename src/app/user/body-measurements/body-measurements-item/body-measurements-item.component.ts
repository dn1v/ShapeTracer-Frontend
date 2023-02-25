import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';


@Component({
  selector: 'app-body-measurements-item',
  templateUrl: './body-measurements-item.component.html',
  styleUrls: ['./body-measurements-item.component.css']
})
export class BodyMeasurementsItemComponent implements OnInit {

    @Input() bodyMeasurements: BodyMeasurements = new BodyMeasurements()
    @Input() index: number = 0
    @Output() bodyMeasurementDeleted: EventEmitter<void> = new EventEmitter()

    constructor (private service: BodyMeasurementsService) {}

    ngOnInit(): void {

    }

    onDelete() {
        this.service.deleteBodyMeasurements(this.bodyMeasurements._id).subscribe({
            next: (response: any) => {
                this.bodyMeasurementDeleted.emit()
                console.log("Deleted!")
            },
            error: (err: any) => console.log(err)
        })
    }
}
