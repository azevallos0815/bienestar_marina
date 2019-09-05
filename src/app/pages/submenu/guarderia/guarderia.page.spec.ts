import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarderiaPage } from './guarderia.page';

describe('GuarderiaPage', () => {
  let component: GuarderiaPage;
  let fixture: ComponentFixture<GuarderiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarderiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarderiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
