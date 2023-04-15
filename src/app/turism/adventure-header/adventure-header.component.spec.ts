import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureHeaderComponent } from './adventure-header.component';

describe('AdventureHeaderComponent', () => {
  let component: AdventureHeaderComponent;
  let fixture: ComponentFixture<AdventureHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
