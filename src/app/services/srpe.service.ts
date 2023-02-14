import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse,  } from '@angular/common/http';
import { SessionRPEResponse } from '../models/sRPE.model';
import { errorMessages } from '../utils/error-messages';

@Injectable({
  providedIn: 'root'
})
export class SrpeService {

    private readonly BASE_URL = 'http://localhost:3000/sessionRPE'

    constructor(private http: HttpClient) { }

    getSessionRPEs(): Observable<SessionRPEResponse[]> {
        return this.http.get(this.BASE_URL)
            .pipe(
                map((data: any) => data && data.map((data: any) => new SessionRPEResponse(data))),
                catchError(this.handleError))
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }

    postSessionRPE(obj: any): Observable<SessionRPEResponse> {
        return this.http.post(this.BASE_URL, obj)
            .pipe(
                map((data: any) => data && new SessionRPEResponse(data)),
                catchError(this.handleError))
    }

}
