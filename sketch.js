
function preload() {
    img1 = loadImage("bedroom.png");
    img2 = loadImage("tv.jpg");
    img3 = loadImage("desk.jpg");
    img4 = loadImage("bottles.jpg");
    img5 = loadImage("fruit.jpg");
}

function setup() {

    //taken from p5.js example on Google search results
    canvas = createCanvas(windowWidth/1.25, windowHeight/2);
    rectMode(CENTER);
  }
  
  function draw() {
    background(220);
    console.log(width);

    //for the bedroom page
    if(document.URL.includes("bedroom.html")) {
        image(img1, 0, 0, 640, 427);
        //object recognition rectangles here 
            //object recog. rec. 1.1 and 1.2 (Cushions)
            //first cushion
            stroke("#FFFF00");
            strokeWeight(1);
            rect(255, 215, 80, 80)
            noFill();
            

            fill("rgba(255, 255, 0, 0.21)");
            label = text("Cushion", 220, 189);

            //second cushion
            stroke("#FFFF00");
            strokeWeight(1);
            rect(345, 215, 80, 80)
            noFill();
            

            fill("rgba(255, 255, 0, 0.21)");
            label = text("Cushion", 310, 189);

            //object recog. 1.3: picture above headboard
            noFill();
            stroke("#6657AB");
            strokeWeight(1);
            rect(290, 130, 160, 50);
            fill("rgba(102, 87, 171, 0.21)");
            noFill();


            fill("rgba(102, 87, 171, 0.21)");

            label = text("Picture", 310, 189);
    }

    //for the TV page
    if(document.URL.includes("tv_room.html")) {
        image(img2, 0, 0, 640, 427);
        //object recognition rectangles here  
            //object recog. rect. 2.1 (TV)
            stroke("#FFFF00");
            strokeWeight(1);
            rect(292.5, 180, 200, 125)
            noFill();
            

            fill("rgba(255, 255, 0, 0.21)");
            label = text("TV", 200, 135);
 
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