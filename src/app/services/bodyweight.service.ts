import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Bodyweight } from '../models/bodyweight.model';
import { errorMessages } from '../utils/error-messages';
@Injectable({
  providedIn: 'root'
})
export class BodyweightService {

    private readonly BASE_URL= 'http://localhost:3000/bodyweight';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Bodyweight[]> {
        return this.http.get(this.BASE_URL)
            .pipe(
                map((data: any) => data && data.map((data: any) => data && new Bodyweight(data))),
                catchError(this.handleError))
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }
}
