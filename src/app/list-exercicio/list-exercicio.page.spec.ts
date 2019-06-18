import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExercicioPage } from './list-exercicio.page';

describe('ListExercicioPage', () => {
  let component: ListExercicioPage;
  let fixture: ComponentFixture<ListExercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExercicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
