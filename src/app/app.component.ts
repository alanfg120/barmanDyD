import { Component, OnInit } from '@angular/core';
import { VentasService } from './ventas/store/ventas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private serviceVentas: VentasService){}
  ngOnInit(): void {
    this.serviceVentas.getCaja()
  }
  title = 'barman';
}
