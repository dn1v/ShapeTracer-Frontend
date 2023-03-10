import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';
import { BodyMeasurements } from '../models/bodyMeasurements.model';
import { errorMessages } from '../utils/error-messages';
import { options } from '../utils/http-options-generator';

@Injectable({
  providedIn: 'root'
})
export class BodyMeasurementsService {

    private readonly BASE_URL= 'http://localhost:3000/bodyMeasurements'

    constructor(private http: HttpClient) { }


    getAll(queryParams?: any): Observable<BodyMeasurements[]> {

        return this.http.get(this.BASE_URL, options(queryParams))
            .pipe(
                map((data: any) => data && data.map((data: any) => data && new BodyMeasurements(data))))
    }

    getOne(_id: string): Observable<BodyMeasurements> {
        return this.http.get(`${this.BASE_URL}/${_id}`).pipe(
            map((data: any) => data && new BodyMeasurements(data)),
            catchError(this.handleError)
        )
    }

    deleteBodyMeasurements(_id: string): Observable<any> {
        return this.http.delete(`${this.BASE_URL}/${_id}`)
    }

    edit(_id: string, obj: any): Observable<BodyMeasurements> {
        return this.http.patch(`${this.BASE_URL}/${_id}`, obj)
            .pipe(
                map((data: any) => data && new BodyMeasurements(data)),
                catchError(this.handleError))
    }

    postBodyMeasurements(obj: any): Observable<any> {
        return this.http.post(this.BASE_URL, obj)
            .pipe(
                map((data: any) => data && new BodyMeasurements(data)),
                catchError(this.handleError)
            )
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }

}
