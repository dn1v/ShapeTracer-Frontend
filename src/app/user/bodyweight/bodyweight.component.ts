import { Component, OnInit } from '@angular/core';
import { Bodyweight } from 'src/app/models/bodyweight.model';
import { BodyweightService } from 'src/app/services/bodyweight.service';

@Component({
  selector: 'app-bodyweight',
  templateUrl: './bodyweight.component.html',
  styleUrls: ['./bodyweight.component.css']
})
export class BodyweightComponent implements OnInit {

    bodyweightList: Bodyweight[] = []

    constructor(private service: BodyweightService) {}

    ngOnInit(): void {
        this.service.getAll().subscribe({
            next: (bodyweight: Bodyweight[]) => {
                this.bodyweightList = bodyweight
                console.log(this.bodyweightList)
            },
            error: (err: any) => console.log(err)
        })
    }


    sortBy(str: string): void {

    }
}
