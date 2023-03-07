import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbitLibraryComponent } from './ebit-library.component';

describe('EbitLibraryComponent', () => {
  let component: EbitLibraryComponent;
  let fixture: ComponentFixture<EbitLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbitLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbitLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
