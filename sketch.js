stat = "";
objects = [];

function preload() {
    img1 = loadImage("bedroom.png");
    img2 = loadImage("tv.jpg");
    img3 = loadImage("desk.jpg");
    img4 = loadImage("bottles.jpg");
    img5 = loadImage("fruit.jpg");
}

function setup() {
    //taken from p5.js example on Google search results, modified by me
    canvas = createCanvas(windowWidth/1.25, windowHeight/2);
    rectMode(CENTER);

    objectDetector = ml5.objectDetector("cocssd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
  }

  function modelLoaded() {
    console.log("Model Loaded!");
    stat = true;
  }

  function gotResult(results, error) {
    if(error) {
        console.log(error);
    }
    else if(results) {
        objects = results;
    }

}
  
  function draw() {
    background(220);
    console.log(width);

    //for the bedroom page
    if(document.URL.includes("bedroom.html")) {
        image(img1, 0, 0, 640, 427);
    }

    //for the TV page
    if(document.URL.includes("tv_room.html")) {
        image(img2, 0, 0, 640, 427);
    }

    //for the desk page
    if(document.URL.includes("desk.html")) {
        image(img3, 0, 0, 525, 357);
    }

    if(document.URL.includes("bottles.html")) {
        image(img4, 0, 0, 525, 357);
    }

    if(document.URL.includes("fruit_basket.html")) {
        image(img5, 0, 0, 525, 357);
    }

  }
  
  function windowResized() {
    resizeCanvas(windowWidth/1.25, windowHeight/2);
  }