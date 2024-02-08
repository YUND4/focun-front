import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Llama al método de cierre de sesión de tu servicio de autenticación
    this.authService.signOut().subscribe(() => {
      // Una vez completado el cierre de sesión, redirige al usuario
      this.router.navigate(['/jobs']);
    });

    // Devuelve false para cancelar la navegación original
    return false;
  }
}
