import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SenaraisubjekPage } from './senaraisubjek.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraisubjekPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SenaraisubjekPage]
})
export class SenaraisubjekPageModule {}
