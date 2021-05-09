import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router'

const routes :  Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    //loadChildren:'./pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule )
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
