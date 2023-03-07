import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {




    private readonly BASE_URL = 'http://localhost:3000/athletes'

    constructor(private http: HttpClient) { }

    getImage(_id: string): Observable<Blob> {
        return this.http.get(`${this.BASE_URL}/${_id}/profilePic`, { responseType: 'blob' });
      }


}
