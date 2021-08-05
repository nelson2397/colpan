import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo: '/dashboard'
  },
  {
    path:'**', component: NotFoundPagesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule
  ]
})
export class AppRoutingModule { }
