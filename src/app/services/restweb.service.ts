import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarketDataResponse } from '../api/response/market-data-response.interface';
import { AccessTokenResponse } from '../api/response/access-token-response.interface';

const baseUrl = 'https://integra1.solutions.webfg.ch/restweb';

@Injectable({
  providedIn: 'root'
})
export class RestwebService {
  authHeaders = new HttpHeaders({
    'Authorization': `Basic ${btoa('webfg-test:WW58YJj89ltR43Cr')}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<AccessTokenResponse> {
    return this.http.post<AccessTokenResponse>(`${baseUrl}/oauth/token?grant_type=password&username=test001&scope=uaa.user&password=ryby3NTyKduAMcvZ`, null, { headers: this.authHeaders});
  }

  getMarketData(accessToken): Observable<MarketDataResponse> {
    let requestHeaders = new HttpHeaders({'Authorization': `Bearer ${accessToken}`});
    return this.http.get<MarketDataResponse>(`${baseUrl}/quotes/2970161-1058-814?fields= LVAL_NORM,CLOSE_ADJ_NORM,NC2_PR_NORM,NC2_NORM,VOL,TUR,PY_CLOSE,YTD_PR_NORM`, { headers: requestHeaders});
  }
}
