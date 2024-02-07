import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './job-list.routing'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class JobListModule { }
