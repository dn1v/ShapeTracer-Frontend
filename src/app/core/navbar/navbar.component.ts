import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    autheticated: boolean = false

    constructor (private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authehticationRes.subscribe(auth => {
            auth.token ? this.autheticated = true : this.autheticated = false
        })
    }

    logoutThisDevice(): void {
        this.authService.logout()
    }


}
