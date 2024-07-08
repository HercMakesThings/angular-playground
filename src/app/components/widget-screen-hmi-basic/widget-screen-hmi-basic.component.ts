import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { HpHmiAnalogBar } from '../screen-classes/analog-bar';
import { FauxPointService } from '../../services/faux-point/faux-point.service';
import { ScreenPoint } from '../../app.component';
import p5 from 'p5';
import { HpHmiTextBox } from '../screen-classes/textBox';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-widget-screen-hmi-basic',
  standalone: true,
  imports: [],
  templateUrl: './widget-screen-hmi-basic.component.html',
  styleUrl: './widget-screen-hmi-basic.component.css'
})
export class WidgetScreenHmiBasicComponent implements OnInit, AfterViewInit, OnDestroy {

  onDestroy$ = new Subject();

  static analog_bar1: HpHmiAnalogBar;
  static display1: HpHmiTextBox;

  private p5!: p5;

  private readonly pointService: FauxPointService;

  static point_bar1: ScreenPoint = {
    x: 200,
    y: 85,
    data: null
  };

  static point_display1: ScreenPoint = {
    x: 80,
    y: 85,
    data: null
  };

  @ViewChild('canvas') canvasContainer: ElementRef | undefined;
  static canvasContainer = document.querySelector("#canvas-container");

  createCanvas() {
    this.p5 = new p5(this.sketch, this.canvasContainer?.nativeElement);
  }

  sketch(p: p5) {
    p.setup = function() {
      p.createCanvas(240, 176);

      WidgetScreenHmiBasicComponent.display1 = new HpHmiTextBox(WidgetScreenHmiBasicComponent.point_display1);
      WidgetScreenHmiBasicComponent.analog_bar1 = new HpHmiAnalogBar(WidgetScreenHmiBasicComponent.point_bar1, 20, 150);
    }

    p.draw = function() {
      p.background('gray');
      WidgetScreenHmiBasicComponent.display1.render(p);
      WidgetScreenHmiBasicComponent.analog_bar1.render(p);
    }
  }

  ngOnInit(): void {
    this.pointService.points$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(points => {
        points.forEach(p => {
          console.log(p);
          if(p.point_name === "Wet Well Level") {
            WidgetScreenHmiBasicComponent.point_bar1.data = p;
            WidgetScreenHmiBasicComponent.point_display1.data = p;
            return;
          }
        });
      });
  }

  ngAfterViewInit(): void {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(this);
    this.onDestroy$.complete();
  }

  constructor(){
    // CanvasContainerComponent.pointService = inject(FauxPointService);
    this.pointService = inject(FauxPointService);
  }
}
