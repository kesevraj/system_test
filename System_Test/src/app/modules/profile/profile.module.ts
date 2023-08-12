import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {ProfileRoutingModule} from  './profile-routing.module'

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ProfileListComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    DragScrollModule,
    SharedModule,
    CarouselModule,
    NgbModule
  ]
})
export class ProfileModule { }
