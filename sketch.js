var ball;
var db;
var Position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database();
    var ballPosition = db.ref("Ball/Position");
    ballPosition.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref("Ball/Position").set({
        X:ball.x+x,
        Y:ball.y+y
    })
}

function readPosition(data){
    Position = data.val();
    ball.x = Position.X;
    ball.y = Position.Y;
}

function showError(){
    
}