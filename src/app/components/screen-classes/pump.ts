import p5 from 'p5';
import { ScreenPoint } from '../canvas-container/canvas-container.component';

export class HpHmiPump {
    x: number;
    y: number;
    r: number;
    d: number;
    data: any

    render(p: p5) {
        p.push();
        if (this.data && this.data.point_status.value == 'OFF') {
            p.fill(40);
        }
        if (this.data && this.data.point_status.value == 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        p.translate(30, -20);
        p.beginShape();
        p.vertex(this.x-30, this.y-20);
        p.vertex(this.x-30, this.y+20);
        p.vertex(this.x+30, this.y+20);
        p.vertex(this.x+30, this.y-20);
        p.endShape(p.CLOSE);
        p.pop();
        p.push();
        p.fill(40);
        if (this.data.point_status.value === 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        p.circle(this.x, this.y, this.d);
        p.circle(this.x, this.y, this.d-45);
        p.pop();

        // push();
        // fill(40)
        // if (this.data.point_status.value === 'ON') {
        //     fill('#c9c9c9');
        // }
        // stroke(0);
        // translate(30, -20);
        // beginShape();
        // vertex(this.x-30, this.y-20);
        // vertex(this.x-30, this.y+20);
        // vertex(this.x+30, this.y+20);
        // vertex(this.x+30, this.y-20);
        // endShape(CLOSE);
        // pop();
        // push();
        // fill(40);
        // if (this.data.point_status.value === 'ON') {
        //     fill('#c9c9c9');
        // }
        // stroke(0);
        // circle(this.x, this.y, this.d);
        // circle(this.x, this.y, this.d-45);
        // pop();
    }

    move(p: p5, mouseX: number, mouseY: number) {
        if (p.dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    // isChanging() {
    //     return this.isChanging;
    // }

    // toggleChange(mouseX, mouseY) {
    //     if(dist(mouseX, mouseY, this.x1, this.y) < 20) {
    //         this.isChanging = !this.isChanging;
    //     }
    // }

    // constructor(point: Record<string, any>, radius: number) {
    constructor(point: ScreenPoint, radius: number) {
        this.r = radius;
        this.d = this.r*2;
        this.x = point.x;
        this.y = point.y;
        this.data = point.data;
        // this.r = radius;
        // this.d = this.r*2;
        // this.x = point["x"];
        // this.y = point["y"];
        // this.data = point["data"];
        // this.isChanging = point.isChanging;

        // this.p = p;
    }
}