import { Component, OnInit } from '@angular/core';
import { IDEAS } from '../mock-ideas';

@Component({
  selector: 'app-idea-parent',
  templateUrl: './idea-parent.component.html',
  styleUrls: ['./idea-parent.component.css']
})
export class IdeaParentComponent implements OnInit {

  ideas = IDEAS;

  constructor() { }

  ngOnInit() {
  }

}
