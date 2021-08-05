import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';
import { HomeComponent } from './home/home.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { BDMateriaPrimaComponent } from './bd-materia-prima/bd-materia-prima.component';
import { BdRecetasComponent } from './bd-recetas/bd-recetas.component';
import { BdBodegasComponent } from './bd-bodegas/bd-bodegas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    NotFoundPagesComponent,
    HomeComponent,
    ProduccionComponent,
    InventarioComponent,
    BDMateriaPrimaComponent,
    BdRecetasComponent,
    BdBodegasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
