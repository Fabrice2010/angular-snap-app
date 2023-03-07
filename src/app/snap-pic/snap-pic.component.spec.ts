import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapPicComponent } from './snap-pic.component';

describe('SnapPicComponent', () => {
  let component: SnapPicComponent;
  let fixture: ComponentFixture<SnapPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
