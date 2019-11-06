import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'senaraisubjek', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'senaraisubjek', loadChildren: './senaraisubjek/senaraisubjek.module#SenaraisubjekPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'daftar', loadChildren: './daftar/daftar.module#DaftarPageModule' },
  { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
