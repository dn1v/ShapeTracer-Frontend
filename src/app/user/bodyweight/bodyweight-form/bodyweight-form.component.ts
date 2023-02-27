import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bodyweight-form',
  templateUrl: './bodyweight-form.component.html',
  styleUrls: ['./bodyweight-form.component.css']
})
export class BodyweightFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        weight: new FormControl('', [Validators.required, Validators.min(1)])
    })

    constructor() {}

    ngOnInit(): void {

    }

    onSubmit(): void {
        
    }
}
