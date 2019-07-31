import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import anime from 'animejs'

import { IonicModule } from '@ionic/angular';

import { Greeting2Page } from './greeting2.page';

const routes: Routes = [
  {
    path: '',
    component: Greeting2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Greeting2Page]
})

export class Greeting2PageModule {
}
