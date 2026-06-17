import { Injectable } from '@angular/core';

export interface Item { id: string; title: string; subtitle?: string; description?: string }

@Injectable({ providedIn: 'root' })
export class ItemService {
  private items: Item[] = [
    { id: '1', title: 'Account', subtitle: 'Profile & preferences', description: 'Manage account, profile, and preferences.' },
    { id: '2', title: 'Orders', subtitle: 'Your recent orders', description: 'View and track recent orders.' },
    { id: '3', title: 'Support', subtitle: 'Get help', description: 'Open support requests or read FAQs.' }
  ];

  getAll(): Item[] { return this.items; }
  getById(id: string): Item | undefined { return this.items.find(i => i.id === id); }
}
