import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './views/mainlayout.component';
import { ResourceNotFoundViewComponent } from './views/errors/resource-not-found-view/resource-not-found-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  {
    path: 'asm', component: MainlayoutComponent,
    children: [
      // {
      //   path: 'dashboard', 
      //   component: DashboardViewComponent,
      //   canActivate: [AccessGuard],
      //   data: {title: 'Dashboard'},
      // }
    ]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: ResourceNotFoundViewComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
