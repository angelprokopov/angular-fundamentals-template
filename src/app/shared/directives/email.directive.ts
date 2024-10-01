import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Directive({
  selector: "[emailValidator]",
  providers: [
    /*Add your code here*/
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  // Add your code here
  validate(control: FormControl) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
}
