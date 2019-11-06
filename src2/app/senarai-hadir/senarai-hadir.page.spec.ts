import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiHadirPage } from './senarai-hadir.page';

describe('SenaraiHadirPage', () => {
  let component: SenaraiHadirPage;
  let fixture: ComponentFixture<SenaraiHadirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraiHadirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraiHadirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
