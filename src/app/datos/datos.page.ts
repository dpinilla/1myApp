import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { InsertDatosPage } from './insert-datos/insert-datos.page';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  //datos: Array<any> = []
  datos:any
  constructor(private conexion: ConexionService,
              private alertCtrl: AlertController,
              private toastController: ToastController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.visualizaDatos()
  }

  visualizaDatos(){
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }
    )
    /* this.datos=[
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
    ] */
  }

  removeDatos(datId:any){
    let remove:any = {}
    remove["datId"] = datId
    this.alertCtrl.create({
      header: "Eliminar",
      message: "¿Está seguro que desea ELIMINAR?",
      buttons:[
        {text: "Cancelar"},
        {text: "Eliminar",
         handler:() => {
          this.conexion.removeDatos(remove).subscribe(
            data => {
              this.presentToast()
            }
          )
         },
      },
      ],
    })
    .then((myAlert) => myAlert.present())
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro eliminado',
      duration: 2000
    });
    toast.present();
  }

  doRefresh(event: any) {
    this.conexion.consultaDatos().subscribe(
      response => {
        this.datos = response
        event.target.complete();
      }
    )
  }

  insert(){
    this.modalCtrl.create({
      component: InsertDatosPage
    })
    .then((modal) =>{
      modal.present()
      return modal.onDidDismiss
    })
  }

  updateDatos(datos:any){
    this.modalCtrl.create({
      component: InsertDatosPage, componentProps: {datos}
    })
    .then((modal) =>{
      modal.present()
      return modal.onDidDismiss
    })
  }

}
