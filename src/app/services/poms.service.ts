import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { options } from '../utils/http-options-generator';
import { POMS } from '../models/poms.model';

@Injectable({
  providedIn: 'root'
})
export class PomsService {

    private readonly BASE_URL = 'http://localhost:3000/poms'
    constructor(private http: HttpClient) { }

    getAll(queryParams?: any): Observable<POMS[]> {
        return this.http.get(this.BASE_URL, options(queryParams))
            .pipe(
                map((data: any) => data && data.map((data: any) => data && new POMS(data))))
    }

    getOne(_id: string): Observable<POMS> {
        return this.http.get(`${this.BASE_URL}/${_id}`)
            .pipe(
                map((data: any) => data && new POMS(data)))
    }

    editPOMS(_id: string, obj: any): Observable<POMS> {
        return this.http.patch(`${this.BASE_URL}/${_id}`, obj)
            .pipe(
                map((data: any) => data && new POMS(data)))
    }

    postPOMS(obj: any): Observable<POMS> {
        return this.http.post(this.BASE_URL, obj)
            .pipe(
                map((data: any) => data && new POMS(data)))
    }

    deletePOMS(_id: string): Observable<POMS> {
        return this.http.delete(`${this.BASE_URL}/${_id}`)
            .pipe(
                map((data: any) => data && new POMS(data)))
    }
}
