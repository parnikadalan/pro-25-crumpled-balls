class Slingshot {
    constructor(body1, pointB) {
        var options = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.2,
            length: 50
        }

        this.sling = Matter.Constraint.create(options)
        this.pointB = pointB
        this.image = loadImage("sprites/sling1.png")
        this.image1 = loadImage("sprites/sling2.png")
        this.image2 = loadImage("sprites/sling3.png")
        World.add(world, this.sling)

    }

    fly() {
        this.sling.bodyA = null

    }

    display() {

        image(this.image, 200, 20)
        image(this.image1, 170, 20)

        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position
            push()
            stroke(48, 22, 8)
            if (this.sling.bodyA.position.x > 220) {


                strokeWeight(2)

                line(pointA.x - 10, pointA.y, this.pointB.x + 20, this.pointB.y)
                line(pointA.x - 10, pointA.y, this.pointB.x - 20, this.pointB.y)
                image(this.image2, pointA.x - 20, pointA.y - 10, 10, 30)
            }
            else {

                strokeWeight(7)

                line(pointA.x - 10, pointA.y, this.pointB.x + 20, this.pointB.y)
                line(pointA.x - 10, pointA.y, this.pointB.x - 20, this.pointB.y)
                image(this.image2, pointA.x - 20, pointA.y - 10, 10, 30)
            }
            pop()
        }


    }

    reattach(body1){
        this.sling.bodyA = body1
    }
}