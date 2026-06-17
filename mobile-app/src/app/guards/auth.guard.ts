import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const u = localStorage.getItem('user');
    if (u && u.length > 0) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
