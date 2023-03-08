import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/models/authResponse.model';
import { AthleteService } from 'src/app/services/athlete.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.css']
})
export class AthleteProfileComponent implements OnInit {

    profilePhoto: any = ''
    imageToShow: any;
    imageLoading: boolean = true
    displayPasswordChange: boolean = false
    user: AuthResponse = new AuthResponse()

    constructor(private service: AthleteService, private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authehticationRes.subscribe(auth => {
            this.user = auth
            console.log('user from athlete-profile component >>',this.user)
        })
        this.getImageFromService()
    }

    createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
           this.imageToShow = reader.result;
        }, false);
     
        if (image) {
           reader.readAsDataURL(image);
        }
     }

     getImageFromService() {
        this.imageLoading = true;
        this.service.getImage(this.user.athlete._id).subscribe(data => {
          this.createImageFromBlob(data);
          this.imageLoading = false;
        }, error => {
          this.imageLoading = false;
          console.log(error);
        });
    }

    onPasswordChange(): void {
        this.displayPasswordChange = true
    }

    onCancelChange(cancel: boolean): void {
        this.displayPasswordChange = cancel
    }
}
