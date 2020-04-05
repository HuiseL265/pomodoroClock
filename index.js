
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

document.getElementById("control").style.display = "none";

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

    if(minutes != 0 && rest != 0){
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
            
        }, 1000);
    
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

        timer = document.querySelector("#panels");
        fadeOut(timer,1);

        document.getElementById("control").style.display = "flex";
    }else{
        alert("Informe o tempo para descanço e estudo")
    }   
}

function setRest(){
    rest = document.getElementById("rest").innerHTML
    min = document.getElementById("min").innerHTML


}

function fadeOut(element,time){
    processa(element,time,100,0);
}

function processa(element,time,initial,end){
    if(initial == 0){
        increment = 2;
        element.style.display = "block";
    }else{
        increment = -2;
    }

    opc = initial

    intervalo = setInterval(function(){
        if((opc == end)){
          if(end == 0){
          element.style.display = "none";
          }
          clearInterval(intervalo);
        }else {
            opc += increment;
            element.style.opacity = opc/100;
            element.style.filter = "alpha(opacity="+opc+")";
        }    
      },time * 10);
}



//controls

function pause(){
    text = document.getElementById("pause").innerHTML
    if(text == "PAUSE"){
        document.getElementById("pause").innerHTML = "UNPAUSE";
        clearInterval(tempM)
        clearInterval(tempS)
    }else{
        document.getElementById("pause").innerHTML = "PAUSE"
        setTime()
    }
}


