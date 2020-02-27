import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private service: AuthserviceService, ) {

  }
  canActivate(){

    if(this.service.getCurrentUser()){
      return true;

    }else{
      this.router.navigate(['']);
      return false;
    }


  }
 
  }
  

