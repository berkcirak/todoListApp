import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:8080/task/tasks';
  private taskUrlForPost = 'http://localhost:8080/task';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(this.taskUrl, { headers });
  }

  createTask(task: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${this.taskUrlForPost}/save`, task, { headers });
  }
  deleteTask(taskId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete(`${this.taskUrlForPost}/delete/${taskId}`, { headers });
  }
}
