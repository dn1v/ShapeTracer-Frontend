import { Component, OnInit } from '@angular/core';
import { Bodyweight } from 'src/app/models/bodyweight.model';
import { FilterParamsBodyweight } from 'src/app/models/bodyweightParams.model';
import { BodyweightService } from 'src/app/services/bodyweight.service';
import { FilterOptions } from 'src/app/models/filterOptions.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bodyweight',
  templateUrl: './bodyweight.component.html',
  styleUrls: ['./bodyweight.component.css']
})
export class BodyweightComponent implements OnInit {

    bodyweightList: Bodyweight[] = []

    params: FilterParamsBodyweight = {
        limit: 7,
        skip: 0,
        dateFrom: '',
        dateTo: '',
        rangeOperator: '',
        sortBy: '',
        weight: '',
    }

    editID: string = ''

    rangeOptions: FilterOptions[] = [
        { value: 'lte', description: 'Less then or equal' },
        { value: 'gte', description: 'Greater then or equal' }]

    filterByOptions: FilterOptions[] = [ { value: 'weight', description: 'Bodyweight' } ]

    constructor(private service: BodyweightService) {}

    ngOnInit(): void {

        this.getBodyweightList()
    }

    getBodyweightList(): void {
        this.service.getAll(this.params).subscribe({
            next: (bodyweight: Bodyweight[]) => {
                this.bodyweightList = bodyweight
                console.log('Pagination check', this.bodyweightList)
            },
            error: (err: any) => console.log(err)
        })
    }

    sortBy(keyValue: string): void {
        this.params.sortBy = keyValue
        this.getBodyweightList()
    }

    onBodyweightDeleted(): void {
        this.getBodyweightList()
    }

    onCreatedBodyweight(): void {
        this.getBodyweightList()
    }

    onFilterFormSubmit(filterData: any): void {

        this.params.dateFrom = filterData.dateFrom;
        this.params.dateTo = filterData.dateTo;
        this.params.rangeOperator = filterData.range
        filterData.filterBy ? this.params.weight = filterData.value : this.params.weight = ''

        this.getBodyweightList()
    }

    onChangePage(page: number): void {
        this.params.skip = page
        this.getBodyweightList()
    }

    onEditBodyweight(_id: string): void {
        this.editID = _id
    }
}
