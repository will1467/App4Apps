import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { checkPasswordValidator } from '../shared/passwords-match.directive';
import { PostgreSqlService } from '../postgre-sql.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  firstName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  repeatedPassword = new FormControl("", Validators.required);
  email = new FormControl("", Validators.email);

  constructor(fb: FormBuilder, private postgreSqlService : PostgreSqlService, private router : Router) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password" : this.password,
      "repeatedPassword" : this.repeatedPassword,
      "email" : this.email,
     }, {validator : checkPasswordValidator
    })
  }

  onSubmit(){
    this.postgreSqlService.register(this.form.value.firstName, this.form.value.password, this.form.value.email)
    .subscribe( user => {
      console.log(user);
    })
    this.form.reset();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
