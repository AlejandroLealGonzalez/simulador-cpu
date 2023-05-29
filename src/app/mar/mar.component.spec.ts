import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarComponent } from './mar.component';

describe('MarComponent', () => {
  let component: MarComponent;
  let fixture: ComponentFixture<MarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarComponent]
    });
    fixture = TestBed.createComponent(MarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
