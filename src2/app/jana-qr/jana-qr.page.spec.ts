import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaQRPage } from './jana-qr.page';

describe('JanaQRPage', () => {
  let component: JanaQRPage;
  let fixture: ComponentFixture<JanaQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanaQRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanaQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
