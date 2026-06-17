import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html'
})
export class DetailPage {
  item = null as any;
  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = itemService.getById(id ?? '') ?? { title: 'Not found', description: '' };
  }

  back() {
    this.router.navigate(['/home']);
  }
}
