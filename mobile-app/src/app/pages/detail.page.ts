import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEMS } from '../../assets/mock-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html'
})
export class DetailPage {
  item = null as any;
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = ITEMS.find(i => i.id === id) ?? { title: 'Not found', description: '' };
  }

  back() {
    this.router.navigate(['/home']);
  }
}
