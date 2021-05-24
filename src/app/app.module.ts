import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainlayoutComponent } from './views/mainlayout.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ResourceNotFoundViewComponent } from './views/errors/resource-not-found-view/resource-not-found-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    LoginViewComponent,
    SideNavComponent,
    TopNavComponent,
    ResourceNotFoundViewComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
