import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdBodegasComponent } from './bd-bodegas/bd-bodegas.component';
import { BDMateriaPrimaComponent } from './bd-materia-prima/bd-materia-prima.component';
import { BdRecetasComponent } from './bd-recetas/bd-recetas.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PagesComponent } from './pages.component';
import { ProduccionComponent } from './produccion/produccion.component';

const routes: Routes = [
  {
    path:'dashboard', component: PagesComponent, children: [
      {path: '', component: ProduccionComponent},
      {path: 'produccion', component: ProduccionComponent},
      {path: 'inventario', component: InventarioComponent},
      {path: 'bd-materia-prima', component: BDMateriaPrimaComponent},
      {path: 'bd-recetas', component: BdRecetasComponent},
      {path: 'bd-bodegas', component: BdBodegasComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
