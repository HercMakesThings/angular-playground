import p5 from "p5";
import { ScreenPoint } from "../../app.component";
import { HpHmiBasicScreenObj } from "./BasicScreenObj";

export class HpHmiTextBox extends HpHmiBasicScreenObj {
    width: number;
    height: number;

    render(p: p5) {
        p.push();
        p.translate(-this.width/2, -this.height/2);
        p.fill("#c9c9c9");
        p.stroke(0);
        p.rect(this.x, this.y, this.width, this.height);
        p.pop();
        p.push();
        p.translate(-this.width/2, -this.height/2);
        // p.stroke(0);
        p.fill(0);
        p.textAlign(p.LEFT, p.TOP);
        p.text(`Point: ${this.data?.point_name}`, this.x+4, this.y+4);
        p.text(`Address: ${this.data?.address}`, this.x+4, this.y+24);
        p.text(`Level: ${this.data?.point_status.value}`, this.x+4, this.y+44);
        p.pop();
    }

    constructor(point: ScreenPoint) {
        super(point);
        this.width = 140;
        this.height = 140;
    }
}