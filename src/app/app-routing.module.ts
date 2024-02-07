import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/jobs';

const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',loadChildren: () => import('./feature/feature.module').then(i => i.FeatureModule),
  },
  { path: '**', redirectTo: MAIN, pathMatch: 'full' },
  { path: 'jobs', loadChildren: () => import('./modules/job/job.module').then(i => i.JobsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
