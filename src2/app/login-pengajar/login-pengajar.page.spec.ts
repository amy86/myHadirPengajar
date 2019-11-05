import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPengajarPage } from './login-pengajar.page';

describe('LoginPengajarPage', () => {
  let component: LoginPengajarPage;
  let fixture: ComponentFixture<LoginPengajarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPengajarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPengajarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
