import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './homepage.component.html',
  providers: [TaskService],
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  tasks: any[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';

  constructor(private taskService: TaskService, private authService: AuthService, private router: Router) {} // Router'ı inject ediyoruz

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (this.newTaskTitle && this.newTaskDescription) {
      this.taskService.createTask({ title: this.newTaskTitle,
         description: this.newTaskDescription }).subscribe((task) => {
        this.tasks.push(task);
        this.newTaskTitle = ''
        this.newTaskDescription= '';

      });

    }
  }
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId); // Task listesini güncelle
    });
  }
  logout() {
    this.authService.logout(); // AuthService üzerinden çıkış yapılıyor
    localStorage.removeItem('token'); // Token'ı temizliyoruz
    this.router.navigate(['/']); // Login sayfasına yönlendiriyoruz
  }
}
