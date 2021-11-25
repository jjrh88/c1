import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent, canActivate: [ AuthGuard ] },
  { path: 'product', component: ProductComponent, canActivate: [ AuthGuard ] },
  { path: 'user', component: UserComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'login'
    /*ruta por defecto, y en caso de que el usuario ingrese o trate de acceder a una 
      inexisten sera redirigido al login 
   
           //canActivateChild: [ ChildGuard ],},
    */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
