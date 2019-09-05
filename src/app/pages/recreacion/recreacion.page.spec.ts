import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreacionPage } from './recreacion.page';

describe('RecreacionPage', () => {
  let component: RecreacionPage;
  let fixture: ComponentFixture<RecreacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
