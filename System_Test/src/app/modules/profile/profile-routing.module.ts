import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileListComponent
  },
  {
    path:'details/:id',
    component:ProfileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }