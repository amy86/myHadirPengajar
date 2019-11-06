import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SenaraiHadirPage } from './senarai-hadir.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraiHadirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SenaraiHadirPage]
})
export class SenaraiHadirPageModule {}
