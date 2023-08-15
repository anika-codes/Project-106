function start_classify(){

    navigator.mediaDevices.getUserMedia({audio : true});

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e80Aryps0/model.json", modelReady);

    
}

function modelReady(){
    console.log("Model is loaded");
    classifier.classify(got_results);
}

function got_results(error, results){
    console.log("we got results")
}