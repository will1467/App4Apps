import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  loggedIn = false;
  loggedInText = "";
  linkRoute = "";
  signedInUser = localStorage.getItem("user");

  constructor(
    public router: Router,
    private postgreSqlService: PostgreSqlService,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.loggedIn = localStorage.getItem("user") ? true : false;
    switch (this.router.url) {
      case "/":
      case "/login":
        this.loggedInText = "Register";
        this.linkRoute = "/register";
        break;
      case "/register":
        this.loggedInText = "Login";
        this.linkRoute = "/";
        break;
    }
  }

  onLogout() {
    localStorage.setItem("token", "");
    localStorage.setItem("userid", "");
    localStorage.setItem("user", "");
    this.router.navigate(["/"]);
    this.notifier.notify("info", "You have been logged out");
  }

  onAccountDelete() {
    this.postgreSqlService
      .deleteAccount(localStorage.getItem("userid"))
      .subscribe(response => {
        if (response) {
          this.onLogout();
        } else {
          this.notifier.notify("error", "Account Deletion Failed");
        }
      });
  }
}
