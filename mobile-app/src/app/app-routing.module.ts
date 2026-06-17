import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { DetailPage } from './pages/detail.page';
import { SettingsPage } from './pages/settings.page';
import { ResumePage } from './pages/resume.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailPage, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsPage, canActivate: [AuthGuard] },
  { path: 'resume', component: ResumePage, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
