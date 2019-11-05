import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraisubjekPage } from './senaraisubjek.page';

describe('SenaraisubjekPage', () => {
  let component: SenaraisubjekPage;
  let fixture: ComponentFixture<SenaraisubjekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraisubjekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraisubjekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
