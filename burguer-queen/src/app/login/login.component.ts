import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../interfaces/login.interface';
import { ResponseI } from '../interfaces/response.interface';
import { ApiBQService } from '../services/api-bq.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin = new FormGroup({
    email : new FormControl('', Validators.email),
    password : new FormControl('',Validators.required)
  })

  constructor( private api:ApiBQService, private router:Router) {}
  errorStatus:boolean = false;
  errorMsg:any = "";

// Al cerrar secion hace el sessionstorage . clear
// Sevisio de productos

  onClickLogin(form:any){ // Cómo colocarlo sin necesidad de definir parámetro
    this.api.loginByEmail(form).subscribe({

      next: (data:any) =>{
      let dataResponse:any = data;
      sessionStorage.setItem("token", dataResponse.accessToken);
      console.log(dataResponse);

      if(dataResponse.user.role === "waiter"){
        this.router.navigate(['menu'])
      } else if (dataResponse.user.role === "cheff") {
        this.router.navigate(['orders'])
      } else {
        this.errorStatus = true;
        this.errorMsg = "Usuario no tiene permiso para acceder, consultar con administrador";

      }
    },
      error: (error:any) => {
        console.log(error);

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



}

