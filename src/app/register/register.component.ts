import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { checkPasswordValidator } from '../shared/passwords-match.directive';
import { PostgreSqlService } from '../postgre-sql.service';

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

  constructor(fb: FormBuilder, private postgreSqlService : PostgreSqlService) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password" : this.password,
      "repeatedPassword" : this.repeatedPassword,
      "email" : this.email,
     }, {validator : checkPasswordValidator
    })
  }

  title = 'app';

  onSubmit(){
    console.log("onSubmit called");
    console.log(this.form.value)
    this.form.reset();
    // this.postgreSqlService
  }

  ngOnInit() {
  }

}
