import { Component, EventEmitter, OnInit, Input } from "@angular/core";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { Idea } from "../models/Idea";
import { Comment } from "../models/Comment";
import { Router } from "@angular/router";

@Component({
  selector: "app-idea-child",
  templateUrl: "./idea-child.component.html",
  styleUrls: ["./idea-child.component.css"]
})
export class IdeaChildComponent implements OnInit {
  @Input() idea: Idea;

  Liked = false;
  showComments = false;
  comments = [];
  commentText = null;

  constructor(private postgreSqlService: PostgreSqlService, private router: Router) {}

  ngOnInit() {
    this.Liked = false;
    this.getComments();
  }

  getComments() {
    this.postgreSqlService.getComments(this.idea._id).subscribe(comments => (this.comments = comments));
  }

  onCommentKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.addComment();
    }
  }

  addComment() {
    var newComment = new Comment(this.commentText, localStorage.getItem("user"), this.idea._id);
    this.postgreSqlService.addComment(newComment).subscribe(response => {
      if (response["err"]) {
        console.log(response["err"]);
      } else {
        this.commentText = null;
        this.getComments();
      }
    });
  }

  checkIdeaAuthor() {
    var user = localStorage.getItem("user");
    return this.idea.Author === user ? true : false;
  }

  onDeleteIdeaClick() {
    this.postgreSqlService.deleteIdea(this.idea).subscribe(success => {
      if (success) {
        this.idea._id = null;
      } else {
        console.log("Deletion failed");
      }
    });
  }

  addLike() {
    if (!this.Liked) {
      this.postgreSqlService.likeIdea(this.idea).subscribe(response => {
        if (response["err"]) {
          console.log(response["err"]);
        } else {
          this.idea.Likes += <any>1;
          this.Liked = true;
        }
      });
    }
  }

  showCommentBox() {
    let bool = this.showComments ? false : true;
    this.showComments = bool;
  }
}
