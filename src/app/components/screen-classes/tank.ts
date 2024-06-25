export class HpHmiTank {
    x: number;
    y: number;
    data: any;
    width = 180;
    height = 190;
    level = 60;

    render(p: any) { 
        p.push();
        // translate(-(this.width/2), -(this.height/2));
        p.translate(-(this.width/2), -this.height);
        
        p.stroke(0);
        p.fill('#c9c9c9');
        p.rect(this.x, this.y, this.width, this.height);
        p.bezier(this.x, this.y, this.x+60, this.y-30, this.x+120, this.y-30, this.x+this.width, this.y);
        p.bezier(this.x, this.y+this.height, this.x+60, this.y+this.height+30, this.x+120, this.y+this.height+30 ,this.x+this.width, this.y+this.height);
        // pop();
        // push();
        p.translate(0, this.height-this.level);
        p.fill(0,150,255);
        p.rect(this.x, this.y, this.width, this.level);
        p.pop();
    }

    move(p: any, mouseX: number, mouseY: number) {
        if(p.dist(mouseX, mouseY, this.x, this.y) < 20) {
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
    }
}