import p5 from 'p5';
import { ScreenPoint } from '../canvas-container/canvas-container.component';

export class HpHmiBasicScreenObj {
    x: number;
    y: number;
    data: any;

    reposition(point: ScreenPoint) {
        this.x = point.x;
        this.y = point.y;
        this.data = point.data;
    }

    move(p: p5, mouseX: number, mouseY: number) {
        if (p.dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    constructor(point: ScreenPoint) {
        this.x = point.x;
        this.y = point.y;
        this.data = point.data;
    }
}