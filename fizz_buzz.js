"use strict";

var TAKE = {
    beginNumber : 0,
    endNumber : 100,
    fontWidth : 64,
    fontHeight: 32
};

window.onload = function(){
    outputFizzBuzzToColsole();
    outputFizzBuzzToCanvas();
};

function outputFizzBuzzToColsole(){
    var i = 0;
    for( i = TAKE.beginNumber ; i <= TAKE.endNumber ; ++i ){
        if( (i%15) === 0 ){
            console.log("Fizz Buzz");
        }
        else if( (i%3) === 0 ){
            console.log("Fizz");
        }
        else if( (i%5) === 0 ){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

function outputFizzBuzzToCanvas(){
    var i = 0;
    var str;
    var w = 0, h = 0;
    var canvas = document.getElementById("main_canvas");
    var context = canvas.getContext('2d');
    for( i = TAKE.beginNumber ; i <= TAKE.endNumber ; ++i ){
        w = Math.floor(i%10);
        h =Math.floor(i/10);
        if( (i%15) === 0 ){
            str = "Fizz Buzz";
        }
        else if( (i%3) === 0 ){
            str = "Fizz";
        }
        else if( (i%5) === 0 ){
            str = "Buzz";
        }
        else{
            str = i;
        }
        
        context.fillText(str, TAKE.fontWidth*w, TAKE.fontHeight*h+TAKE.fontHeight);
    }
}
