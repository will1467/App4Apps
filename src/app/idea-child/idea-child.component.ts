import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-child',
  templateUrl: './idea-child.component.html',
  styleUrls: ['./idea-child.component.css']
})
export class IdeaChildComponent implements OnInit {

  @Input() idea : string;

  constructor() { }

  ngOnInit() {
  }

}
