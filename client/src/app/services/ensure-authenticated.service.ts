import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { PostgreSqlService } from './postgre-sql.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsureAuthenticatedService implements CanActivate {

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) { }

  private canActivateRoute = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this.postgreSqlService.authenticate();
    }
  }
