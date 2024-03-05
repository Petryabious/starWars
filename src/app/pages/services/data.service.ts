import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../shared/services/api_consts';
import { Observable } from 'rxjs';
import { Planet, ResponseContainer } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _httpClient: HttpClient) {}

  public getNavigation(): Observable<{[key:string]:string}> {
    return this._httpClient.get<{[key:string]:string}>(baseUrl);
  }

  public getPlanets():Observable<ResponseContainer<Planet>>{
    return this._httpClient.get<ResponseContainer<Planet>>(`${baseUrl}planets`)
  }
}
