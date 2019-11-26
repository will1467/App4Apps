import { Component, OnInit, Input } from "@angular/core";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { Comment } from "../models/Comment";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  Liked = false;

  constructor(
    private postgreSqlService: PostgreSqlService,
    private notifier: NotifierService
  ) {}

  ngOnInit() {}

  checkCommentAuthor() {
    var user = localStorage.getItem("user");
    return this.comment.Author === user ? true : false;
  }

  onDeleteCommentClick() {
    this.postgreSqlService.deleteComment(this.comment).subscribe(response => {
      if (response) {
        this.comment._id = null;
      } else {
        this.notifier.notify("error", response["err"]);
      }
    });
  }

  addLike() {
    if (!this.Liked) {
      this.postgreSqlService.likeComment(this.comment).subscribe(response => {
        debugger;
        if (response["err"]) {
          this.notifier.notify("error", response["err"]);
        } else {
          this.comment.Likes += <any>1;
          this.Liked = true;
        }
      });
    }
  }
}
