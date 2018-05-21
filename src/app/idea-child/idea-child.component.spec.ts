import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaChildComponent } from './idea-child.component';

describe('IdeaChildComponent', () => {
  let component: IdeaChildComponent;
  let fixture: ComponentFixture<IdeaChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
