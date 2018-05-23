import { Component, OnInit } from '@angular/core';
import { IDEAS } from '../mock-ideas';
import { PostgreSqlService } from '../postgre-sql.service';
import { Idea } from '../Idea';


@Component({
  selector: 'app-idea-parent',
  templateUrl: './idea-parent.component.html',
  styleUrls: ['./idea-parent.component.css']
})
export class IdeaParentComponent implements OnInit {

  ideas = null;
  newIdea = new Idea("Title", "Description", "John Smith");

  constructor(private postgreSqlService : PostgreSqlService) { }


  ngOnInit() {
    this.postgreSqlService.getIdeas().subscribe(ideas => this.ideas = ideas);
    // this.postgreSqlService.addIdea(this.newIdea).subscribe( idea => {
    // this.ideas.push(idea)
    // })
  }

}
