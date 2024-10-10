import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, 
    private router: Router) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post('http://localhost:8080/user/login', { username, password }, { responseType: 'text' });
  }
  logout() {
    localStorage.removeItem('token');  
    this.router.navigate(['/login']);
  }
}
