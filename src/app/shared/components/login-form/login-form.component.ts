import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  constructor(private authService:AuthService, private router:Router) {

  }

  @ViewChild("loginForm") public loginForm!: NgForm;
  //Use the names `email` and `password` for form controls.
  loginButtonText:string = "login";
  loginEmail:string="";
  loginPassword:string="";
  serverError:string='';
  
  formSubmitted:boolean=false;
  

  submitLoginHandler(loginForm:NgForm) {
    this.formSubmitted =  true;
    console.log(loginForm);

    if (!loginForm.valid) {
      return;
    }

    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (responseData) => {
        console.log(responseData);
        this.router.navigate([''])

      },
      (errorMessage) => {
        this.serverError= errorMessage;
        console.log(this.serverError);
        // console.log(error.error.errors); //if we handle the error in the component, 
        
      }
    );
  }
    
 
}

