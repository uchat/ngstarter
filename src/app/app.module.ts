import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainlayoutComponent } from './views/mainlayout.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
