import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleComponentComponent } from './life-cycle-component.component';

describe('LifeCycleComponentComponent', () => {
  let component: LifeCycleComponentComponent;
  let fixture: ComponentFixture<LifeCycleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
