import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  readonly URL_API = this.config.getConfig().bussinesServer.url
  constructor(
    private http: HttpClient, 
    private config:ConfigService
    ) 
   {
   }

  ngOnInit(){}
 
  loginUser(dataUser: any){
    return this.http.post(this.URL_API+'/api/auth', dataUser)
  }

  islog(token: any){
    return this.http.get(this.URL_API+`/api/auth/${token}`)
  } 
}

