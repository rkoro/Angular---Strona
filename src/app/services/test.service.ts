import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  selectAllUrl = 'http://13.48.189.101/api/api.py/rkr/getItems';
  insertOneUrl = 'http://13.48.189.101/api/api.py/rkr/addItem';
  deleteItemUrl = 'http://13.48.189.101/api/api.py/rkr/deleteItem';
  options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };


  constructor(private http: HttpClient) { }

  public getRekordy() {
    return this.http.get(this.selectAllUrl);
  }

  // tslint:disable-next-line: variable-name
  public insert(x: number) {
    return this.http.post(this.insertOneUrl, {
      liczba_uz: x,
    });
  }
  public deleteItem(x: number) {
    console.log('service', x);
    return this.http.post(this.deleteItemUrl, {
      id: x,
    });
  }

}

// , {
//   headers: {
//     'content-type': 'application/json'
//   }
// }
