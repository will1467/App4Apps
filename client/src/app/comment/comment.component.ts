import { Component, OnInit, Input } from "@angular/core";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { Comment } from "../models/Comment";
import { Router } from "@angular/router";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  Liked = false;

  constructor(private postgreSqlService: PostgreSqlService) {}

  ngOnInit() {}

  checkCommentAuthor() {
    var user = localStorage.getItem("user");
    if (this.comment.Author === user) {
      return true;
    } else {
      return false;
    }
  }

  onDeleteCommentClick() {
    this.postgreSqlService.deleteComment(this.comment).subscribe(response => {
      if (response) {
        this.comment._id = null;
      } else {
        console.log("Comment deletion failed");
      }
    });
  }

  addLike() {
    if (!this.Liked) {
      this.postgreSqlService.likeComment(this.comment).subscribe(response => {
        if (response["err"]) {
          console.log(response["err"]);
        } else {
          this.comment.Likes += <any>1;
          this.Liked = true;
        }
      });
    }
  }
}
