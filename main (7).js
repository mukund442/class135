function setup(){
    canvas=createCanvas(480, 340);
    canvas.center();
}

video="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function start(){
    document.getElementById("status").innerHTML="detecting objects";

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}

function draw(){
    image(video, 0, 0, 480, 340);
}

