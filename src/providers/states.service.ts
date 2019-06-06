import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  public serviceBaseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(public http:HttpClient) { }

  public getAllStates() : Promise<any> {
    return this.http.get(this.serviceBaseUrl).toPromise();
  }
}
