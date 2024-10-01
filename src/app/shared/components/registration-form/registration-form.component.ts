import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@app/auth/services/auth.service";
import { EmailValidatorDirective } from "@app/shared/directives/email.directive";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})


export class RegistrationFormComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) {}

  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.

  formSubmitted: boolean = false;

  registrationBtnText: string = "login";

  serverError:string='';

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        // Validators.minLength(6),
      ]),
    });
  }

  submitRegistrationHandler(registrationForm: FormGroup) {
    this.formSubmitted = true;
    if (!registrationForm.valid) {
      return;
    }

    console.log(this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe(
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
