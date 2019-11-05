import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senaraisubjek',
  templateUrl: './senaraisubjek.page.html',
  styleUrls: ['./senaraisubjek.page.scss'],
})
export class SenaraisubjekPage {

  constructor( private router: Router) { }

senaraisubjek() {
    this.router.navigate(['senaraisubjek']);
}
daftar() {
  this.router.navigate(['daftar']);
}
home() {
  this.router.navigate(['home']);
}
}
