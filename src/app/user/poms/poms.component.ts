import { Component, OnInit } from '@angular/core';
import { FilterParamsPOMS } from 'src/app/models/filterParamsPOMS.model';
import { POMS } from 'src/app/models/poms.model';
import { PomsService } from 'src/app/services/poms.service';
import { FilterOptions } from 'src/app/models/filterOptions.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PomsModalComponent } from './poms-modal/poms-modal.component';

@Component({
  selector: 'app-poms',
  templateUrl: './poms.component.html',
  styleUrls: ['./poms.component.css']
})
export class POMSComponent implements OnInit {

    pomsList: POMS[] = []

    params: FilterParamsPOMS = {
        limit: 7,
        skip: 0,
        dateFrom: '',
        dateTo: '',
        rangeOperator: '',
        sortBy: '',
        vigourMoodState: '',
        tensionMoodState: '',
        fatigueMoodState: '',
        depressionMoodState: '',
        confusionMoodState: '',
        angerMoodState: '',
        totalMoodScore: '',
    }
    
    rangeOptions: FilterOptions[] = [
        { value: 'lte', description: 'Less then or equal' },
        { value: 'gte', description: 'Greater then or equal' }]

    filterByOptions: FilterOptions [] = [
        {value: 'vigourMoodState', description: 'Vigour'},
        {value: 'tensionMoodState', description: 'Tension'},
        {value: 'fatigueMoodState', description: 'Fatigue'},
        {value: 'depressionMoodState', description: 'Depression'},
        {value: 'confusionMoodState', description: 'Confusion'},
        {value: 'angerMoodState', description: 'Anger'},
        {value: 'totalMoodScore', description: 'Total'},
    ]

    constructor(private service: PomsService, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.getListPOMS()
    }

    getListPOMS(): void {
        this.service.getAll(this.params).subscribe({
            next: (poms: POMS[]) => {
                this.pomsList = poms
                console.log(this.pomsList)
            },
            error: (err: any) => console.log(err)
        })
    }

    sortBy(keyValue: string): void {
        this.params.sortBy = keyValue
        this.getListPOMS()
    }

    onPomsDeleted(): void {
        this.getListPOMS()
    }

    onPageChange(page: number): void {
        this.params.skip = page
        this.getListPOMS()
    }

    open() {
		const modalRef = this.modalService.open(PomsModalComponent);

	}

    onFilterFormSubmit(filterData: any): void {

        this.params.dateFrom = filterData.dateFrom
        this.params.dateTo = filterData.dateTo
        this.params.rangeOperator = filterData.range
        this.params.vigourMoodState = ''
        this.params.tensionMoodState = ''
        this.params.fatigueMoodState = ''
        this.params.depressionMoodState = ''
        this.params.confusionMoodState = ''
        this.params.angerMoodState = ''
        this.params.totalMoodScore = ''

        switch (filterData.filterBy) {
            case 'vigourMoodState':
                this.params.vigourMoodState = filterData.value
                break
            case 'tensionMoodState':
                this.params.tensionMoodState = filterData.value
                break
            case 'fatigueMoodState':
                this.params.fatigueMoodState = filterData.value
                break
            case 'depressionMoodState':
                this.params.depressionMoodState = filterData.value
                break
            case 'confusionMoodState':
                this.params.confusionMoodState = filterData.value
                break
            case 'angerMoodState':
                this.params.angerMoodState = filterData.value
                break
            case 'totalMoodScore':
                this.params.totalMoodScore = filterData.value
                break
        }

        this.getListPOMS()

    }
}
