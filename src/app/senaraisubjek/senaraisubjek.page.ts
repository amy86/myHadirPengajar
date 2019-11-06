import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { Iljtm } from '../model/iljtm.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from '../services/env.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-senaraisubjek',
  templateUrl: './senaraisubjek.page.html',
  styleUrls: ['./senaraisubjek.page.scss'],
})
export class SenaraisubjekPage implements OnInit {
  iljtm: Iljtm[];

  ngOnInit() {
    console.log('done');
    this.getiljtm();
  }

  constructor( private router: Router,
               private userService: UserService,
               private http: HttpClient,
               private storage: NativeStorage,
               private env: EnvService) { }

    senaraisubjek() {
        this.router.navigate(['senaraisubjek']);
    }
    daftar() {
      this.router.navigate(['daftar']);
    }
    home() {
      this.router.navigate(['home']);
    }

    nav() {
        this.router.navigate(['login']);
        }

        getiljtm() {
          return this.http.get<Iljtm[]>(this.env.API_URL + 'iljtm')
          .pipe(
            tap(iljtm => {
              this.iljtm = iljtm;
              return iljtm;
            })
          );
        }
}
