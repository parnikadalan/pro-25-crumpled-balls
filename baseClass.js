class BaseClass{
    constructor(x,y,width,height,angle){
        var options = {
            restitution :0.2,
            friction :1.5,
            density :0.5
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("sprites/base.png")
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill("red")
        stroke("black")
        strokeWeight(4)
        
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}