import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdecCommonLibComponent } from './sdec-common-lib.component';

describe('SdecCommonLibComponent', () => {
  let component: SdecCommonLibComponent;
  let fixture: ComponentFixture<SdecCommonLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdecCommonLibComponent]
    });
    fixture = TestBed.createComponent(SdecCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
