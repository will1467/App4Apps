import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { PostgreSqlService } from './postgre-sql.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class LoginRedirectService implements CanActivate {

  constructor(private postgreSqlService : PostgreSqlService, private router : Router, private ngZone : NgZone) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    const token = localStorage.getItem('token');
    const UserId =  localStorage.getItem('userid');
    let canActivate = false;
    debugger;
    if(token === "null"){
      this.postgreSqlService.authenticate(token, UserId).subscribe( response => {
        if(response["auth"]){
          this.router.navigate(['main']);
        } else {
          canActivate =  true
        }
      })
      return canActivate;

    } else {
      return true;
   }
  }
}
