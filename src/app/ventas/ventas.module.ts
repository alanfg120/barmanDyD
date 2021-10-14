import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './views/ventas/ventas.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [VentasComponent],
  imports: [CommonModule, VentasRoutingModule, FormsModule, MaterialModule],
})
export class VentasModule {}
