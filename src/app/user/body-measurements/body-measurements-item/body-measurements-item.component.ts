import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BodyMeasurements } from 'src/app/models/bodyMeasurements.model';


@Component({
  selector: 'app-body-measurements-item',
  templateUrl: './body-measurements-item.component.html',
  styleUrls: ['./body-measurements-item.component.css']
})
export class BodyMeasurementsItemComponent implements OnInit {

    @Input() bodyMeasurements: BodyMeasurements = new BodyMeasurements()
    @Input() index: number = 0

    constructor () {}

    ngOnInit(): void {

    }
}
