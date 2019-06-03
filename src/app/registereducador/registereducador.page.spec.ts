import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereducadorPage } from './registereducador.page';

describe('RegistereducadorPage', () => {
  let component: RegistereducadorPage;
  let fixture: ComponentFixture<RegistereducadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistereducadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistereducadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
