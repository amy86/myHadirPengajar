import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiKehadiranPage } from './senarai-kehadiran.page';

describe('SenaraiKehadiranPage', () => {
  let component: SenaraiKehadiranPage;
  let fixture: ComponentFixture<SenaraiKehadiranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraiKehadiranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraiKehadiranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
