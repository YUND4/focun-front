import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EmptyComponent } from './empty/empty.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserService } from '@core/user/user.service';
import { BaseInterceptor } from '@core/base/base.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from '@core/auth/auth.service';
import { AuthModule } from '../modules/auth/auth.module';



@NgModule({
  declarations: [
    LayoutComponent,
    EmptyComponent,
    NavigateComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    AuthModule
  ],
  providers: [
  ]
})
export class LayoutModule { }
