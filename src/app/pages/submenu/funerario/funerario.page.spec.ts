import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunerarioPage } from './funerario.page';

describe('FunerarioPage', () => {
  let component: FunerarioPage;
  let fixture: ComponentFixture<FunerarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunerarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunerarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
