import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {Platform} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

export const environment = {
  loggedIn:false,
  username:'',
  name:'',
  lastName:'',
  profilePicture:''
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private lastBack = Date.now();
  constructor(private platform: Platform) {
    this.platform.backButton.subscribe(() => {
      if (Date.now() - this.lastBack < 500) { // logic for double tap: delay of 500ms between two clicks of back button
        (navigator as any).app.exitApp();
      }
      this.lastBack= Date.now();
  });
  }
}


  // // checkConnection(){
  //   export class checkConnection {
  //     constructor(
  //       private network: Network,
  //       private http: HttpClient,
  //       private toastController: ToastController
  //     ) {}
    
  //     async verificarConexion() {
  //       // Verificar la conexión de red
  //       const tipoConexion = this.network.type;
  //       if (!tipoConexion || tipoConexion === 'none') {
  //         await this.mostrarToast('No hay conexión de red');
  //         return;
  //       }
    
  //       // Verificar la conexión con el backend
  //       const urlBack = ''; // Cambia por la URL de tu backend
  //       this.http.get(urlBack).subscribe(
  //         async () => {
  //           console.log('El backend está disponible');
  //         },
  //         async () => {
  //           await this.mostrarToast('No se pudo conectar con el backend');
  //         }
  //       );
  //     }
    
  //     // Función para mostrar el toast
  //     async mostrarToast(mensaje: string) {
  //       const toast = await this.toastController.create({
  //         message: mensaje,
  //         duration: 3000,
  //         position: 'bottom',
  //       });
  //       await toast.present();
  //     }
  //   }
    // implementar chequea la coneccion de red y si tiene red chequea qla coneccion con el backend
    // si no tiene red o no tiene coneccion con el backend, muestra toast no tiene coneccion de red

