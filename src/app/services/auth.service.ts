import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, throwError, BehaviorSubject, bufferToggle } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { errorMessages } from '../utils/error-messages';
import { AuthResponse } from '../models/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authehticationRes = new BehaviorSubject<AuthResponse>(new AuthResponse())
    private baseUrl = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient) { }

    signup(obj: any):Observable<AuthResponse> {

        return this.http.post(this.baseUrl, obj).pipe(catchError(errRes => {
            return throwError(() => new Error(errorMessages[errRes.status]))
        }),
            map((data: any) => data && new AuthResponse(data) || new AuthResponse()),
            tap(resData => this.authehticationRes.next(resData)))
    }
}

//map((data: any) => data && new AuthResponse(data) || new AuthResponse())