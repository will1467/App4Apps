import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { PostgreSqlService } from '../services/postgre-sql.service';
import { Idea } from '../models/Idea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-child',
  templateUrl: './idea-child.component.html',
  styleUrls: ['./idea-child.component.css']
})
export class IdeaChildComponent implements OnInit {

  @Input() idea : Idea;

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) { }

  ngOnInit() {
  }

  onDeleteIdeaClick(){
    this.postgreSqlService.deleteIdea(this.idea).subscribe(success => {
      if(success){
        this.router.navigate(['main']);
      } else {
        console.log("Entry not found")
      }
    })
  }

}
