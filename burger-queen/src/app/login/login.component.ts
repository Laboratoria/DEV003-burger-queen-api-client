import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  formLogin: FormGroup;


  constructor(
    private  router: Router,
    private  builder: FormBuilder,
    private toastr: ToastrService,
    private  auth: AuthService) {
    this.formLogin = this.builder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  login() : void{
    console.log("aqui");
    const val = this.formLogin.value;
    console.log(val.user, val.password);

    this.auth.login(val.user, val.password).subscribe({next:(res) => {
      console.log(res);
      sessionStorage.setItem('token', res.accessToken);
      sessionStorage.setItem('idUser', res.user.id);
      this.router.navigate(['home']);
      console.log(res.accessToken);

    },
    error: (error) => {
      console.log(error);
      if (error.status === 400) {
        this.toastr.error(error.error, 'Credenciales no validas');
      } else {
        this.toastr.error('Un error inesperado', 'Error');
      }
    },
    });
  }

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // get formlogin() { return this.form.controls; }

  // ngOnInit() {
  //   this.loginform();
  // }
  // loginform(){

  //}
  // user = new FormControl('', Validators.required);
  // password = new FormControl('', [Validators.required, Validators.minLength(6)]);

// onSubmit(): void {
//   const data = this.form.value;

//   this.service.login(data.user, data.password).suscribe({
//     next:(result) =>{
//       sessionStorage.setItem('token', result.accesToken)
//       console.log(result.accesToken);
//       this.router.navigate(['home']);
//     }

//     },
//   })

  // if (this.formlogin.user.status === 'INVALID' || this.formlogin.password.status === 'INAVALID') {
  //   return;
  // }

// this.auth$.login(values.user, values.password)
// .pipe(first())
// .subscribe(response=>{
//   debugger;
//   console.log(response);
//   if (response){
//     localStorage.setItem('Token', response);
//     this.router$.navigate(['/home']);
//   }
// })
//}

