var lamp, aladinBackgroundImg,aladinBackground, genie


function preload() {
    aladinBackgroundImg = loadAnimation("bg.png")
    genieImg = loadImage("genie.png")
    lampImg = loadImage("lamp.png")
}

function setup() {
    createCanvas(1000, 600)

    aladinBackground = createSprite(width/2, height/2+100, width,height);
    aladinBackground.addAnimation("ground", aladinBackgroundImg);
    aladinBackground.velocityX = -2

}

function draw() {

    background("brown")

    if (aladinBackground.x < 400) {
        aladinBackground.x = width/2
    }

    drawSprites();
    
}