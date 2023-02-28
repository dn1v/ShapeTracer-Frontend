import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Bodyweight } from '../models/bodyweight.model';
import { errorMessages } from '../utils/error-messages';
import { options } from '../utils/http-options-generator';

@Injectable({
  providedIn: 'root'
})
export class BodyweightService {

    private readonly BASE_URL= 'http://localhost:3000/bodyweight';

    constructor(private http: HttpClient) { }

    getAll(queryParams?: any): Observable<Bodyweight[]> {

        return this.http.get(this.BASE_URL, options(queryParams))
            .pipe(
                map((data: any) => data && data.map((data: any) => data && new Bodyweight(data))),
                catchError(this.handleError))
    }

    getOne(_id: string): Observable<Bodyweight> {

        return this.http.get(`${this.BASE_URL}/${_id}`).pipe(map((data: any) => data && new Bodyweight(data)), catchError(this.handleError))
    }

    deleteBodyweight(_id: string): Observable<Bodyweight> {

        return this.http.delete(`${this.BASE_URL}/${_id}`)
            .pipe(
                map((data: any) => data && new Bodyweight(data)),
                catchError(this.handleError))
    }

    postBodyweight(obj: any): Observable<Bodyweight> {

        return this.http.post(this.BASE_URL, obj)
            .pipe(
                map((data: any) => data && new Bodyweight(data)),
                catchError(this.handleError))
    }

    editBodyweight(_id: string, obj: any): Observable<Bodyweight> {

        return this.http.patch(`${this.BASE_URL}/${_id}`, obj)
            .pipe(
                map((data: any) => data && new Bodyweight(data)),
                catchError(this.handleError))
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }
}
