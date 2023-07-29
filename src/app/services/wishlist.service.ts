import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiUrl = `${environment.API_URL}/wishlists`;

  constructor(private http: HttpClient) {}

  getMyProductAll() {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = { headers: headers };
    return this.http.get(`${this.apiUrl}`, options);
  }

  addToMyList(id: number) {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = { headers: headers };
    return this.http.post(`${this.apiUrl}/${id}`, {}, options);
  }

  delFromMyList(id: number) {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = { headers: headers };
    return this.http.delete(`${this.apiUrl}/${id}`, options);
  }
}
