import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturettePresentazioneComponent } from './featurette-presentazione.component';

describe('FeaturettePresentazioneComponent', () => {
  let component: FeaturettePresentazioneComponent;
  let fixture: ComponentFixture<FeaturettePresentazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturettePresentazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturettePresentazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
