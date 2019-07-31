import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Greeting2Page } from './greeting2.page';

describe('Greeting2Page', () => {
  let component: Greeting2Page;
  let fixture: ComponentFixture<Greeting2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Greeting2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Greeting2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
