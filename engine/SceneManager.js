export class SceneManager{
    constructor(){
        this.currentScene = null;
    }

    setScene(scene){
        if(this.currentScene && this.currentScene.onExit){
            this.currentScene.onExit();
        }
        this.currentScene = scene;
        if(this.currentScene.onEnter){
            this.currentScene.onEnter();
        }
    }

    update(){
        if(this.currentScene && this.currentScene.update){
            this.currentScene.update()
        }
    }

    render(ctx) {
        if (this.currentScene && this.currentScene.render) {
            this.currentScene.render(ctx);
        }
    }
}