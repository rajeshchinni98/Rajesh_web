import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html'
})
export class SettingsPage {
  dark = false;
  constructor() {
    const d = localStorage.getItem('dark') === '1';
    this.dark = d;
    this.apply();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('dark', this.dark ? '1' : '0');
    this.apply();
  }

  apply() {
    if (this.dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }
}
