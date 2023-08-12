import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSwipperComponent } from './profile-swipper/profile-swipper.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileSwipperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwipperRoutingModule { }