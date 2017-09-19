import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Litoos11Component } from './components/litoos11.component';
import { OpcionesComponent } from './components/opciones.component';
import { DescripcionComponent } from './components/descripcion.component';

const appRoutes: Routes = [
  {path: '', component: Litoos11Component },
  {path: 'litoos11', component: Litoos11Component },
  {path: 'opciones', component: OpcionesComponent },
  {path: 'descripcion', component: DescripcionComponent },
  {path: '**', component: Litoos11Component }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
