import { GameObject } from "../GameObject";
import { Coin } from "../Coin";

export class ExampleScene{
    constructor(canvas){
        this.canvas = canvas;
        this.player = new GameObject(100,100,50,50, "blue");
        this.coins = [
            new Coin(200,200, 25,"red"),
            new Coin(200,200, 25,"red")
        ];
    }

    onEnter(){
        console.log("Scene Started!")

    }
    onExit(){
        console.log("Scene Ended!")
    }

    update(){
        this.player.update();
    }

    render(ctx){
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(ctx);
        this.coins.forEach(c => c.draw(ctx));
    }
}