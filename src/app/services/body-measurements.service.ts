import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';
import { BodyMeasurements } from '../models/bodyMeasurements.model';
import { errorMessages } from '../utils/error-messages';
@Injectable({
  providedIn: 'root'
})
export class BodyMeasurementsService {

    private readonly BASE_URL= 'http://localhost:3000/bodyMeasurements'

    constructor(private http: HttpClient) { }


    getAll(): Observable<BodyMeasurements[]> {
        return this.http.get(this.BASE_URL)
            .pipe(
                map((data: any) => data && data.map((data: any) => data && new BodyMeasurements(data))),
                catchError(this.handleError))
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }

}
