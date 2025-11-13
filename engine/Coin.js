import { GameObject } from "./GameObject.js";

export class Coin extends GameObject{
    constructor(x,y,radius=15, color = "red"){
        super(x - radius, y - radius, radius * 2, radius*2, color);
        this.radius = radius;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}