import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${environment.API_URL}/products`;

  constructor(private http: HttpClient) {}

  getProductAll() {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = { headers: headers };
    return this.http.get(`${this.apiUrl}`, options);
  }
}
