function preload() {
    img1 = loadImage(/*load image of bedroom here*/"https://pixabay.com/photos/bedroom-interior-design-bed-room-5664221/");
    img2 = loadImage(/*load image of tv here*/);
    img3 = loadImage(/*load image of desk here*/);
    img4 = loadImage(/*load image of bottles here*/);
    img5 = loadImage(/*load image of fruit basket here*/);
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    /*checking to see what page the user is on
    - displays images and drawings that correspond
    to the url of the page*/
    if(document.URL.includes("bedroom.html")) {
        image(img1, 0, 0, 640, 420);
        //object recognition rectangles here
        
    }
    else if(document.URL.includes("tv.html")) {
        image(img2, 0, 0, 640, 420);
        //object recognition rectangles here
    }
    else if(document.URL.includes("desk.html")) {
        image(img3, 0, 0, 640, 420);
        //object recognition rectangles here
    }
    else if(document.URL.includes("bottles.html")) {
        image(img4, 0, 0, 640, 420);
        //object recognition rectangles here
    }
    else if(document.URL.includes("fruit_basket.html")) {
        image(img5, 0, 0, 640, 420);
        //object recognition rectangles here
    }
}