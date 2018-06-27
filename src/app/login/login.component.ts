import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostgreSqlService } from '../services/postgre-sql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  error: String;

  firstName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(fb: FormBuilder, private router: Router, private postgreSqlService : PostgreSqlService) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password" : this.password,
    })
  }

  onSubmit(){
    this.postgreSqlService.login(this.form.value.firstName, this.form.value.password)
    .subscribe( response => {
      if(response["auth"]){
        this.error = null;
        localStorage.setItem('token', response["token"])
        localStorage.setItem('user', response["user"])
        localStorage.setItem('userid', response["userid"])
        this.router.navigate(['main']);
        this.form.reset();
      } else if(response["err"]) {
        this.error = response["err"];
      }
    })
  }

  ngOnInit() {
  }
}
