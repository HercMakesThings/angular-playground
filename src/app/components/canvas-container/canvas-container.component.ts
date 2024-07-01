import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import p5 from 'p5';
import { interval, map, switchMap } from 'rxjs';
import { HpHmiPump } from '../screen-classes/pump';
import { HpHmiConnectorBasic } from '../screen-classes/connectorBasic';
import { HpHmiTank } from '../screen-classes/tank';
import { HpHmiValve } from '../screen-classes/valve';
import { HpHmiAnalogBar } from '../screen-classes/analog-bar';
import { FauxPointService } from '../../services/faux-point/faux-point.service';

export type Ht5Point = {
  point_status: {
    alarm_text: 'ON' | 'OFF'
    value?: number
  }
}

export type ScreenPoint = {
  x: number,
  y: number,
  data: Ht5Point
}

@Component({
  selector: 'app-canvas-container',
  standalone: true,
  imports: [],
  templateUrl: './canvas-container.component.html',
  styleUrl: './canvas-container.component.css'
})
export class CanvasContainerComponent implements OnInit {

  // private p5: any;
  private p5!: p5;
  // public static pointService = inject(FauxPointService);
  // public static pointService: FauxPointService;
  private readonly pointService: FauxPointService;

  static containerHeight: any;
  static containerWidth: any;

  ticker: any;

  @ViewChild('canvas') canvasContainer: ElementRef | undefined;

  static p1: ScreenPoint = {
      x: 360,
      y: 120,
      data: {
          point_status: {
              alarm_text: 'ON'
              // value: 'ON'
          }
      }
    };
  static p2: ScreenPoint = {
      x: 720,
      y: 450,
      data: {
          point_status: {
              alarm_text: 'OFF'
              // value: 'ON'
          }
      }
    };
  static p3: ScreenPoint = {
      x: 100,
      y: 40,
      data: {
        point_status: {
          alarm_text: 'OFF'
          // value: 'ON'
        }
      }
    };
  static p4: ScreenPoint = {
      x: 740,
      y: 40,
      data: {
        point_status: {
          alarm_text: 'ON'
          // value: 'ON'
        }
      }
    };
  static p5ive: ScreenPoint = {
      x: 100,
      y: 400,
      data: {
        point_status: {
          alarm_text: 'OFF'
          // value: 'ON'
        }
      }
    };
  static p6: ScreenPoint = {
      x: 300,
      y: 250,
      data: {
        point_status: {
          alarm_text: 'OFF'
          // value: 'ON'
        }
      }
    };
    static p7: ScreenPoint = {
      x: 200,
      y: 400,
      data: {
        point_status: {
          alarm_text: 'OFF',
          value: 60
        }
      }
    };

  static pump1: HpHmiPump;
  static pump2: HpHmiPump;
  static tank1: HpHmiTank;
  static valve1: HpHmiValve;
  static analogBar1: HpHmiAnalogBar;
  static connector1: HpHmiConnectorBasic;

  createCanvas() {
    this.p5 = new p5(this.sketch, this.canvasContainer?.nativeElement);
  }

