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


console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CULEqcvrw/model.json', modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}
prediction_1 = "";
prediction_2 = "";
function speak(){
var synth = window.speechSynthesis;
speak_data1 = "The First Perdiction Is" + prediction_1;
speak_data2 = "And The Second Perdiction Is" + prediction_2;
var Utterthis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(Utterthis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotresult);
}

function gotresult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById('emotion_name').innerHTML = results[0].label;
    document.getElementById('emotion_name2').innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
speak();
if(results[0].label == "Happy"){
    document.getElementById('emotion').innerHTML = "&#128522;";
}
if(results[0].label == "Sad"){
    document.getElementById('emotion').innerHTML = "&#128532;";
}
if(results[0].label == "Angry"){
    document.getElementById('emotion').innerHTML = "&#128545;";
}
if(results[1].label == "Happy"){
    document.getElementById('emotion2').innerHTML = "&#128522;";
}
if(results[1].label == "Sad"){
    document.getElementById('emotion2').innerHTML = "&#128532;";
}
if(results[1].label == "Angry"){
    document.getElementById('emotion2').innerHTML = "&#128545;";
}
}}