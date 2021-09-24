function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vUy1sPpVY/model.json', modelReady);
}

function modelReady(){
    console.log("Model Ready");
  classifier.classify( gotResults);
}
