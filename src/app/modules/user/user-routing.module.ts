import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    component: LayoutComponent,
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
