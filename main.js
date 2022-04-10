function preload(){
}

function setup()
{
    canvas = createCanvas(500,500);
    canvas.position(425, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 50, 50, 400, 410);
    
    fill(255,0,0);
    stroke(0,0,255);
    circle(25, 25, 55);
    circle(472, 25, 55);
    circle(472, 475, 55);
    circle(25, 475, 55);

    fill(0,0,255);
    stroke(255,0,0);
    rect(50, 2, 400, 50);
    rect(1, 50, 50, 400);
    rect(50, 454, 400, 45);
    rect(450, 50, 50, 400)
}


function take_snapshot()
{
    save('student_name.png');
}
