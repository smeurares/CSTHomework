import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismHomeComponent } from './turism-home.component';

describe('TurismHomeComponent', () => {
  let component: TurismHomeComponent;
  let fixture: ComponentFixture<TurismHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
