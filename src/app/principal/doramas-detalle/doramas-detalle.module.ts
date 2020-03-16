import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoramasDetallePageRoutingModule } from './doramas-detalle-routing.module';

import { DoramasDetallePage } from './doramas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoramasDetallePageRoutingModule
  ],
  declarations: [DoramasDetallePage]
})
export class DoramasDetallePageModule {}
