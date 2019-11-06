import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login-pengajar', loadChildren: './login-pengajar/login-pengajar.module#LoginPengajarPageModule' },
  { path: 'senarai-subjek', loadChildren: './senarai-subjek/senarai-subjek.module#SenaraiSubjekPageModule' },
  { path: 'jana-qr', loadChildren: './jana-qr/jana-qr.module#JanaQRPageModule' },
  { path: 'senarai-hadir', loadChildren: './senarai-hadir/senarai-hadir.module#SenaraiHadirPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
