import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage {
  username = '';
  password = '';
  error = '';
  constructor(private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.error = 'Please enter username and password.';
      return;
    }
    // mock login
    localStorage.setItem('user', this.username);
    this.router.navigate(['/home']);
  }
}
