import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, switchMap, take, skip } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // asObservable //
        // return this.authService.authentication$.pipe(take(1), switchMap(res => {
        //     console.log("TOKEN?? ", res.token)
        //     const headers = {'Authorization': 'Bearer ' + res.token}
        //     const req = request.clone({setHeaders: headers })
        //     return next.handle(req)
        // }))

        const token = this.authService.authehticationRes.getValue().token
        const headers = { 'Authorization': `Bearer ${token}` };
        const req = request.clone({ setHeaders: headers });
        return next.handle(req);
    }
}

