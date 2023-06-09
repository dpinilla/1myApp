import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  datos: Array<any> = []
  constructor() { }

  ngOnInit() {
    this.visualizaDatos()
  }

  visualizaDatos(){
    this.datos=[
      {
        nombre:"Diego",
        apellido: "Pinilla",
        edad: 25,
        deporte: "Futbol",
        imagen: "https://elcomercio.pe/resizer/VtSCWu5reTi7vSdepNUonGVBCtA=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TWI2EWKUC5FH3MIFADCXX2RGBE.png"
      },
      {
        nombre: "Alberto",
        apellido: "Hernández",
        edad: 15,
        deporte: "Natacion",
        imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/08/18/fluidra-se-alia-con-la-liga-europea-de-natacion-para-ser-socio-oficial-en-piscinas.jpeg"
      },
      {
        nombre: "Andrés",
        apellido: "Pinilla",
        edad: 19,
        deporte: "Tenis",
        imagen: "https://www.tiendacompensar.com/ccstore/v1/images/?source=/file/v1713271621845513499/products/id1008.pelota-de-tenis-y-raqueta-de-tenis.jpg"
      }
    ]
  }

}
