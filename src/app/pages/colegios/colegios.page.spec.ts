import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiosPage } from './colegios.page';

describe('ColegiosPage', () => {
  let component: ColegiosPage;
  let fixture: ComponentFixture<ColegiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColegiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
