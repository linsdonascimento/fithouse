import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducadorPage } from './educador.page';

describe('EducadorPage', () => {
  let component: EducadorPage;
  let fixture: ComponentFixture<EducadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
