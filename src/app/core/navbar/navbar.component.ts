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
        // this.authService.authehticationRes.subscribe(auth => {
        //     auth.token ? this.autheticated = true : this.autheticated = false
        // })
        this.authService.auth.subscribe(auth => {
            auth ? this.autheticated = true : this.autheticated = false
        })
            //this.authService.auth.getValue() ? this.autheticated = true : this.autheticated = false

        // token without expiration date
        // console.log('LOCAL STORAGE >> ', localStorage.getItem('userData'))
        // localStorage.getItem('userData') === null ? this.autheticated = false : this.autheticated = true
    }

    logoutThisDevice(): void {
        this.authService.logout().subscribe({
            next: (response: any) => console.log(response),
            error: (err: any) => console.log(err)
        })
    }

    logoutAllDevices(): void {
        this.authService.logoutAll().subscribe({
            next: (response: any) => console.log(response),
            error: (err: any) => console.log(err)
        })
    }


}
