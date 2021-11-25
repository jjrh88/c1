import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from  'rxjs/operators'
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router){

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return this.authService.islog(sessionStorage.getItem('token'))
       .pipe(take(1))
       .pipe(map( (res:any) => {
        if(res.status == true){
           return true
        }
        else{
          this.router.navigate(['/login'])
          return false
        }
      }))
    }

    test(){
      return this.authService.islog(sessionStorage.getItem('token')).subscribe((res:any)=>{
        console.log(res)
      })
    }
  }
