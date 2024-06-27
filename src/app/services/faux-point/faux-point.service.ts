import { Injectable } from '@angular/core';
import { ScreenPoint } from '../../components/canvas-container/canvas-container.component';
import { Observable, from, interval, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FauxPointService {

  // ticker!: Observable<any>;
  ticker: any;

  init_point_1: ScreenPoint = {
    x: 360,
    y: 120,
    data: {
        point_status: {
            alarm_text: 'ON'
            // value: 'OFF'
        }
    }
  };
  init_point_2: ScreenPoint = {
    x: 720,
    y: 450,
    data: {
        point_status: {
            alarm_text: 'OFF'
            // value: 'OFF'
        }
    }
  };
  init_point_3: ScreenPoint = {
    x: 100,
    y: 40,
    data: {
      point_status: {
        alarm_text: 'ON'
        // value: 'OFF'
      }
    }
  };
  init_point_4: ScreenPoint = {
    x: 740,
    y: 40,
    data: {
      point_status: {
        alarm_text: 'ON'
        // value: 'OFF'
      }
    }
  };
  init_point_5: ScreenPoint = {
    x: 100,
    y: 400,
    data: {
      point_status: {
        alarm_text: 'OFF'
        // value: 'OFF'
      }
    }
  };

  init_point_6: ScreenPoint = {
    x: 300,
    y: 250,
    data: {
      point_status: {
        alarm_text: 'ON'
        // value: 'OFF'
      }
    }
  };

  init_point_7: ScreenPoint = {
    x: 200,
      y: 400,
      data: {
        point_status: {
          alarm_text: 'OFF',
          value: 60
        }
      }
  }

  getInitPoints(): Observable<ScreenPoint[]> {
    return of([this.init_point_1, 
              this.init_point_2, 
              this.init_point_3, 
              this.init_point_4, 
              this.init_point_5, 
              this.init_point_6,
              this.init_point_7]);
  }

  constructor() { }
}
