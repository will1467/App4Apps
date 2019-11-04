import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostgreSqlService } from "../services/postgre-sql.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  notLoggedIn = true;
  notLoggedInText = "";
  linkRoute = "";
  signedInUser = localStorage.getItem("user");

  constructor(public router: Router, private postgreSqlService: PostgreSqlService) {}

  ngOnInit() {
    switch (this.router.url) {
      case "/":
      case "/login":
        this.notLoggedInText = "Register";
        this.linkRoute = "/register";
      case "/register":
        this.notLoggedInText = "Login";
        this.linkRoute = "/";
      default:
        this.notLoggedIn = false;
    }
  }

  onLogout() {
    localStorage.setItem("token", null);
    localStorage.setItem("userid", null);
    localStorage.setItem("user", null);
    this.router.navigate(["/"]);
  }

  onAccountDelete() {
    this.postgreSqlService.deleteAccount(localStorage.getItem("userid")).subscribe(response => {
      if (response) {
        this.onLogout();
      } else {
        console.log("An unexpected error occured : Deletion failed");
      }
    });
  }
}
