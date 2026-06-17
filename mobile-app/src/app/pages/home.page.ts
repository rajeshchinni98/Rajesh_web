import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITEMS } from '../../assets/mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  items = ITEMS;
  username = '';
  constructor(private router: Router) {
    const u = localStorage.getItem('user');
    this.username = u ?? '';
  }

  openDetail(id: string) {
    this.router.navigate(['/detail', id]);
  }

  goSettings() {
    this.router.navigate(['/settings']);
  }
}
