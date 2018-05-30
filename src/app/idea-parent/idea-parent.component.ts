import { Component, OnInit } from '@angular/core';
import { IDEAS } from '../mock-ideas';
import { PostgreSqlService } from '../postgre-sql.service';
import { Idea } from '../Idea';
import { Router, NavigationEnd } from '@angular/router';


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
        this.initialiseIdeas();
      }
    })
   }


  ngOnInit() {
    this.initialiseIdeas();
  }

  initialiseIdeas() {
    this.postgreSqlService.getIdeas().subscribe(ideas => this.ideas = ideas);
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }

}
