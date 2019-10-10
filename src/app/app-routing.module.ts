import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormSubscribeComponent } from './user-form-subscribe/user-form-subscribe.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'hand-me/account-particular/create', component: UserFormSubscribeComponent }
  // { path: '**', component: HomeComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
