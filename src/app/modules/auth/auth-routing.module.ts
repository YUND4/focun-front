import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutGuard } from '@core/guard/logout/logout.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    data: {
      layout: 'empty'
    },
    component: LayoutComponent,
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
  {
    path: 'sign-up',
    data: {
      layout: 'empty'
    },
    component: LayoutComponent,
    loadChildren: () => import('./sign-up/sign-up.module').then(i => i.SignUpModule),
  },
  {
    path: 'logout',
    canActivate: [LogoutGuard],
    data: {
      layout: 'empty'
    },
    component: LayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
