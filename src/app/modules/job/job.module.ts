import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing.module';
import { JobApplicationComponent } from './job-application/job-application.component';



@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})

export class JobsModule { }