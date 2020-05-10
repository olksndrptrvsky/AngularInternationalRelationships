import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./entities/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUrl = '/api/token/token';

  constructor(
    private http: HttpClient,
  ) { }

  login(username: String, password: String): void {
    this.http.post<User>(this.tokenUrl, {username, password})
      .subscribe(user => {
        localStorage.setItem('accessToken', user.accessToken);
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }


  isLoggedIn() : boolean {
    return localStorage.getItem('accessToken') != null;
  }
}
