import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app/user.model";
import { catchError } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
import { SessionStorageService } from "./session-storage.service";

interface AuthResponse {
  successful: boolean;
  result?: string; // only returns result when sucesfully registring - "User was created." ;
  errors?: string[];
  user?: {}
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient,  sessionStorage:SessionStorageService) {

  }

//   isAuthorized$$  = new BehaviorSubject(false); how to make it be one subject and  change values

  login(user: User) {
    // replace 'any' with the required interface
    // Add your code here

    return this.http.post<AuthResponse>(`http://localhost:4000/login`, user)
      .pipe(
        
        catchError((errResponse) => { 
            console.log(errResponse);
            
          let errorMessage = "An unknown error ocurred";
          if (!errResponse.error.successful) {
            errorMessage = errResponse.error.result;
          }
          return throwError(errorMessage);
        })
      );
  }

  logout(user:User) {
    // Add your code here
    return this.http
    .delete<AuthResponse>(`http://localhost:4000/logout`)
    .pipe(
      catchError((errResponse) => {
          console.log(errResponse);
          
        let errorMessage = "An unknown error ocurred";
        if (!errResponse.error.successful) {
          errorMessage = errResponse.error.result;
        }
        return throwError(errorMessage); 
      })
    );

  }

  register(user: User) {
    // replace 'any' with the required interface
    // Add your code here
    return this.http
    .post<AuthResponse>(`http://localhost:4000/register`, user)
    .pipe(
      catchError((errResponse) => {
        let errorMessage = "An unknown error ocurred";
        if (errResponse.error.errors) {
          errorMessage = errResponse.error.errors;
        }
        return throwError(errorMessage);
      })
    );


  }

  get isAuthorised() {
    // Add your code here. Get isAuthorized$$ value

    return true;
  }

  set isAuthorised(value: boolean) {
    // Add your code here. Change isAuthorized$$ value
  }

  getLoginUrl() {
    // Add your code here
  }
}
