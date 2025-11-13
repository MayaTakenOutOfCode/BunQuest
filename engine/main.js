import { GameObject } from "./GameObject.js";
import { InputManager } from "./InputManager.js";
import { ScoreManager } from "./ScoreManager.js";
import { Coin } from "./Coin.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const VELOCITY =1.8;

const input = new InputManager();

const objects = [];
const player = new GameObject(100, 100, 50, 50, "red");
objects.push(player);

const score = new ScoreManager();

score.onScoreChange = s => console.log("Score is now: " + s);


// Settings:
const COIN_COUNT = 10;
const COIN_RADIUS = 15;

const coins = Array.from({ length: COIN_COUNT }, () => {
    const x = Math.random() * (canvas.width - COIN_RADIUS * 2) + COIN_RADIUS;
    const y = Math.random() * (canvas.height - COIN_RADIUS * 2) + COIN_RADIUS;
    return new Coin(x, y, COIN_RADIUS, "red");
});


function update() {
    player.vx = 0;
    player.vy = 0;

    // Horizontal
    if (input.isDown("ArrowRight") || input.isDown("KeyD")) player.vx = 2*VELOCITY;
    if (input.isDown("ArrowLeft") || input.isDown("KeyA")) player.vx = -2*VELOCITY;

    // Vertical
    if (input.isDown("ArrowUp") || input.isDown("KeyW")) player.vy = -2*VELOCITY;
    if (input.isDown("ArrowDown") || input.isDown("KeyS")) player.vy = 2*VELOCITY;

    // console.log(
    //     "Left:", input.isDown("ArrowLeft"),
    //     "Right:", input.isDown("ArrowRight"),
    //     "A:", input.isDown("A"),
    //     "D:", input.isDown("D")
    // );


    player.update();
    for(let i = coins.length - 1; i>=0; i--){
        if(player.collide(coins[i])){
            score.add(10);
            coins.splice(i,1)
        }
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);

    coins.forEach(c => c.draw(ctx))

    score.draw(ctx);
}

function loop(timestamp) {
    update();
    render();
    requestAnimationFrame(loop);
}

loop()