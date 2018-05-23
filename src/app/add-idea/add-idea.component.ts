import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  form : FormGroup;

  title = new FormControl("", Validators.required);
  description = new FormControl("", Validators.required);


  constructor(fb: FormBuilder,) {
    this.form = fb.group({
      "title": this.title,
      "description" : this.description,
    })
   }

  ngOnInit() {

  }

}
