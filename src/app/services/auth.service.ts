import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, throwError, BehaviorSubject, bufferToggle, retry } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { errorMessages } from '../utils/error-messages';
import { AuthResponse } from '../models/authResponse.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authehticationRes = new BehaviorSubject<AuthResponse>(new AuthResponse())
    //authentication$ = this.authehticationRes.asObservable();
    auth = new BehaviorSubject<boolean>(false)
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
            tap(resData => {
                this.authehticationRes.next(resData)
                this.auth.next(true)
                localStorage.setItem('userData', JSON.stringify(resData))
            } ))
    }

    autoLogin() {
        const data = localStorage.getItem('userData')
        const auth = localStorage.getItem('auth')
        if (!data) return
        this.authehticationRes.next(JSON.parse(data))
        this.auth.next(true)
    }


    // logout(): Observable<any> {
    //     const headers = new HttpHeaders({
    //         'Authorization': `Bearer ${this.authehticationRes.getValue().token}`
    //     })
    //     this.authehticationRes.next(new AuthResponse())
    //     this.router.navigate(['/login'])
    //     return this.http.post(`${this.baseUrl}/logout`, {}, { headers }).pipe(catchError(this.handleError))
    // }

    logout() {
        this.router.navigate(['/login']);
        this.auth.next(false)
        localStorage.removeItem('userData')
        return this.http.post(`${this.baseUrl}/logout`, {});
    }

    logoutAll(): Observable<any> {
        // const headers = new HttpHeaders({
        //     'Authorization': `Bearer ${this.authehticationRes.getValue().token}`
        // })
        //this.authehticationRes.next(new AuthResponse())
        this.router.navigate(['/login'])
        this.auth.next(false)
        localStorage.removeItem('userData')
        return this.http.post(`${this.baseUrl}/logoutAll`, {}).pipe(catchError(this.handleError))
    }

    handleError(errRes: HttpErrorResponse) {
        const errorMessage = errorMessages[errRes.status] || errorMessages['unknownError']
        return throwError(() => new Error(errorMessage))
    }
}



