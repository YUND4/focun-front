import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/jobs';

const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  { path: 'auth',loadChildren: () => import('./modules/auth/auth.module').then(i => i.AuthModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(i => i.UserModule) },
  { path: 'jobs', loadChildren: () => import('./modules/job/job.module').then(i => i.JobsModule) },
  { path: '**', redirectTo: MAIN, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
