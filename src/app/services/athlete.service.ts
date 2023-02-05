import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

    private baseUrl = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient) { }

}
