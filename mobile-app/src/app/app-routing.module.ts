import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { DetailPage } from './pages/detail.page';
import { SettingsPage } from './pages/settings.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'detail/:id', component: DetailPage },
  { path: 'settings', component: SettingsPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
