import { Component, OnInit } from '@angular/core';
import { IProductos } from 'src/Interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
   productos: IProductos []=[
    {
        nombre:"botines",
        marca:"adidas",
        categoria:"calzado",
        precio:15500

    },
    {
        nombre:"zapatillas",
        marca:"nike",
        categoria:"calzado",
        precio:30000
    }
]
  constructor() { }

  ngOnInit(): void {
  }


}
