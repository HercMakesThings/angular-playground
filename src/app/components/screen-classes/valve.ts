import { ScreenPoint } from "../canvas-container/canvas-container.component";
import p5 from 'p5';
import { HpHmiBasicScreenObj } from "./BasicScreenObj";

export class HpHmiValve extends HpHmiBasicScreenObj {

    render(p: p5) {
        p.push();
        p.stroke(0);
        // strokeWeight(5);
        p.line(this.x, this.y, this.x, this.y+35);
        p.pop();
        p.push();
        p.translate(-30, 35);
        p.stroke(0);
        p.fill(255);
        p.rect(this.x, this.y, 60, 35);
        p.pop();
        p.push();
        p.fill('#c9c9c9');
        p.stroke(0);
        p.beginShape();
        p.vertex(this.x+40, this.y+30);
        p.vertex(this.x+40, this.y-30);
        p.vertex(this.x-40, this.y+30);
        p.vertex(this.x-40, this.y-30);
        p.endShape(p.CLOSE);
        p.pop();
    }

    constructor(point: ScreenPoint) {
        super(point);
    }
}