import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaPage } from './asesoria.page';

describe('AsesoriaPage', () => {
  let component: AsesoriaPage;
  let fixture: ComponentFixture<AsesoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
