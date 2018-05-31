import { Component, OnInit } from '@angular/core';
import { PostgreSqlService } from '../services/postgre-sql.service';
import { Idea } from '../models/Idea';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-idea-parent',
  templateUrl: './idea-parent.component.html',
  styleUrls: ['./idea-parent.component.css']
})
export class IdeaParentComponent implements OnInit {

  ideas = null;
  navigationSubscription;

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) {
    this.navigationSubscription = this.router.events.subscribe((e : any) => {
      if(e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    })
   }


  ngOnInit() {
    this.initialiseIdeas();
  }

  initialiseIdeas() {
    this.postgreSqlService.getIdeas().subscribe(ideas => this.ideas = ideas);
  }

  onLogout() {
    localStorage.setItem('token', "null");
    localStorage.setItem('userid', "null");
    localStorage.setItem('user', "null");
    this.router.navigate(['login']);
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }

}
