import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostgreSqlService } from '../postgre-sql.service';
import { Idea } from '../models/Idea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  form : FormGroup;

  title = new FormControl("", Validators.required);
  description = new FormControl("", Validators.required);


  constructor(fb: FormBuilder,  private postgreSqlService : PostgreSqlService, private router : Router) {
    this.form = fb.group({
      "title": this.title,
      "description" : this.description,
    })
   }

  onSubmit() {
    var newIdea = new Idea(this.form.value.title, this.form.value.description, "admin"); 
    this.postgreSqlService.addIdea(newIdea).subscribe( idea => {
       if(idea){
         console.log("New Idea added successfully");
         this.router.navigate(['main'])
       }
    })
  }

  ngOnInit() {

  }

}