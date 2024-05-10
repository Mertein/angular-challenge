import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-challenge';
  isLoggedIn = false;
  showProductsBoard = false;
  email?: string;

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.showProductsBoard = true;
      this.email = user.email;
    }
  }

  logout(): void {
    this.storageService.clean();
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();
    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }
}
