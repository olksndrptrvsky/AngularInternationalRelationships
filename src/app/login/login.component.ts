import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.username, this.password);
    this.password = null;
    if (this.authService.isLoggedIn())
    {
      this.router.navigateByUrl('/indexes');
    }
  }


}
