import { Component, OnInit } from '@angular/core';
import { VentasQuery } from '../../store/ventas.query';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(public store: VentasQuery) { }

  ngOnInit(): void {
  }

}
