import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
// import 'p5';
// import * as p5 from 'p5';
import p5 from 'p5';
import { HpHmiPump } from '../screen-classes/pump';
import { HpHmiConnectorBasic } from '../screen-classes/connectorBasic';
import { HpHmiTank } from '../screen-classes/tank';
import { HpHmiValve } from '../screen-classes/valve';
import { FauxPointService } from '../../services/faux-point/faux-point.service';

export type Ht5Point = {
  point_status: {
    value: 'ON' | 'OFF'
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
export class CanvasContainerComponent implements OnInit{

  // private p5: any;
  private p5!: p5;
  // public static pointService = inject(FauxPointService);
  public static pointService: FauxPointService;

  @ViewChild('canvas') canvasContainer: ElementRef | undefined;

  static init_point_1: ScreenPoint = {
    x: 360,
    y: 120,
    data: {
        point_status: {
            value: 'ON'
        }
    }
  };
  init_point_2: ScreenPoint = {
    x: 720,
    y: 450,
    data: {
        point_status: {
            value: 'OFF'
        }
    }
  };
  init_point_3 = {
    x: 100,
    y: 40,
    data: {}
  };
  init_point_4 = {
    x: 740,
    y: 40,
    data: {}
  };
  init_point_5 = {
    x: 100,
    y: 400,
    data: {}
  };
  // static init_point_6 = {
  //   x: 300,
  //   y: 250,
  //   data: {}
  // };
  // static init_point_1: ScreenPoint;

  createCanvas() {
    this.p5 = new p5(this.sketch, this.canvasContainer?.nativeElement);
    // this.p5 = new p5(this.sketch(this.pointService), this.canvasContainer?.nativeElement);
  }

  sketch(p: p5) {
    let pump1: HpHmiPump;
    let pump2: HpHmiPump;
    let valve1: HpHmiValve;
    let tank1: HpHmiTank;
    let connector1: HpHmiConnectorBasic;

    // let init_point_1: ScreenPoint = {
    //   x: 360,
    //   y: 120,
    //   data: {
    //       point_status: {
    //           value: 'ON'
    //       }
    //   }
    // };
    // let init_point_1: ScreenPoint = this.pointService.init_point_1;

    // let init_point_2: ScreenPoint = {
    //   x: 720,
    //   y: 450,
    //   data: {
    //       point_status: {
    //           value: 'OFF'
    //       }
    //   }
    // };

    // let init_point_3 = {
    //   x: 100,
    //   y: 40,
    //   data: {}
    // };

    // let init_point_4 = {
    //   x: 740,
    //   y: 40,
    //   data: {}
    // };

    // let init_point_5 = {
    //   x: 100,
    //   y: 400,
    //   data: {}
    // };

    // let init_point_6 = {
    //   x: 0,
    //   y: 0,
    //   data: {}
    // };

    p.setup = function() {
      p.createCanvas(p.windowWidth, 600);
      console.log(CanvasContainerComponent.pointService.init_point_6);

      // pump1 = new HpHmiPump(init_point_1, 40);
      // pump1 = new HpHmiPump(CanvasContainerComponent.init_point_1, 40);
      pump1 = new HpHmiPump(CanvasContainerComponent.pointService.init_point_1, 40);
      pump2 = new HpHmiPump(CanvasContainerComponent.pointService.init_point_2, 40);
      valve1 = new HpHmiValve(CanvasContainerComponent.pointService.init_point_5);
      tank1 = new HpHmiTank(CanvasContainerComponent.pointService.init_point_6);
      connector1 = new HpHmiConnectorBasic(
        CanvasContainerComponent.pointService.init_point_1.x, CanvasContainerComponent.pointService.init_point_1.y, 
        CanvasContainerComponent.pointService.init_point_3.x, CanvasContainerComponent.pointService.init_point_3.y, 
        CanvasContainerComponent.pointService.init_point_4.x, CanvasContainerComponent.pointService.init_point_4.y, 
        CanvasContainerComponent.pointService.init_point_2.x, CanvasContainerComponent.pointService.init_point_2.y, false
    );
    };
  
    p.draw = () => {
      p.background('gray');

      connector1.render(p);
      pump1.render(p);
      pump2.render(p);
      valve1.render(p);
      tank1.render(p);
    };

    p.mouseDragged = () => {
      pump1.move(p, p.mouseX, p.mouseY);
      pump2.move(p, p.mouseX, p.mouseY);
      valve1.move(p, p.mouseX, p.mouseY);
      tank1.move(p, p.mouseX, p.mouseY);

      if (p.dist(p.mouseX, p.mouseY, connector1.xControl2, connector1.yControl2) < 20) {
          connector1.move(p.mouseX, p.mouseY, 'control2');
      }
      if (p.dist(p.mouseX, p.mouseY, connector1.xControl1, connector1.yControl1) < 20) {
          connector1.move(p.mouseX, p.mouseY, 'control1');
      }
      if (p.dist(p.mouseX, p.mouseY, connector1.x1, connector1.y1) < 20) {
          connector1.move(p.mouseX, p.mouseY, 'p1');
      }
      if (p.dist(p.mouseX, p.mouseY, connector1.x2, connector1.y2) < 20) {
          connector1.move(p.mouseX, p.mouseY, 'p2');
      }
    }
  }

  ngOnInit(): void {
    this.createCanvas();
    // this.p5.init_point_1 = this.init_point_1;
  }

  constructor(){
    CanvasContainerComponent.pointService = inject(FauxPointService);
  }
}
