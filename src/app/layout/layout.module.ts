import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarInvisibleComponent } from './components/navbar-invisible/navbar-invisible.component';



@NgModule({
  declarations: [
    NavbarInvisibleComponent
  ],
  exports: [
    NavbarInvisibleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
