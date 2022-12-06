import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSerivceGroupComponent } from './create-serivce-group.component';

describe('CreateSerivceGroupComponent', () => {
  let component: CreateSerivceGroupComponent;
  let fixture: ComponentFixture<CreateSerivceGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSerivceGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSerivceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
