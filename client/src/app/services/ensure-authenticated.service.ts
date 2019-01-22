import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { PostgreSqlService } from './postgre-sql.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsureAuthenticatedService {

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if(token === "null"){
      this.router.navigate(['/'])
       return false;
    } else {
      return true;
    }

  }

}
