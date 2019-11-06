import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { Iljtm } from '../model/iljtm.model';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

iljtm: Iljtm[];


  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService) { }

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
