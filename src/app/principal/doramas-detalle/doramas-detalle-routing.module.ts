import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoramasDetallePage } from './doramas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DoramasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoramasDetallePageRoutingModule {}
