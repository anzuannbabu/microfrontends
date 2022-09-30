import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashabordComponent } from './dashabord.component';

describe('DashabordComponent', () => {
  let component: DashabordComponent;
  let fixture: ComponentFixture<DashabordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashabordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashabordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
