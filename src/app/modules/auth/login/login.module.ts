import { NgModule } from '@angular/core';
import { routes } from './login.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class LoginModule {
}
