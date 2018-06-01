import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostgreSqlService } from '../services/postgre-sql.service';
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
    var newIdea = new Idea(this.form.value.title, this.form.value.description, localStorage.getItem('user')); 
    this.postgreSqlService.addIdea(newIdea).subscribe( response => {
       if(response["success"]){
         this.router.navigate(['main'])
       } else if(response["err"]){
         console.log(response["err"])
       }
    })
  }

  onLogout() {
    localStorage.setItem('token', "null");
    localStorage.setItem('userid', "null");
    localStorage.setItem('user', "null");
    this.router.navigate(['login']);
  }

  onAccountDelete() {
    this.postgreSqlService.deleteAccount(localStorage.getItem('userid')).subscribe(response => {
      if(response){
        this.onLogout();
      } else {
        console.log("An unexpected error occured : Deletion failed")
      }
    })
  }

  ngOnInit() {

  }

}
