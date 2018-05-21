import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  firstName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  repeatedPassword = new FormControl("", Validators.required);
  email = new FormControl("", Validators.email);

  constructor(fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password" : this.password,
      "repeatedPassword" : this.repeatedPassword,
      "email" : this.email
    })
  }

  title = 'app';

  onSubmit(){
    console.log("onSubmit called");
    this.form.reset();
    this.route.navigate(['main']);
  }

  ngOnInit() {
  }

}
