import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AddMateriaComponent } from './add-materia/add-materia.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AddMateriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    AddMateriaComponent
  ]
})
export class ComponentsModule { }
