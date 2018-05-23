import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostgreSqlService } from '../postgre-sql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  firstName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(fb: FormBuilder, private route: Router, private postgreSqlService : PostgreSqlService) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password" : this.password,
    })
  }

  onSubmit(){
    this.postgreSqlService.login(this.form.value.firstName, this.form.value.password)
    .subscribe( valid => {
      if(valid){
        this.route.navigate(['main']);
        this.form.reset();
      } else {
        console.log("Error, username or password was incorrect")
      }
    })
  }

  ngOnInit() {
  }

}
