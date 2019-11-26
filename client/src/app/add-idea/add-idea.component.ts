import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { PostgreSqlService } from "../services/postgre-sql.service";
import { Idea } from "../models/Idea";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "app-add-idea",
  templateUrl: "./add-idea.component.html",
  styleUrls: ["./add-idea.component.css"]
})
export class AddIdeaComponent implements OnInit {
  private readonly notifier: NotifierService;
  form: FormGroup;

  title = new FormControl("", Validators.required);
  description = new FormControl("", Validators.required);

  constructor(
    fb: FormBuilder,
    private postgreSqlService: PostgreSqlService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.form = fb.group({
      title: this.title,
      description: this.description
    });
    this.notifier = notifierService;
  }

  onSubmit() {
    var newIdea = new Idea(
      this.form.value.title,
      this.form.value.description,
      localStorage.getItem("user")
    );
    this.postgreSqlService.addIdea(newIdea).subscribe(response => {
      if (response["success"]) {
        this.router.navigate(["main"]);
      } else if (response["err"]) {
        this.notifier.notify("error", response["err"]);
      }
    });
  }

  ngOnInit() {}
}
