import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: {
      layout: 'navigate'
    },
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(i => i.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
