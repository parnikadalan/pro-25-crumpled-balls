class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/bird.png")
        this.smokeImage = loadImage("sprites/smoke.png")
        this.trajectory = []
    }
    
    display(){
        
        var pos = this.body.position
        //stores positions of the bird in this.trajectory array
        if(this.body.velocity.x>10 && pos.x>220) {
            var position = [pos.x , pos.y]
            this.trajectory.push(position)
        }


        //draws the smoke image at each point stored in the this.trajectory
        for(var i = 0; i<this.trajectory.length; i = i+1){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
        }
        super.display()
    }
}