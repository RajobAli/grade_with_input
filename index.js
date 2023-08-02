
var q = document.querySelector(".three");
var m = document.querySelector(".two");

// var myv = document.querySelector(".one");

function myMessage1(){
    var r = m.value;
    if(r<0 || r>100){
        q.innerHTML= "Number invalid";
    }
    else if(r>=80){
        q.innerHTML = "A+";
    }
    else if(r>=70){
        q.innerHTML = "A";
    }
    else if(r>=60){
        q.innerHTML = "B";
    }
    else if(r>=50){
        q.innerHTML = "C";
    }
    else if(r>=40){
        q.innerHTML = "D";
    }
    else{
        q.innerHTML = "Fail";
    }
 };
