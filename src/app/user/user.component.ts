import { Component, OnInit } from '@angular/core';
import { AuthResponse } from '../models/authResponse.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    authResponse: AuthResponse = new AuthResponse()

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authehticationRes.subscribe(auth => {
            this.authResponse = auth
            console.log(this.authResponse)
        })
    }
}
