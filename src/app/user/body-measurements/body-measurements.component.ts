import { Component, OnInit } from '@angular/core';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';
import { FilterParamsBodyMeasurements } from 'src/app/models/filterParamsBodyMeasurements.model';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';

@Component({
  selector: 'app-body-measurements',
  templateUrl: './body-measurements.component.html',
  styleUrls: ['./body-measurements.component.css']
})
export class BodyMeasurementsComponent implements OnInit {

    params: FilterParamsBodyMeasurements = {
        limit: 5,
        skip: 0,
        dateFrom: '',
        dateTo: '',
        rangeOperator: '',
        sortBy: '',
        chest: '',
        leftArm: '',
        rightArm: '',
        aboveNavel: '',
        navel: '',
        belowNavel: '',
        hips: '',
        leftThigh: '',
        rightThigh: '',
        leftCalf: '',
        rightCalf: '',
    }

    bodyMeasurementsList: BodyMeasurements[] = []

    constructor(private service: BodyMeasurementsService) {}

    ngOnInit(): void {

        this.getBodyMeasurementList()

    }

    getBodyMeasurementList (): void {
        this.service.getAll(this.params).subscribe({
            next: (bodyMeasurements: BodyMeasurements[]) => {
                this.bodyMeasurementsList = bodyMeasurements
                console.log(this.bodyMeasurementsList)

            },
            error: (err: any) => console.log(err)
        })
    }

    onChangePage(skip: number): void {
        this.params.skip = skip
        this.getBodyMeasurementList()
    }
}
