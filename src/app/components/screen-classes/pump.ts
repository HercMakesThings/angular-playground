import { HpHmiBasicScreenObj } from './BasicScreenObj';
import p5 from 'p5';
import { ScreenPoint } from '../../app.component';

export class HpHmiPump extends HpHmiBasicScreenObj {

    r: number;
    d: number;

    render(p: p5) {
        p.push();
        // if (this.data && this.data.point_status.alarm_text == 'OFF') {
        //     p.fill(40);
        // }
        p.fill(40);
        if (this.data && this.data.point_status.alarm_text == 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        // p.translate(30, -20);
        p.translate(-this.r/2, -this.r/2);
        p.beginShape();
        // p.vertex(this.x-30, this.y-20);
        // p.vertex(this.x-30, this.y+20);
        // p.vertex(this.x+30, this.y+20);
        // p.vertex(this.x+30, this.y-20);
        p.vertex(this.x-this.r/2-(this.r/3), this.y-this.r/2);
        p.vertex(this.x-this.r/2-(this.r/3), this.y+this.r/2-10);
        p.vertex(this.x+this.r/2, this.y+this.r/2-10);
        p.vertex(this.x+this.r/2, this.y-this.r/2);
        p.endShape(p.CLOSE);
        p.pop();
        p.push();
        p.fill(40);
        // p.noFill();
        if (this.data?.point_status.alarm_text === 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        p.circle(this.x, this.y, this.d);
        p.circle(this.x, this.y, this.d/2);
        p.pop();
    }

    constructor(point: ScreenPoint, radius: number) {
        super(point);
        this.r = radius;
        this.d = this.r*2;
    }
}