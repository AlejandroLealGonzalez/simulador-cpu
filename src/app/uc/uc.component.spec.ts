import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcComponent } from './uc.component';

describe('UcComponent', () => {
  let component: UcComponent;
  let fixture: ComponentFixture<UcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcComponent]
    });
    fixture = TestBed.createComponent(UcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
