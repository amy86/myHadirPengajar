import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSubjekPage } from './senarai-subjek.page';

describe('SenaraiSubjekPage', () => {
  let component: SenaraiSubjekPage;
  let fixture: ComponentFixture<SenaraiSubjekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraiSubjekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraiSubjekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
