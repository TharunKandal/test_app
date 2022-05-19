import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageframeComponent } from './imageframe.component';

describe('ImageframeComponent', () => {
  let component: ImageframeComponent;
  let fixture: ComponentFixture<ImageframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
