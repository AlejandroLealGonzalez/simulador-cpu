import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaComponent } from './memoria.component';

describe('MemoriaComponent', () => {
  let component: MemoriaComponent;
  let fixture: ComponentFixture<MemoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoriaComponent]
    });
    fixture = TestBed.createComponent(MemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
