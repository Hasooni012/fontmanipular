function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    createCanvas(100,50);
    textSize(21);
    fill();
    text(hassan,30,200);
}

function draw(){
    background('#969A97');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}



