import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public dateNow = new Date()
  public formMsg: FormGroup
  public message : AbstractControl //id name
  public document : AbstractControl
  public gender : AbstractControl
  
  public sub = false


  constructor(private formBuilder: FormBuilder) {
    this.formMsg = this.formBuilder.group(
      {
        message: ['', Validators.required ],
        document: ['', Validators.required ],
        gender: ['', Validators.required ]
      }
    )

    this.message = this.formMsg.controls['message']
    this.document = this.formMsg.controls['document']
    this.gender = this.formMsg.controls['gender']
   }

  ngOnInit(): void {
  }

  get f() {
    return this.formMsg.controls;
  }

  enviar(){
    console.log( this.formMsg.value )
    this.sub = true
    if(this.formMsg.invalid)
      return
   
    //llamar servicio ....   
    ///console.log("formulario valido ...")
    
  }

  reset(){
    this.formMsg.reset()
  }

}
