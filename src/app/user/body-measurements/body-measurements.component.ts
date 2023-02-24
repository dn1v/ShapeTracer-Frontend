import { Component, OnInit } from '@angular/core';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';

@Component({
  selector: 'app-body-measurements',
  templateUrl: './body-measurements.component.html',
  styleUrls: ['./body-measurements.component.css']
})
export class BodyMeasurementsComponent implements OnInit {

    bodyMeasurementsList: BodyMeasurements[] = []

    constructor(private service: BodyMeasurementsService) {}

    ngOnInit(): void {

        this.getBodyMeasurementList()

    }

    getBodyMeasurementList (): void {
        this.service.getAll().subscribe({
            next: (bodyMeasurements: BodyMeasurements[]) => {
                this.bodyMeasurementsList = bodyMeasurements
                console.log(this.bodyMeasurementsList)

            },
            error: (err: any) => console.log(err)
        })
    }

    
}
