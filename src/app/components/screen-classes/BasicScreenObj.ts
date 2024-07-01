import p5 from 'p5';
import { ScreenPoint, Ht5Point } from '../canvas-container/canvas-container.component';

export class HpHmiBasicScreenObj {
    x: number;
    y: number;
    // data: any;
    data: Ht5Point;
    isSelected: boolean = false;

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

    toggleContextMenu(p: p5, mouseX: number, mouseY: number) {
        if(p.dist(this.x, this.y, mouseX, mouseY) < 20) {
            this.isSelected = !this.isSelected;
        }
    }

    showContextMenu(p: p5) {
        if (this.isSelected) {
            p.push();
            p.translate(-30, -30);
            p.stroke(0);
            p.fill('#c9c9c9');
            p.rect(this.x, this.y, 80, 90, 6);
            p.fill(0);
            p.textAlign(p.LEFT, p.TOP);
            p.text(`alarm: ${this.data.point_status.alarm_text}`, this.x+4, this.y+4);
            p.pop();
        }
    }

    constructor(point: ScreenPoint) {
        this.x = point.x;
        this.y = point.y;
        this.data = point.data;
    }
}