  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth/auth.guard';
import { NoAuthGuard } from '@core/guard/auth/noAuth.guard';
  import { LayoutComponent } from 'src/app/layout/layout.component';

  const routes: Routes = [
    {
      path: '',
      data: {
        layout: 'navigate'
      },
      component: LayoutComponent,
      loadChildren: () => import('./job-list/job-list.module').then(i => i.JobListModule),
    },
    {
      path: 'create',
      data: {
        layout: 'navigate'
      },
      canActivate: [AuthGuard],
      component: LayoutComponent,
      loadChildren: () => import('./job-create/job-create.module').then(i => i.JobCreateModule),
    },
    {
      path: 'application',
      data: {
        layout: 'navigate'
      },
      canActivate: [AuthGuard],
      component: LayoutComponent,
      loadChildren: () => import('./job-application/job-application.module').then(i => i.JobApplicationModule),
    },
    {
      path: 'detail/:id',
      data: {
        layout: 'navigate'
      },
      canActivate: [AuthGuard],
      component: LayoutComponent,
      loadChildren: () => import('./job-detail/job-detail.module').then(i => i.JobDetailModule),
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class JobRoutingModule {
  }
