import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { DetailPage } from './pages/detail.page';
import { SettingsPage } from './pages/settings.page';

@NgModule({
  declarations: [AppComponent, LoginPage, HomePage, DetailPage, SettingsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
