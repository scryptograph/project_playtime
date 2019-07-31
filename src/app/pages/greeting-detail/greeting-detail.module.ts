import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GreetingDetailPage } from './greeting-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GreetingDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GreetingDetailPage]
})
export class GreetingDetailPageModule {}
