function start_classify(){

    navigator.mediaDevices.getUserMedia({audio : true});

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e80Aryps0/model.json", modelReady);

    
}

function modelReady(){
    console.log("Model is loaded");
    classifier.classify(got_results);
}

function got_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)

        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        sound_name =  results[0].label;
        document.getElementById("sound").innerHTML = sound_name;
        accuracy = (results[0].confidence*100).toFixed(2);
        document.getElementById("accuracy").innerHTML = accuracy + "%";

        document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

        picture = document.getElementById("picture");

        if(sound_name == "Background Noise"){
            picture.src = "colorear-removebg-preview.png";
        }
        else if(sound_name == "cat meowing"){
            picture.src = "cat.webp";
        }
        else if(sound_name == "Cow Mooing"){
            picture.src = "cow.webp";
        }
        else if(sound_name == "Pig Noises"){
            picture.src = "pig.jpg";
        }
        else if(sound_name == "Dog Barking"){
            picture.src = "dog.png";
        }

    }
}