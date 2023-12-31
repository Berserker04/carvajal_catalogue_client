import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/authenticate`, {
      email,
      password
    });
  }
}
