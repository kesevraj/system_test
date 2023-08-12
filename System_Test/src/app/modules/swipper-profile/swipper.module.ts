import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSwipperComponent } from './profile-swipper/profile-swipper.component';
import { SwipperRoutingModule } from './swipper-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProfileSwipperComponent],
  imports: [
    CommonModule,
    SwipperRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    SharedModule
  ]
})
export class SwipperModule { }
