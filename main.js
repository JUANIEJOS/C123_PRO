x=0;
y=0;
to_no=0;
apple="";
draw_apple="";
speak_Data="";
width=0;
height=0;

function preload(){
    apple=loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 
 
function start() { 
document.getElementById("status").innerHTML = "System is listening please speak"; 
recognition.start();
 }


recognition.onresult=function(event){
console.log(event);

content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="The speech has been recognised as "+content;
to_no=Number(content);

if(Number.isInteger(to_no)){
    document.getElementById("status").innerHTML="Started drawing apples";
    draw_apple="set";
}
else{
    document.getElementById("status").innerHTML="The speech has not recognized a integer number";
}

}

function setup(){
width=window.innerWidth;
height=window.innerHeight;
canvas=createCanvas(width,height-150);
canvas.position(0,150);
} 

function draw(){
if(draw_apple == "set"){
    for(var i=1; 1<=to_no; i++){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML= to_no +"Apples drawn";
    speak_Data=to_no +"Apples drawn";
    speak();
    draw_apple="";
    
}
}

function speak(){ 
    var synth = window.speechSynthesis; 
    var utterThis = new SpeechSynthesisUtterance(speak_Data); 
    synth.speak(utterThis); 
    speak_Data = ""; 
}
