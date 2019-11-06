import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SenaraiSubjekPage } from './senarai-subjek.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraiSubjekPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SenaraiSubjekPage]
})
export class SenaraiSubjekPageModule {}
