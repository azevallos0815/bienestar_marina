import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoPage } from './apoyo.page';

describe('ApoyoPage', () => {
  let component: ApoyoPage;
  let fixture: ComponentFixture<ApoyoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
