export class HpHmiValve {
    x: number;
    y: number;
    data: any;

    render(p: any) {
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

    move(p: any, mouseX: number, mouseY: number) {
        if (p.dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    constructor(point: Record<string, any>) {
        this.x = point["x"];
        this.y = point["y"];
        this.data = point["data"];
        // this.x = point.x;
        // this.y = point.y;
        // this.data = point.data;

        // this.isChanging = point.isChanging;
    }
}