export class ScoreManager{
    constructor(initialScore = 0){
        this.score = initialScore
        this.onScoreChange = null;
    }

    add(points){
        this.score += points;
        if (this.onScoreChange) this.onScoreChange(this.score);
    }

    subtract(points) {
        this.score -= points;
        if (this.onScoreChange) this.onScoreChange(this.score);
    }

    reset(){
        this.score = 0;
        if (this.onScoreChange) this.onScoreChange(this.score)
    }

    getScore() {
        return this.score;
    }

    draw(ctx, x = 10, y = 30, color = "black", font = "20px Arial") {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText("Score: " + this.score, x, y);
    }

}