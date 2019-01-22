import { Component, OnInit } from '@angular/core';
import { PostgreSqlService } from '../services/postgre-sql.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-idea-parent',
  templateUrl: './idea-parent.component.html',
  styleUrls: ['./idea-parent.component.css']
})
export class IdeaParentComponent implements OnInit {

  ideas = null;
  signedInUser = localStorage.getItem('user');

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) {
   }


  ngOnInit() {
    this.initialiseIdeas();
  }

  initialiseIdeas() {
    this.postgreSqlService.getIdeas().subscribe(ideas => this.ideas = ideas);
  }

  onLogout() {
    localStorage.setItem('token', null);
    localStorage.setItem('userid', null);
    localStorage.setItem('user', null);
    this.router.navigate(['/']);
  }

  onAccountDelete() {
    this.postgreSqlService.deleteAccount(localStorage.getItem('userid')).subscribe(response => {
      if(response){
        this.onLogout();
      } else {
        console.log("An unexpected error occured : Deletion failed")
      }
    })
  }

  ngOnDestroy(){
  }

}
