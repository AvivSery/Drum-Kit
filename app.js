


function clicked () {
    console.log('clicked!');
    //some code
}

document.onkeydown = function (e) {

    var keyCode = e.keyCode;
    playSound(keyCode);

};



var link ='https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav'


  function playSound(keyCode) {

    link= findTheCorrectLink(keyCode);
    let buttonPreesed = whiceButtonPreesd(keyCode)
    
    var audio = new Audio(link);
    audio.play();
    if(buttonPreesed !== undefined){
        console.log(buttonPreesed)

    PaintKey(buttonPreesed)
    removePaintFromKey(buttonPreesed);

    }
    
  }

  function whiceButtonPreesd(keyCode){

    switch(keyCode){
        case 69: return "e"; case 82: return "r";case 70: return "f";case 71: return "g";
        case 86: return "v";case 66: return "b";case 72: return "h";case 74: return "j";
        case 73: return "i";case 75: return "k"; default: return undefined;
    }

    
  }

  function PaintKey(buttonPreesed){

    document.getElementById(buttonPreesed).classList.add('playing')

  }

  function removePaintFromKey(buttonPreesed){

    setTimeout(function(){ 
        document.getElementById(buttonPreesed).classList.remove('playing');
     }, 1000);

    
    console.log("ssss")


  }

  function findTheCorrectLink(keyCode){

    switch(keyCode){
        case 69: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav";
        case 82: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav";
        case 70: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav";
        case 71: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav";
        case 72: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav";
        case 74: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav";
        case 73: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav";
        case 75: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav";
        case 86: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav";
        case 66: return"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav";
        default : return undefined;
    }
      
  }

