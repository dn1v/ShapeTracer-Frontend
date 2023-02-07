import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, throwError, BehaviorSubject, bufferToggle, retry } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { errorMessages } from '../utils/error-messages';
import { AuthResponse } from '../models/authResponse.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authehticationRes = new BehaviorSubject<AuthResponse>(new AuthResponse())
    private baseUrl = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient, private router: Router) { }

    signup(obj: any):Observable<AuthResponse> {
        return this.http.post(this.baseUrl, obj).pipe(catchError(this.handleError),
            map((data: any) => data && new AuthResponse(data) || new AuthResponse()),
            tap(resData => this.authehticationRes.next(resData)))
    }

    login(obj: any): Observable<AuthResponse> {
        return this.http.post(`${this.baseUrl}/login`, obj).pipe(catchError(this.handleError),
            map((data: any) => data && new AuthResponse(data) || new AuthResponse()),
            tap(resData => this.authehticationRes.next(resData)))
    }

    logout() {
         this.authehticationRes.next(new AuthResponse())
         this.router.navigate(['/login'])
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }
}



