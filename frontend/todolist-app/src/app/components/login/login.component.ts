import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe((res: any) => {
      // Eğer backend sadece token döndürüyorsa:
      if (res) {
        localStorage.setItem('token', res); // Token'ı kaydetme
        this.router.navigate(['/home']); // Login başarılı olursa yönlendirme
      }
    }, error => {
      console.error('Login failed:', error); // Hata durumu
    });
  }
}
