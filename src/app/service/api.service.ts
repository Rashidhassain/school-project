import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  addNewUser(form) {
    return this.httpClient.post(environment.baseURL + '/register', form, { responseType: 'text' as 'json' });
  }
  
}
