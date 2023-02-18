import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FilterOptions } from 'src/app/models/filterOptions.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Input() rangeOptions: FilterOptions[] = []
    @Input() filterByOptions: FilterOptions[] = []
    @Output() filterFormSubmit: EventEmitter<any> = new EventEmitter()

    form: FormGroup = new FormGroup({
        dateFrom: new FormControl(''),
        dateTo: new FormControl(''),
        filterBy: new FormControl(''),
        range: new FormControl(''),
        value: new FormControl('' || null, [Validators.min(1)])
    });

    constructor() {}

    ngOnInit(): void {
        this.form.controls['filterBy'].value
        console.log(this.rangeOptions)
    }



    filterSubmit(): void {
        this.filterFormSubmit.emit(this.form.value)
    }

    get filterBy() {
        return this.form.get('filterBy')
    }

    get value() {
        return this.form.get('value')
    }
}
