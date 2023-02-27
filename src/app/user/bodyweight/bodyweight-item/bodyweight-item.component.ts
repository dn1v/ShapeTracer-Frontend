import { Component, Input, OnInit } from '@angular/core';
import { Bodyweight } from 'src/app/models/bodyweight.model';

@Component({
  selector: 'app-bodyweight-item',
  templateUrl: './bodyweight-item.component.html',
  styleUrls: ['./bodyweight-item.component.css']
})
export class BodyweightItemComponent implements OnInit {

    @Input() bodyweight: Bodyweight = new Bodyweight()

    constructor() {}

    ngOnInit(): void {

    }

    onDelete(): void {
        
    }
}
