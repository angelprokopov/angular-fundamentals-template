import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // Add your code here
     constructor(private authService:AuthService) {

     }
intercept (request:HttpRequest<any>, next:HttpHandler) {
      
    return next.handle(request);
}


    //Implement session-storage.service.ts into the src/app/auth/services/session-storage.service.ts file:

    // modified request, add headers :
    // https://primeholding.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466372#overview 
    // 1:20


    // responce HttpInterceptor

    // https://primeholding.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466376#overview
}
