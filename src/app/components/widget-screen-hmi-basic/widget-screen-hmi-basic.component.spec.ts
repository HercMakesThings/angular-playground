import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetScreenHmiBasicComponent } from './widget-screen-hmi-basic.component';

describe('WidgetScreenHmiBasicComponent', () => {
  let component: WidgetScreenHmiBasicComponent;
  let fixture: ComponentFixture<WidgetScreenHmiBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetScreenHmiBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetScreenHmiBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
