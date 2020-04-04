
function Min(e){
    val = document.getElementById("minutes").innerHTML;
    if(e == "up-min") val = upValue(val);
    if(e == "down-min") val = downValue(val);

    val = limit(val);

    document.getElementById("minutes").innerHTML = val
}

function Rest(e){
    val = document.getElementById("rest").innerHTML;
    if(e == "up-rest") val = upValue(val);
    if(e == "down-rest") val = downValue(val);

    val = limit(val);

    document.getElementById("rest").innerHTML = val
}

function upValue(val){
    val++;
    return val;
}

function downValue(val){
    val--;
    return val;
}

function limit(val){
    if(val > 60) val = 0;
    if(val < 0) val = 60;
    return val;
}

function setTime(){
    //get value
    minutes = document.getElementById("minutes").innerHTML
    rest = document.getElementById("rest").innerHTML

    //set value
    min = document.getElementById("min").innerHTML
    sec = document.getElementById("sec").innerHTML
    sec = parseInt(sec)
    min = parseInt(min)
    min = minutes

    //min
    tempM = setInterval(function(){
        if(sec == 0){
            if(min == 1){
                clearInterval(tempM);
            }
            min -= 1;
            if(min < 10){
                document.getElementById("min").innerHTML = "0"+min;
                }else{
                document.getElementById("min").innerHTML = min;
                }  
            sec = 60
        }
        
    }, 500);

    //sec
    tempS = setInterval(function(){
        if(sec > 0){
            sec-= 1;
            if(sec < 10){
            document.getElementById("sec").innerHTML = "0"+sec;
            }else{
            document.getElementById("sec").innerHTML = sec;
            }  
            console.log(sec)
        }else{
            clearInterval(tempS);
        }
    }, 1000);

}

function setRest(){
    rest = document.getElementById("rest").innerHTML
    min = document.getElementById("min").innerHTML


}



