import { ScreenPoint } from "../canvas-container/canvas-container.component";
import { HpHmiBasicScreenObj } from "./BasicScreenObj";

export class HpHmiTank extends HpHmiBasicScreenObj {

    width = 180;
    height = 190;
    level = 60;

    render(p: any) { 
        p.push();
        p.translate(-(this.width/2), -this.height);
        p.stroke(0);
        p.fill('#c9c9c9');
        p.rect(this.x, this.y, this.width, this.height);
        p.bezier(this.x, this.y-1, this.x+60, this.y-30, this.x+120, this.y-30, this.x+this.width, this.y-1);
        p.bezier(this.x, this.y+this.height+1, this.x+60, this.y+this.height+30, this.x+120, this.y+this.height+30 ,this.x+this.width, this.y+this.height+1);
        p.translate(0, this.height-this.level);
        p.fill(0,150,255);
        p.rect(this.x, this.y, this.width, this.level);
        p.pop();
    }

    constructor(point: ScreenPoint) {
        super(point);
    }
}