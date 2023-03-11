import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Athlete } from '../models/athlete.model';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

    private readonly BASE_URL = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient) { }

    getAthlete(): Observable<Athlete> {
        return this.http.get(`${this.BASE_URL}/me`).pipe(map((data: any) => data && new Athlete(data)))
    }

    getImage(_id: string): Observable<Blob> {
        return this.http.get(`${this.BASE_URL}/${_id}/profilePic`, { responseType: 'blob' });
    }

    changePassword(obj?: any): Observable<Athlete> {
        return this.http.patch(`${this.BASE_URL}/me`, obj).pipe(map((data: any) => data && new Athlete(data.athlete)))
    }

    editAthlete(obj?:any): Observable<Athlete> {
        return this.http.patch(`${this.BASE_URL}/me`, obj).pipe(map((data: any) => data && new Athlete(data.athlete)))
    }
    
}
