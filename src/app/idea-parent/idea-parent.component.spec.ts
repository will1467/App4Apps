import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaParentComponent } from './idea-parent.component';

describe('IdeaParentComponent', () => {
  let component: IdeaParentComponent;
  let fixture: ComponentFixture<IdeaParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
