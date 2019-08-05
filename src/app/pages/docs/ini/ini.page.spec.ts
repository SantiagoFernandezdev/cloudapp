import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniPage } from './ini.page';

describe('IniPage', () => {
  let component: IniPage;
  let fixture: ComponentFixture<IniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
