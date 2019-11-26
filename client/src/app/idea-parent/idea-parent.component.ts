import { Component, OnInit } from "@angular/core";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-idea-parent",
  templateUrl: "./idea-parent.component.html",
  styleUrls: ["./idea-parent.component.css"]
})
export class IdeaParentComponent implements OnInit {
  ideas = null;
  signedInUser = localStorage.getItem("user");

  constructor(
    private postgreSqlService: PostgreSqlService,
    private router: Router,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.postgreSqlService.getIdeas().subscribe(ideas => (this.ideas = ideas));
  }
}
