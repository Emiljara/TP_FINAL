import { Component, Output, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput, IonText, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonIcon } from '@ionic/angular/standalone';
import { environment } from 'src/app/app.component';
import { person} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabs, IonRouterOutlet, IonApp, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonText],
})
export class HomePage {
  constructor(private router: Router) {
  }
  navigateToProfile(){
    this.router.navigate(['profile']);
  }
}
// export class formNegocio {
//   mostrarFormulario = false; 
//   datosFormulario = {
//     nombre: '',
//     nombre_negocio: '',
//     correo: '',
//     telefono: '',
//     direccion: '',
//     foto: ''
//     };
  
//     constructor() {}
  
//     enviarFormulario() {
//       console.log('Datos del formulario:', this.datosFormulario);
//       this.limpiarFormulario();
//       this.mostrarFormulario = false; 
//     }
  
//     limpiarFormulario() {
//       this.datosFormulario = {
//         nombre: '',
//         nombre_negocio: '',
//         correo: '',
//         telefono: '',
//         direccion: '',
//         foto: ''
//       };
//     }
//   }

