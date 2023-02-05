import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private baseUrl = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient) { }

    signup(obj: any):Observable<any> {

        return this.http.post(this.baseUrl, obj)
  }
}
