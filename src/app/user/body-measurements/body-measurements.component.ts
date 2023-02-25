import { Component, OnInit } from '@angular/core';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';
import { FilterParamsBodyMeasurements } from 'src/app/models/filterParamsBodyMeasurements.model';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';
import { FilterOptions } from 'src/app/models/filterOptions.model';

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

    rangeOptions: FilterOptions[] = [
        { value: 'lte', description: 'Less then or equal' },
        { value: 'gte', description: 'Greater then or equal' }]

    filterByOptions: FilterOptions [] = [
        {value: 'chest', description: 'Chest'},
        {value: 'leftArm', description: 'Left arm'},
        {value: 'rightArm', description: 'Right arm'},
        {value: 'aboveNavel', description: 'Above navel'},
        {value: 'navel', description: 'Navel'},
        {value: 'belowNavel', description: 'Below navel'},
        {value: 'hips', description: 'Hips'},
        {value: 'rightThigh', description: 'Right thigh'},
        {value: 'leftThigh', description: 'Left thigh'},
        {value: 'rightCalf', description: 'Right calf'},
        {value: 'leftCalf', description: 'Left calf'},
    ]

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

    sortBy(keyValue: string) {
        this.params.sortBy = keyValue
        this.getBodyMeasurementList()
    }

    onBodyMeasurementDeleted(): void {
        this.getBodyMeasurementList()
    }

    onFilterFormSubmit(filterData: any): void {
        console.log(filterData)

        this.params.dateFrom = filterData.dateFrom
        this.params.dateTo = filterData.dateTo
        this.params.rangeOperator = filterData.range
        this.params.chest = ''
        this.params.chest = ''
        this.params.chest = ''
        this.params.aboveNavel = ''
        this.params.navel = ''
        this.params.belowNavel = ''
        this.params.hips = ''
        this.params.leftThigh = ''
        this.params.rightThigh = ''
        this.params.leftCalf = ''
        this.params.rightCalf = ''

        switch (filterData.filterBy) {
            case 'chest':
                this.params.chest = filterData.value
                break
            case 'leftArm':
                this.params.chest = filterData.value
                break
            case 'rightArm':
                this.params.chest = filterData.value
                break
            case 'aboveNavel':
                this.params.aboveNavel = filterData.value
                break
            case 'navel':
                this.params.navel = filterData.value
                break
            case 'belowNavel':
                this.params.belowNavel = filterData.value
                break
            case 'hips':
                this.params.hips = filterData.value
                break
            case 'leftThigh':
                this.params.leftThigh = filterData.value
                break
            case 'rightThigh':
                this.params.rightThigh = filterData.value
                break
            case 'leftCalf':
                this.params.leftCalf = filterData.value
                break
            case 'rightCalf':
                this.params.rightCalf = filterData.value
                break
        }
        console.log(this.params)
        this.getBodyMeasurementList()
    }
}
