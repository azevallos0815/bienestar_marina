import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionPage } from './educacion.page';

describe('EducacionPage', () => {
  let component: EducacionPage;
  let fixture: ComponentFixture<EducacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
