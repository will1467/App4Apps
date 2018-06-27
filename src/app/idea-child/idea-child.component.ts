import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { PostgreSqlService } from '../services/postgre-sql.service';
import { Idea } from '../models/Idea';
import { Comment } from '../models/Comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-child',
  templateUrl: './idea-child.component.html',
  styleUrls: ['./idea-child.component.css']
})
export class IdeaChildComponent implements OnInit {

  @Input() idea : Idea;

  Liked = false;
  showComments = false;
  comments = null;

  constructor(private postgreSqlService : PostgreSqlService, private router : Router) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.postgreSqlService.getComments(this.idea.IdeaId).subscribe(comments => this.comments = comments);
  }

  addComment(){
    // // var newComment = new Comment()
    // this.postgreSqlService.addComment()
  }

  checkIdeaAuthor(){
    var user = localStorage.getItem('user');
    if(this.idea.Author === user){
      return true;
    } else { return false; }
  }

  onDeleteIdeaClick(){
    this.postgreSqlService.deleteIdea(this.idea).subscribe(success => {
      if(success){
        this.router.navigate(['main']);
      } else {
        console.log("Deletion failed");
      }
    })
  }

  addLike(){
    if(!this.Liked){
      this.postgreSqlService.likeIdea(this.idea).subscribe(response => {
        if(response["err"]){
          console.log(response["err"]);
        } else {
          this.idea.Likes += <any>1;
          this.Liked = true;
        }
      })
    }
  }

  showCommentBox(){
    let bool = this.showComments ? false : true
    this.showComments = bool;
  }

}
