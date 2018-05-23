import { Component, OnInit } from '@angular/core';
import { PostgreSqlService } from '../postgre-sql.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ideas = null;

  constructor(private postgreSqlService : PostgreSqlService  ) { }

  ngOnInit() {
  }

}
