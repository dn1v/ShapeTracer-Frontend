import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionRPEResponse } from 'src/app/models/sRPE.model';
import { SrpeService } from 'src/app/services/srpe.service';
import { FilterOptions } from 'src/app/models/filterOptions.model';
import { FilterParamsSessionRPE } from '../../models/filterParamsSessionRPE.model'

@Component({
  selector: 'app-session-rpe',
  templateUrl: './session-rpe.component.html',
  styleUrls: ['./session-rpe.component.css']
})
export class SessionRpeComponent implements OnInit {

    form: FormGroup = new FormGroup({
        trainingType: new FormControl('', Validators.required),
        sRPE: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
        duration: new FormControl('', [Validators.required, Validators.min(1)]),
    })

    rangeOptions: FilterOptions[] = [
        { value: 'lte', description: 'Less then or equal' },
        { value: 'gte', description: 'Greater then or equal' }]

    filterByOptions: FilterOptions[] = [
        { value: 'sRPE', description: 'sRPE' },
        { value: 'duration', description: 'Training duration' },
        { value: 'trainingLoad', description: 'Training load' },
    ]

    sessionRPEs: SessionRPEResponse[] = [];

    errorMessage: string = '';

    params: FilterParamsSessionRPE = {
        limit: 5,
        skip: 0,
        dateFrom: '',
        dateTo: '',
        rangeOperator: '',
        sRPE: '',
        duration: '',
        trainingLoad: '',
        sortBy: '',

    }

    page: number = 1

    constructor (private sRPE: SrpeService) {}

    ngOnInit(): void {
        console.log(this.params)
        this.getSessionRPEs()
    }

    get trainingType() {
        return this.form.get('trainingType')
    }

    get sessionRPE() {
        return this.form.get('sRPE')
    }

    get duration() {
        return this.form.get('duration')
    }

    getSessionRPEs(): void {

        this.sRPE.getAll(this.params).subscribe({
            next: (data: any) => {
                this.sessionRPEs = data
                console.log(this.sessionRPEs)

            },
            error: (err: any) => this.errorMessage = err
        })
    }

    sortBy(keyValue: string) {
        this.params.sortBy = keyValue
        this.getSessionRPEs()
    }

    submit(): void {

        this.sRPE.postSessionRPE(this.form.value).subscribe({
            next: (res: SessionRPEResponse) =>{
                console.log(res)
                this.getSessionRPEs()
            } ,
            error: (err: any) => console.log(err)
        })


    }

    onSrpeDeleted(): void {
        this.getSessionRPEs()
    }

    onPageChange(page: number): void {
        this.params.skip = page
        this.getSessionRPEs()
    }

    // skipForward(): void {
    //     if (this.sessionRPEs.length === this.params.limit) {
    //         this.page++
    //         this.params.skip = this.page
    //         this.ngOnInit()
    //         console.log(this.sessionRPEs.length, '<< length')
    //         console.log(this.page)
    //     }
    // }

    // skipBack(): void {
    //     if (this.page !== 0) {
    //         this.page--
    //         this.params.skip = this.page
    //         this.ngOnInit()
    //         console.log(this.page)
    //     }
    // }

    onFilterFormSubmit(filterData: any): void {
        console.log('These are the filter data: ', filterData);
        this.params.dateFrom = filterData.dateFrom;
        this.params.dateTo = filterData.dateTo;
        this.params.rangeOperator = filterData.range
        this.params.sRPE = ''
        this.params.duration = ''
        this.params.trainingLoad = ''

        const filter: string = filterData.filterBy;

        switch(filter) {
            case 'sRPE':
                this.params.sRPE = filterData.value;
                break;
            case 'duration':
                this.params.duration = filterData.value;
                break;
            case 'trainingLoad':
                this.params.trainingLoad = filterData.value;
                break;
        }

        this.getSessionRPEs()
    }
}
