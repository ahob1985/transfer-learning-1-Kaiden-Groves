// Author:

// Global UI Variables
let canvasDiv; 

let canvas;

let textDiv;

let textP;

let buttonDiv;

let happyButton;

let sadButton;

let trainButton;
//let canvasDiv;

// Global ML Variables
let featureExtractor;

let classifier;

let video;

let happies;

let sads;

let isModelReady;

let isTrainingComplete;
//let featureExtractor;

function setup() {
  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildButtons() {
  buttonDiv = createDiv();
  happyButton = createButton("Happy");

  happyButton.mousePressed(function () {

  happies += 1;

  textP.html("Happies: " + happies + " - Sads: " + sads);

  classifier.addImage(canvas, "Happy");

  });
  trainButton.mousePressed(function () {

  buttonDiv.style("display", "none");

  textP.html("New model training, please wait...");

  classifier.train(whileTraining);

});


}

function videoReady() {
  featureExtractor = ml5.featureExtractor("MobileNet", featureExtractorLoaded);
}

function featureExtractorLoaded() {
  classifier = featureExtractor.classification(canvas, modelReady);
}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
