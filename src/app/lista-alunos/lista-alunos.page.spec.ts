import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunosPage } from './lista-alunos.page';

describe('ListaAlunosPage', () => {
  let component: ListaAlunosPage;
  let fixture: ComponentFixture<ListaAlunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
