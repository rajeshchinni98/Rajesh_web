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
    this.error = '';
    if (!this.username || !this.password) {
      this.error = 'Please enter username and password.';
      return;
    }
    if (this.username.length < 3) { this.error = 'Username must be at least 3 characters.'; return; }
    if (this.password.length < 4) { this.error = 'Password must be at least 4 characters.'; return; }

    // mock login
    localStorage.setItem('user', this.username);
    this.router.navigate(['/home']);
  }
}
