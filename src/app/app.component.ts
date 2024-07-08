import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasContainerComponent } from './components/canvas-container/canvas-container.component';
import { WidgetScreenHmiBasicComponent } from './components/widget-screen-hmi-basic/widget-screen-hmi-basic.component';

// const BASIC_SCREEN_BUILD: ScreenBuild = {};

// export type ScreenBuild = {

// };

export type Ht5Point = {
  point_name?: string,
  address?: string,
  type?: string
  point_status: {
    alarm_text: 'ON' | 'OFF' | null,
    value?: number
  },
  point_config?: {
    loweng?: number | string,
    higheng?: number | string,
    snum?: number,
    dnum?: number,
    mchar?: string,
    pnum?: number
  }
}

export type ScreenPoint = {
  x: number,
  y: number,
  data: Ht5Point | null,
  screen_obj_type?: 'PUMP' | 'TANK' | 'VALVE' | 'BAR' | string,
  is_static?: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasContainerComponent, WidgetScreenHmiBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-playground';
}
