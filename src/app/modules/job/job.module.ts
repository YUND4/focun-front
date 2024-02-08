import { NgModule } from '@angular/core';
import { JobRoutingModule } from './job-routing.module';
import { JobApplicationComponent } from './job-application/job-application.component';



@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    JobRoutingModule
  ]
})

export class JobModule { }