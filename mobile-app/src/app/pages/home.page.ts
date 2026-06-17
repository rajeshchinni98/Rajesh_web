import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  items = [] as any[];
  username = '';
  constructor(private router: Router, private itemService: ItemService) {
    const u = localStorage.getItem('user');
    this.username = u ?? '';
    this.items = this.itemService.getAll();
  }

  openDetail(id: string) {
    this.router.navigate(['/detail', id]);
  }

  goSettings() {
    this.router.navigate(['/settings']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
