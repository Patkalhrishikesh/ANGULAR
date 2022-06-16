import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarninigAlertComponent } from './warninig-alert.component';

describe('WarninigAlertComponent', () => {
  let component: WarninigAlertComponent;
  let fixture: ComponentFixture<WarninigAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarninigAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarninigAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
