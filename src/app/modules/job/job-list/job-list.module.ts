import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './job-list.component';
import { routes } from './job-list.routing'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ListModule { }
