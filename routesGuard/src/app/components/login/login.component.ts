import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public dateNow = new Date()

  public formL: FormGroup
  public user: AbstractControl 
  public password : AbstractControl 
  public showLoader = false
  public submitted = false
  public roles : any

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) 
    {
    this.formL = this.formBuilder.group({
      user: ['', Validators.required ],
      password: ['', Validators.required ],
    })

    this.user = this.formL.controls['user']
    this.password = this.formL.controls['password']
  }

  ngOnInit() {
  }


  get f() {
    return this.formL.controls;
  }

  show(){
    this.showLoader = true
  }

  hide(){
    this.showLoader = false
  }

  login(){
    this.submitted = true
    console.log(this.formL.value)
    if(this.formL.invalid)
      return 
    this.showLoader = true
      this.authService.loginUser(this.formL.value).subscribe( (res:any)=>{
        console.log( res )
        if(res.status == true){
          this.showLoader = false
          sessionStorage.setItem('token',res.token)
          this.router.navigate(["/user"])
        }
        else
         this.showLoader = false
    })
  }

 /* getRolUser(id: number){
    this.rolesService.getModules(id).subscribe( (res:any)=>{
      console.log("list res ", res )
      this.roles = res
    })
  }*/

  removeInfo(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