  sketch(p: p5) {

    p.setup = function() {
      p.createCanvas(p.windowWidth, 600);
      // p.createCanvas(CanvasContainerComponent.containerWidth, CanvasContainerComponent.containerHeight);
      // console.log(CanvasContainerComponent.pointService.init_point_6);
      // console.log(this.pointService.init_point_6);

      CanvasContainerComponent.pump1 = new HpHmiPump(CanvasContainerComponent.p1, 40);
      CanvasContainerComponent.pump2 = new HpHmiPump(CanvasContainerComponent.p2, 40);
      CanvasContainerComponent.valve1 = new HpHmiValve(CanvasContainerComponent.p5ive);
      CanvasContainerComponent.tank1 = new HpHmiTank(CanvasContainerComponent.p6);
      CanvasContainerComponent.analogBar1 = new HpHmiAnalogBar(CanvasContainerComponent.p7);
      CanvasContainerComponent.connector1 = new HpHmiConnectorBasic(
        CanvasContainerComponent.p1.x, CanvasContainerComponent.p1.y, 
        CanvasContainerComponent.p3.x, CanvasContainerComponent.p3.y, 
        CanvasContainerComponent.p4.x, CanvasContainerComponent.p4.y, 
        CanvasContainerComponent.p2.x, CanvasContainerComponent.p2.y, false
      );

      // p.noLoop();
    };
  
    p.draw = () => {
      p.background('gray');
      
      CanvasContainerComponent.analogBar1.update(CanvasContainerComponent.p7);

      CanvasContainerComponent.connector1.render(p);
      CanvasContainerComponent.pump1.render(p);
      CanvasContainerComponent.pump2.render(p);
      CanvasContainerComponent.valve1.render(p);
      CanvasContainerComponent.tank1.render(p);
      CanvasContainerComponent.analogBar1.render(p);

      // CanvasContainerComponent.tank1.reposition(CanvasContainerComponent.p6);
        // CanvasContainerComponent.pump1.reposition(CanvasContainerComponent.p1);
        // CanvasContainerComponent.pump2.reposition(CanvasContainerComponent.p2);
        // CanvasContainerComponent.valve1.reposition(CanvasContainerComponent.p5ive);

        // CanvasContainerComponent.analogBar1.reposition(CanvasContainerComponent.p7);

      CanvasContainerComponent.pump1.showContextMenu(p);
    };

    p.mouseDragged = () => {
      CanvasContainerComponent.pump1.move(p, p.mouseX, p.mouseY);
      CanvasContainerComponent.pump2.move(p, p.mouseX, p.mouseY);
      CanvasContainerComponent.valve1.move(p, p.mouseX, p.mouseY);
      CanvasContainerComponent.tank1.move(p, p.mouseX, p.mouseY);
      CanvasContainerComponent.analogBar1.move(p, p.mouseX, p.mouseY);

      if (p.dist(p.mouseX, p.mouseY, CanvasContainerComponent.connector1.xControl2, CanvasContainerComponent.connector1.yControl2) < 20) {
          // connector1.move(p.mouseX, p.mouseY, 'control2');
          CanvasContainerComponent.connector1.move(p.mouseX, p.mouseY, 'control2');
      }
      if (p.dist(p.mouseX, p.mouseY, CanvasContainerComponent.connector1.xControl1, CanvasContainerComponent.connector1.yControl1) < 20) {
          // connector1.move(p.mouseX, p.mouseY, 'control1');
          CanvasContainerComponent.connector1.move(p.mouseX, p.mouseY, 'control1');
      }
      if (p.dist(p.mouseX, p.mouseY, CanvasContainerComponent.connector1.x1, CanvasContainerComponent.connector1.y1) < 20) {
          // connector1.move(p.mouseX, p.mouseY, 'p1');
          CanvasContainerComponent.connector1.move(p.mouseX, p.mouseY, 'p1');
      }
      if (p.dist(p.mouseX, p.mouseY, CanvasContainerComponent.connector1.x2, CanvasContainerComponent.connector1.y2) < 20) {
          // connector1.move(p.mouseX, p.mouseY, 'p2');
          CanvasContainerComponent.connector1.move(p.mouseX, p.mouseY, 'p2');
      }
    }

    p.mouseClicked = () => {
      CanvasContainerComponent.pump1.toggleContextMenu(p, p.mouseX, p.mouseY);
    };
  }

  ngOnInit(): void {
    CanvasContainerComponent.containerWidth = this.canvasContainer?.nativeElement.offsetWidth;
    CanvasContainerComponent.containerHeight = this.canvasContainer?.nativeElement.offsetHeight;
    this.createCanvas();

    //updates every second
    this.ticker = interval(1000).pipe(
      switchMap(n=>this.pointService.getInitPoints()
      .pipe(
        map(pList=>{
          pList[0] = {
            x: Math.floor(Math.random() * 700),
            y: Math.floor(Math.random() * 600),
            data: {
              point_status: {
                alarm_text: Math.floor(Math.random()*10) < 5 ? 'OFF' : 'ON'
                // value: 'ON'
              }
            }
          };
          pList[1] = {
            x: Math.floor(Math.random() * 700),
            y: Math.floor(Math.random() * 600),
            data: {
              point_status: {
                alarm_text: Math.floor(Math.random()*10) < 5 ? 'OFF' : 'ON'
                // value: 'ON'
              }
            }
          };
          return pList;
        }),
        map(pList=>{
          // pList[6].data.point_status.value = Math.floor(Math.random()*60);
          pList[6] = {
            x: 200,
            y: 400,
            data: {
              point_status: {
                alarm_text: 'OFF',
                value: Math.floor(Math.random()*60)
              }
            }
          }
          return pList;
        })
      ))
    )
    .subscribe(([p1, p2, p3, p4, p5ive, p6, p7]) => {
        CanvasContainerComponent.p1 = p1;
        CanvasContainerComponent.p2 = p2;
        CanvasContainerComponent.p3 = p3;
        CanvasContainerComponent.p4 = p4;
        CanvasContainerComponent.p5ive = p5ive;
        CanvasContainerComponent.p6 = p6;
        // CanvasContainerComponent.p7 = p7;

        console.log('ping!');
        console.log(CanvasContainerComponent.analogBar1.level);
        console.log(CanvasContainerComponent.p7.data.point_status.value);
    });
  }

  // for demoing purposes, not vital
  changeLevel(event: Event) {
    const target = event.target as HTMLInputElement;
    CanvasContainerComponent.p7.data.point_status.value = parseInt(target.value);
  }

  constructor(){
    // CanvasContainerComponent.pointService = inject(FauxPointService);
    this.pointService = inject(FauxPointService);
  }
}
