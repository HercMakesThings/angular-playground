export class HpHmiConnectorBasic {
    x1: number;
    y1: number;
    xControl1: number;
    yControl1: number;
    xControl2: number;
    yControl2: number;
    x2: number;
    y2: number;
    isChanging: boolean;

    move(mouseX: number, mouseY: number, pointType: string) {
        switch (pointType) {
            case 'p1':
                this.x1 = mouseX;
                this.y1 = mouseY;
                break;
            case 'control1':
                this.xControl1 = mouseX;
                this.yControl1 = mouseY;
                break;
            case 'control2':
                this.xControl2 = mouseX;
                this.yControl2 = mouseY;
                break;
            case 'p2':
                this.x2 = mouseX;
                this.y2 = mouseY;
                break;
        }
    }

    // isChanging() {
    //     return this.isChanging;
    // }

    // toggleChange(mouseX, mouseY) {
    //     // this.isChanging = !this.isChanging;
    //     if (dist(mouseX, mouseY, this.x1, this.y1) < 20) {
    //         this.isChanging = !this.isChanging;
    //         return;
    //     }
    //     if (dist(mouseX, mouseY, this.x2, this.y2) < 20) {
    //         this.isChanging = !this.isChanging;
    //         return;
    //     }
    //     if (dist(mouseX, mouseY, this.xControl2, this.yControl2) < 20) {
    //         this.isChanging = !this.isChanging;
    //         return;
    //     }
    //     if (dist(mouseX, mouseY, this.xControl1, this.yControl1) < 20) {
    //         this.isChanging = !this.isChanging;
    //         return;
    //     }
    // }
    
    render(p: any) {
        p.push();
        // render code goes here
        p.stroke(93);
        p.strokeWeight(5);
        p.point(this.x1, this.y1);
        p.point(this.x2, this.y2);

        // Draw the control points in red.
        p.stroke(255, 0, 0);
        p.strokeWeight(10);
        p.point(this.xControl2, this.yControl2);
        p.point(this.xControl1, this.yControl1);

        // Draw a black bezier curve.
        p.noFill();
        p.stroke(93);
        p.strokeWeight(4);
        p.bezier(this.x1, this.y1, this.xControl1, this.yControl1, this.xControl2, this.yControl2, this.x2, this.y2);
        p.pop();
        p.push();
        // Draw red lines from the anchor points to the control points.
        p.stroke(255, 0, 0);
        p.line(this.x2, this.y2, this.xControl2, this.yControl2);
        p.line(this.x1, this.y1, this.xControl1, this.yControl1);
        // end render code
        p.pop();
    }

    constructor(x1: number, y1: number, xControl1: number, yControl1: number, xControl2: number, yControl2: number, x2: number, y2: number, isChanging: boolean) {
        this.x1 = x1;
        this.y1 = y1;
        this.xControl1 = xControl1;
        this.yControl1 = yControl1;
        this.xControl2 = xControl2;
        this.yControl2 = yControl2;
        this.x2 = x2;
        this.y2 = y2;
        this.isChanging = isChanging;
    }
    // constructor(x1, y1, xControl1, yControl1, xControl2, yControl2, x2, y2, isChanging) {
    //     this.x1 = x1;
    //     this.y1 = y1;
    //     this.xControl1 = xControl1;
    //     this.yControl1 = yControl1;
    //     this.xControl2 = xControl2;
    //     this.yControl2 = yControl2;
    //     this. x2 = x2;
    //     this.y2 = y2;
    //     this.isChanging = isChanging;
    // }
}