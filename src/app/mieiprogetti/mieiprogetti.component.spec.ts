import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MieiprogettiComponent } from './mieiprogetti.component';

describe('MieiprogettiComponent', () => {
  let component: MieiprogettiComponent;
  let fixture: ComponentFixture<MieiprogettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MieiprogettiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MieiprogettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
