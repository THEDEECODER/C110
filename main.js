Webcam.set({
    width : 350,
    height : 300,
    format : 'png',
    png_quality : 90
});

Camera = document.getElementById("camera");

Webcam.attach('#Camera');

function Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

prediction_1 = "";
prediction_2 = "";

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('', modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function speak(){
var synth = window.speechSynthesis;
speak_data1 = "The First Perdiction Is" + prediction_1;
speak_data2 = "And The First Perdiction Is" + prediction_2;
var Utterthis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(Utterthis);
}