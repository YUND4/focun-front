  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LayoutComponent } from 'src/app/layout/layout.component';

  const routes: Routes = [
    {
      component: LayoutComponent,
      data: {
        layout: 'navigate'
      },
      path: '',
      loadChildren: () => import('./job-list/job-list.module').then(i => i.ListModule),
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class JobRoutingModule {
  }
