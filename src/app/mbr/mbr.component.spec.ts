import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbrComponent } from './mbr.component';

describe('MbrComponent', () => {
  let component: MbrComponent;
  let fixture: ComponentFixture<MbrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MbrComponent]
    });
    fixture = TestBed.createComponent(MbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
