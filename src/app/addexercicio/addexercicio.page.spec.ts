import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexercicioPage } from './addexercicio.page';

describe('AddexercicioPage', () => {
  let component: AddexercicioPage;
  let fixture: ComponentFixture<AddexercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexercicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
