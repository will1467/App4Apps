import { Component, OnInit, Input } from '@angular/core';
import { PostgreSqlService } from '../services/postgre-sql.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment : Comment;

  constructor(private postgreSqlService : PostgreSqlService) { }

  ngOnInit() {
  }

}
