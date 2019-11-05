import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage {

  constructor( private router: Router) {}

  login() {
    this.router.navigate(['login']);
  }
  home() {
    this.router.navigate(['home']);
  }
}
