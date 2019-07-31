import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPage } from './greeting.page';

describe('GreetingPage', () => {
  let component: GreetingPage;
  let fixture: ComponentFixture<GreetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
