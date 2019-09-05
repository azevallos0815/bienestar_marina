import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistencialesPage } from './asistenciales.page';

describe('AsistencialesPage', () => {
  let component: AsistencialesPage;
  let fixture: ComponentFixture<AsistencialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistencialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistencialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
