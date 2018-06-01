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
    let canActivate = false;
    if(token === "null"){
      return true;
    //   this.postgreSqlService.authenticate(token, UserId).subscribe( response => {
    //     if(response["auth"]){
    //       canActivate = false;
    //     } else {
    //       canActivate =  true
    //     }
    //   })
    // } else {
    //   canActivate =  true
    // }
    } else {
      this.router.navigate(['main']);
      return false;
   }
  }
}
