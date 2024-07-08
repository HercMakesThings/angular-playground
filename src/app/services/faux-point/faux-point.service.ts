import { Injectable } from '@angular/core';
import { ScreenPoint, Ht5Point } from '../../app.component';
import { Observable, from, interval, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const DUMMY_POINTS: Ht5Point[] = [
  {
    address: '2001C1',
    point_name: 'Wet Well Level',
    type: 'AI',
    point_status: {
      alarm_text: 'OFF',
      value: 14
    },
    point_config: {
      loweng: 0,
      higheng: 24,
      pnum: 1,
      snum: 1,
      dnum: 2,
      mchar: "C"
    }
  },
  {
    address: '2001A1',
    point_name: 'Pump 1 Status',
    type: 'DI',
    point_status: {
      alarm_text: 'ON',
      value: 1
    },
    point_config: {
      loweng: "",
      higheng: "",
      pnum: 1,
      snum: 1,
      dnum: 2,
      mchar: "A"
    }
  },
  {
    address: '2001A2',
    point_name: 'Pump 2 Status',
    type: 'DI',
    point_status: {
      alarm_text: 'ON',
      value: 1
    },
    point_config: {
      loweng: "",
      higheng: "",
      pnum: 2,
      snum: 1,
      dnum: 2,
      mchar: "A"
    }
  },
  {
    address: '2001A3',
    point_name: 'Pump 3 Status',
    type: 'DI',
    point_status: {
      alarm_text: 'ON',
      value: 1
    },
    point_config: {
      loweng: "",
      higheng: "",
      pnum: 3,
      snum: 1,
      dnum: 2,
      mchar: "A"
    }
  }
];

// const DUMMY_SCREEN_CONFIG: ScreenPoint[] = [
//   {
//     x: 
//   }
// ];

@Injectable({
  providedIn: 'root'
})
export class FauxPointService {

  // ticker!: Observable<any>;
  ticker: any;
  points$: Observable<Ht5Point[]> = of(DUMMY_POINTS);

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
