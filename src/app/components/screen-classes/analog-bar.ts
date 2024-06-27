import p5 from 'p5';
import { ScreenPoint } from '../canvas-container/canvas-container.component';
import { HpHmiBasicScreenObj } from './BasicScreenObj';

export class HpHmiAnalogBar extends HpHmiBasicScreenObj {
    width: number;
    height: number;
    level: number;

    render(p: p5) {
        let level = p.map(this.level, 0, 60, 0, this.height);

        p.push();
        p.translate(-this.width/2, -this.height/2);
        p.stroke(0);
        p.fill('#c9c9c9');
        p.rect(this.x, this.y, this.width, this.height);
        p.pop();
        //draw blue OK region
        p.push();
        p.translate(-this.width/2, -this.height/2);
        p.stroke(0);
        p.fill(0,150,255);
        p.rect(this.x, this.y+40, this.width, this.height-80);
        p.pop();
        //draw dark gray danger regions
        p.push();
        p.translate(-this.width/2, -this.height/2);
        p.stroke(0);
        p.fill(40);
        p.rect(this.x, this.y, this.width, 25);
        p.pop();
        p.push();
        p.translate(-this.width/2, this.height/2);
        p.stroke(0);
        p.fill(40);
        p.rect(this.x, this.y-25, this.width, 25);
        p.pop();
        //draw triangle indicator
        p.push();
        p.translate(-this.width, this.height/2)
        p.fill(40);
        p.triangle(this.x, this.y-level, this.x-30, this.y-level-15, this.x-30, this.y-level+15);
        p.pop();
    }

    update(point: ScreenPoint) {
        if(point.data.point_status.value) {
            this.level = point.data.point_status.value;
        }
        // this.data = point.data;
    }

    constructor(point: ScreenPoint) {
        super(point);
        this.width = 30;
        this.height = 200;
        if (point.data.point_status.value !== undefined) {
            this.level = point.data.point_status.value;
        } else {
            this.level = 0;
        }
    }
}