import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterOptions } from 'src/app/models/filterOptions.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Input() rangeOptions: FilterOptions[] = []
    @Input() filterByOptions: FilterOptions[] = []

    form: FormGroup = new FormGroup({
        dateFrom: new FormControl(''),
        dateTo: new FormControl(''),
        filterBy: new FormControl(''),
        range: new FormControl('')
    });

    constructor() {}

    ngOnInit(): void {

    }

    filterSubmit(): void {

    }
}
