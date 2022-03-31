import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private httpClient: HttpClient) {}

  url_profile = 'http://localhost:8081/profile';

  public createProfile(profile: profile): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

    let httpOptions = {
      headers: httpHeaders,
    };

    return this.httpClient.post(
      this.url_profile,
      JSON.stringify(profile),
      httpOptions
    );
  }
}
