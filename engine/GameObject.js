export class GameObject{
    constructor(x,y,w,h,color="black"){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.vx = 0;
        this.vy = 0;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
    }

    collide(other){
        return (
            this.x < other.x + other.w &&
            this.x + this.w > other.x &&
            this.y < other.y + other.h &&
            this.y + this.h > other.y
        )
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y, this.w, this.h)
    }
}