import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTestingComponent } from './bootstrap-testing.component';

describe('BootstrapTestingComponent', () => {
  let component: BootstrapTestingComponent;
  let fixture: ComponentFixture<BootstrapTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
