import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators/";
import { environment } from 'src/environments/environment';


let Api = "";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    Api = environment.urlApi;
  }


  get(uri: string): Observable<any> {

    return this.http.get(Api + "/" + uri).pipe(
      tap(
        () => {

        },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }



  handleError(err) {
    //handle Error
    return err;
  }


}
