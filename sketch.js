// Code built off of this p5 snippet 
// https://editor.p5js.org/awarua/sketches/0imz5AJQU

//the blinkno (or blinkyes) variable makes sure that the left and right blink at the same time.
let blinkno
// the blinktime variable slows down the time of the blink, separate it from the frame rate.
let blinktime

function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    frameRate(30);
    blinktime = 60
}

function draw() {
    background('#FFFF00');
    for (let x = 30; x < width; x += 160) {
        for (let y = 30; y < height; y += 120) {
            leftEye(x, y);
            rightEye(x + 60, y);
        }
    }
}

function leftEye(x, y) {
    fill(255);
    ellipse(x, y, 60, 60);
    blinkno = random(100) < 99
    blink(x, y)
    return blinkno
}

function rightEye(x, y) {
    fill(255);
    ellipse(x, y, 60, 60);
    blink(x, y)
}

function blink(x, y) {
    if (blinkno) {
        fill(0);
        let moveX = 0;
        let moveY = 0;
        if (mouseX < x) {
            moveX = -3;
        } else if (x < mouseX) {
            moveX = 3;
        }
        if (mouseY < y) {
            moveY = -3;
        } else if (y < mouseY) {
            moveY = 3;
        }
        ellipse(x + moveX, y + moveY, 20, 20);
    } else {
        stroke(0);
        line(x - 30, y, x + 30, y);
    }
}