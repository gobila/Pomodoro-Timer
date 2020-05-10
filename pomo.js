
const minutes = 1;
const seconds = 9;
const secText = "00";

const minPaused = 05;
const secPaused = "00";

let src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
let audio = new Audio(src);


var count;



function timer() {
  document.querySelector("#menssage").innerHTML = "WORK";
  document.querySelector("#seconds").innerHTML = secText;
  document.querySelector("#minutes").innerHTML = minutes;
  setTimeout(function(){ 
    let minDom = minutes;
    let secDom = seconds;
      
    minDom=minDom-1
    document.querySelector("#seconds").innerHTML = secDom;
    document.querySelector("#minutes").innerHTML = minDom;
    
    count = setInterval(function () {
      if(minDom != 0){
        
        document.querySelector("#minutes").innerHTML = minDom;
        
        if(secDom > 0){
          secDom--;
          
          if(secDom <10){
            document.querySelector("#seconds").innerHTML = "0"+secDom;
            if(minDom <10){
              document.querySelector("#minutes").innerHTML = "0"+minDom;
            }else{
              document.querySelector("#minutes").innerHTML = minDom;
            }
            //console.log(minDom, secDom)
          }else{
            document.querySelector("#seconds").innerHTML = secDom;
            if(minDom <10){
              document.querySelector("#minutes").innerHTML = "0"+minDom;
            }else{
              document.querySelector("#minutes").innerHTML = minDom;
            }
          }

        }else{
          secDom = seconds;
          minDom--;
          //console.log(minDom, secDom)
          if(minDom <10){
            document.querySelector("#seconds").innerHTML = secDom;
            document.querySelector("#minutes").innerHTML = "0"+minDom;
          }else{
            document.querySelector("#seconds").innerHTML = secDom;
            document.querySelector("#minutes").innerHTML = minDom;
          }
        }

      }else{
        if(secDom > 0){
          secDom--;
          //console.log(minDom, secDom)
          document.querySelector("#seconds").innerHTML = secDom;
        }
      }
      
      if(secDom==0 && minDom==0){
        document.querySelector("#time").innerHTML = "Finished timer";
        
        
        //clearInterval(timer)
      }
    },1000);
  },1000);
};


function timerPause(){
  
  document.querySelector("#menssage").innerHTML = "Pause";
  
  document.querySelector("#seconds").innerHTML = secPaused;
  document.querySelector("#minutes").innerHTML = "0"+minPaused;
  setTimeout(function(){ 
    let minDom = minPaused;
    let secDom = seconds;
      
    minDom=minDom-1
    document.querySelector("#seconds").innerHTML = secDom;
    document.querySelector("#minutes").innerHTML = "0"+minDom;
    
    count = setInterval(function () {
      if(minDom != 0){
        
        document.querySelector("#minutes").innerHTML = minDom;
        
        if(secDom > 0){
          secDom--;
          
          if(secDom <10){
            document.querySelector("#seconds").innerHTML = "0"+secDom;
            if(minDom <10){
              document.querySelector("#minutes").innerHTML = "0"+minDom;
            }else{
              document.querySelector("#minutes").innerHTML = minDom;
            }
            //console.log(minDom, secDom)
          }else{
            document.querySelector("#seconds").innerHTML = secDom;
            if(minDom <10){
              document.querySelector("#minutes").innerHTML = "0"+minDom;
            }else{
              document.querySelector("#minutes").innerHTML = minDom;
            }
          }

        }else{
          secDom = seconds;
          minDom--;
          //console.log(minDom, secDom)
          if(minDom <10){
            document.querySelector("#seconds").innerHTML = secDom;
            document.querySelector("#minutes").innerHTML = "0"+minDom;
          }else{
            document.querySelector("#seconds").innerHTML = secDom;
            document.querySelector("#minutes").innerHTML = minDom;
          }
        }

      }else{
        if(secDom > 0){
          secDom--;
          //console.log(minDom, secDom)
          document.querySelector("#seconds").innerHTML = secDom;
        }
      }
      
      if(secDom==0 && minDom==0){
        document.querySelector("#time").innerHTML = "Finished timer";
        //clearInterval(timer)
      }
    },1000);
  },1000);
};


function start(){
  document.querySelector("#seconds").innerHTML = seconds;
  document.querySelector("#minutes").innerHTML = minutes;
  let startBtn = document.querySelector('#start');
  startBtn.addEventListener("click", stop);
  startBtn.addEventListener("click", timer);
}

function stop(){
  document.querySelector("#menssage").innerHTML = "";
  paused=true
  clearInterval(count)
  let startBtn = document.querySelector('#stop');
  startBtn.addEventListener("click", stop);
  document.querySelector("#seconds").innerHTML = secText;
  document.querySelector("#minutes").innerHTML = minutes;
  
}

function pause(){
  let pauseBtn = document.querySelector('#pause');
  pauseBtn.addEventListener("click", stop);
  pauseBtn.addEventListener("click", timerPause);
}


document.addEventListener("DOMContentLoaded", start);
document.addEventListener("DOMContentLoaded", stop);
document.addEventListener("DOMContentLoaded", pause);




