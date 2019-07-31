import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingDetailPage } from './greeting-detail.page';

describe('GreetingDetailPage', () => {
  let component: GreetingDetailPage;
  let fixture: ComponentFixture<GreetingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
