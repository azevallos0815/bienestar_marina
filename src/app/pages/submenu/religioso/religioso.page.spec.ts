import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiosoPage } from './religioso.page';

describe('ReligiosoPage', () => {
  let component: ReligiosoPage;
  let fixture: ComponentFixture<ReligiosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligiosoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
