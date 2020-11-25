import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudimeOldComponent } from './sudime-old.component';

describe('SudimeOldComponent', () => {
  let component: SudimeOldComponent;
  let fixture: ComponentFixture<SudimeOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudimeOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudimeOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
