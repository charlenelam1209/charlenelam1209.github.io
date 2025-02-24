var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 7,
    ySpeed: 5,
    colour: 'red',
    draw: function(){
        fill( this.colour )
        rect(this.x, this.y, this.w, this.h)
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }

        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var bluebrick = {
    x: 80,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 5,
    ySpeed: 7,
    colour: 'blue',
    draw: function(){
        fill( this.colour )
        rect(this.x, this.y, this.w, this.h)
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }

        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// redBrick.x++ returnes current value then increments
// ++redBrick.x increments value then returns

function setup(){
    createCanvas(480,480)
}

function draw(){
    background('grey');
    redBrick.draw();
    redBrick.move();
    bluebrick.draw();
    bluebrick.move();
}