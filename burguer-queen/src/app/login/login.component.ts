import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiBQService } from '../services/api-bq.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin = new FormGroup({//se utiliza para encapsular y gestionar la lógica de validación y estado de un formulario.
    email : new FormControl('', Validators.email),
    password : new FormControl('',Validators.required)
    //FormControl maneja los valores y validaciones de un campo de formulario específico.
  })

  constructor( private api:ApiBQService, private router:Router, private toast: NgToastService ) {}
  errorStatus:boolean = false;
  errorMsg:any = "";

// Al cerrar secion hace el sessionstorage . clear
// Sevisio de productos

  onClickLogin(form:any){ // Cómo colocarlo sin necesidad de definir parámetro
    this.api.loginByEmail(form).subscribe({

      next: (data:any) =>{
      let dataResponse:any = data;
      sessionStorage.setItem("token", dataResponse.accessToken);
      sessionStorage.setItem("user", dataResponse.user.role);
      console.log(data);
      this.showSuccess();

      if(dataResponse.user.role === "waiter"){
        this.router.navigate(['menu'])
      } else if (dataResponse.user.role === "cheff") {
        this.router.navigate(['orders'])
      } else {
        this.showError("Access denied, contact admin")
        this.errorStatus = true;
        this.errorMsg = "Usuario no tiene permiso para acceder, consultar con administrador";

      }
    },
      error: (error:any) => {
        console.log(error);
        this.showError(error.error);
          this.errorStatus = true;
          this.errorMsg = error.error;
      },

        complete: ()=>{},
    })
  }

  get email(){
    return this.formLogin.get('email') as FormControl;//as formcontrol es para quitar el error y no usar ? en html
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  showSuccess() {
    this.toast.success({detail:"Success!",summary:'Login successfully', duration:5000});
  }

  showError(errorMsg:string) {
    this.toast.error({detail:"Error",summary: errorMsg, duration:5000});
  }

// Cambia visibilidad del password

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

}
