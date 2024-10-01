import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app/user.model";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError, Observable } from "rxjs";
import { SessionStorageService } from "./session-storage.service";

interface AuthResponse {
  successful: boolean;
  result?: string;
  errors?: string[];
  user?: {};
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = 'http://localhost:4000';
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) {}

  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user).pipe(
      tap(response => {
        if (response.successful) {

          if(response.result) {

            this.sessionStorage.setToken(response.result);
          }
          
          this.isAuthorized$$.next(true);
        }
      }),
      catchError(error => {
        this.isAuthorized$$.next(false);
        return throwError(error);
      })
    );
  }

  logout(): void {
    this.sessionStorage.deleteToken();
    this.isAuthorized$$.next(false);
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/registration`, user).pipe(
      tap(response => {
        if (response.successful) {
          if(response.result) {

            this.sessionStorage.setToken(response.result);
          }
          this.isAuthorized$$.next(true);
        }
      }),
      catchError(error => {
        this.isAuthorized$$.next(false);
        return throwError(error);
      })
    );
  }


  get isAuthorised(): boolean {
    return this.isAuthorized$$.value;
}

set isAuthorised(value: boolean) {
    this.isAuthorized$$.next(value);
}
  getLoginUrl(): string {
    return `${this.baseUrl}/login`;
  }
}
