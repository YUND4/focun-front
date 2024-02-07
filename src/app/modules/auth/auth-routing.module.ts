import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '@core/guard/token/token.guard';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
