
var data ={
  "icons" :
  [
    {
      "id": "1",
      "name": "car",
      "properties": {
        "class": "fa-car",
        "spanish": "carro",
        "english": "car",
        "genre":"el"
      }
    },
    {
      "id": "2",
      "name": "scissors",
      "properties": {
        "class": "fa-scissors",
        "spanish": "tijeras",
        "english": "scissors",
        "genre":"las"
      }
    },
    {
      "id": "3",
      "name": "calculator",
      "properties": {
        "class": "fa-calculator",
        "spanish": "calculadora",
        "english": "calculator",
        "genre":"la"
      }
    },
    {
      "id": "4",
      "name": "bomb",
      "properties": {
        "class": "fa-bomb",
        "spanish": "bomba",
        "english": "bomb",
        "genre":"la"
      }
    },
    {
      "id": "5",
      "name": "book",
      "properties": {
        "class": "fa-book",
        "spanish": "libro",
        "english": "book",
        "genre":"el"
      }
    },
    {
      "id": "6",
      "name": "cake",
      "properties": {
        "class": "fa-birthday-cake",
        "spanish": "pastel",
        "english": "cake",
        "genre":"el"
      }
    },
    {
      "id": "7",
      "name": "coffee",
      "properties": {
        "class": "fa-coffee",
        "spanish": "cafe",
        "english": "coffee",
        "genre":"el"
      }
    },
    {
      "id": "8",
      "name": "cloud",
      "properties": {
        "class": "fa-cloud",
        "spanish": "nube",
        "english": "cloud",
        "genre":"la"
      }
    },
    {
      "id": "9",
      "name": "diamond",
      "properties": {
        "class": "fa-diamond",
        "spanish": "diamante",
        "english": "diamond",
        "genre":"el"
      }
    },
    {
      "id": "10",
      "name": "female",
      "properties": {
        "class": "fa-female",
        "spanish": "mujer",
        "english": "female",
        "genre":"la"
      }
    },
    {
      "id": "11",
      "name": "male",
      "properties": {
        "class": "fa-male",
        "spanish": "hombre",
        "english": "male",
        "genre":"el"
      }
    },
    {
      "id": "12",
      "name": "futbol",
      "properties": {
        "class": "fa-futbol-o",
        "spanish": "balon",
        "english": "ball",
        "genre" : "el"
      }
    },
    {
      "id": "13",
      "name": "gamepad",
      "properties": {
        "class": "fa-gamepad",
        "spanish": "control",
        "english": "gamepad",
        "genre" : "el"
      }
    },
    {
      "id": "14",
      "name": "home",
      "properties": {
        "class": "fa-home",
        "spanish": "casa",
        "english": "home",
        "genre" : "la"
      }
    },
    {
      "id": "15",
      "name": "mobile",
      "properties": {
        "class": "fa-mobile",
        "spanish": "celular",
        "english": "mobile",
        "genre" : "el"
      }
    },
    {
      "id": "16",
      "name": "tree",
      "properties": {
        "class": "fa-tree",
        "spanish": "arbol",
        "english": "tree",
        "genre" : "el"
      }
    },
    {
      "id": "17",
      "name": "trophy",
      "properties": {
        "class": "fa-trophy",
        "spanish": "trofeo",
        "english": "trophy",
        "genre" : "el"
      }
    },
    {
      "id": "18",
      "name": "umbrella",
      "properties": {
        "class": "fa-umbrella",
        "spanish": "sombrilla",
        "english": "umbrella",
        "genre" : "la"
      }
    },
    {
      "id": "19",
      "name": "university",
      "properties": {
        "class": "fa-university",
        "spanish": "universidad",
        "english": "university",
        "genre" : "la"
      }
    },
    {
      "id": "20",
      "name": "video-camera",
      "properties": {
        "class": "fa-video-camera",
        "spanish": "camara",
        "english": "camera",
        "genre" : "la"
      }
    },
    {
      "id": "21",
      "name": "ambulance",
      "properties": {
        "class": "fa-ambulance",
        "spanish": "ambulancia",
        "english": "ambulance",
        "genre" : "la"
      }
    },
    {
      "id": "22",
      "name": "plane",
      "properties": {
        "class": "fa-plane",
        "spanish": "avion",
        "english": "plane",
        "genre" : "el"
      }
    },
    {
      "id": "23",
      "name": "subway",
      "properties": {
        "class": "fa-subway",
        "spanish": "tren",
        "english": "subway",
        "genre" : "el"
      }
    },
    {
      "id": "24",
      "name": "bicycle",
      "properties": {
        "class": "fa-bicycle",
        "spanish": "bicicleta",
        "english": "bicycle",
        "genre" : "la"
      }
    },
    {
      "id": "25",
      "name": "truck",
      "properties": {
        "class": "fa-truck",
        "spanish": "camion",
        "english": "truck",
        "genre" : "el"
      }
    },
    {
      "id": "26",
      "name": "heart",
      "properties": {
        "class": "fa-heart",
        "spanish": "corazon",
        "english": "heart",
        "genre" : "el"
      }
    }
  ]
};

var captchaAnswered = false;
var captchaAnswer = getRandomIcon();
var language = "es";

$(document).ready(function() {

  reloadCaptcha(true);
  $('.reCap').on('click', function(event) {
    event.preventDefault();
      $('.reCap i').addClass('fa-spin');
    setTimeout(function(){
      reloadCaptcha(true);
    }, 1000);

  });

$('.voiceCaptcha').on('click', function(event) {
  event.preventDefault();
  spechToTextCaptcha($('.captchaTitle').text());
});

});

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

function getRandomIcon() {
    var id = getRandomId(1,25);
    return data.icons[parseInt(id)];
}

function getRandomId(min,max){
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomsByArray(arr,icon){
  var addToArray = false;
  for (var i = 0; i < arr.length; i++) {
    if(icon === arr[i]){
      addToArray  = false;
      break;
    }
    else {
      addToArray = true;
    }
  }
  return addToArray;
}

function loadPictures(answerId){
  var arr = new Array();
  arr.push(answerId);
  for (var i = 0; i < 5; i++) {
    var aux = getRandomIcon();
    if(getRandomsByArray(arr,aux))
    {
      arr.push(aux);
    }
    else {
      i--;
    }
  }
  arr.unique();
  shuffle(arr);
  for (var i = 0; i < arr.length; i++) {
    $('.capchaIcons').append(' <a data-id="'+ arr[i].id +'" class="captchaIconSingle fa ' + arr[i].properties.class + '" ></a> ');
  }

  console.log(arr);
}

function clearCaptcha(){

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function reloadCaptcha(reload){
  if(reload){
    captchaAnswer = getRandomIcon();
    captchaAnswered = false;
    $('.capchaIcons').html('');
    $('.captchaQuestion').text('');
    $('.reCap i').removeClass('fa-spin');
  }
  if(language==="es"){
    $('.captchaQuestion').text(captchaAnswer.properties.genre + ' ' + captchaAnswer.properties.spanish);
  }
  else {
    $('.captchaQuestion').text('The ' + captchaAnswer.properties.english );
  }
  loadPictures(captchaAnswer);

  $('.capchaIcons a').on('click', function(event) {
    event.preventDefault();
    $('.capchaIcons a').removeClass('selectedIconCaptcha');
    captchaAnswered = false;
    $(this).addClass('selectedIconCaptcha');
    if($(this).data('id') == captchaAnswer.id){
      captchaAnswered = true;
    }
    else {
      captchaAnswered = false;
    }
  });

  $('.submitForm').on('click',function(event) {
    event.preventDefault();
    if(captchaAnswered)
    {
      alert('captcha resuelto correctamente');
      reloadCaptcha(true);
    }
    else{
      reloadCaptcha(true);
    }
  });
}

function spechToTextCaptcha(text){
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.text = text;
  if(language == 'es'){
    msg.lang = 'es-ES';
    }
  else {
    msg.lang = 'en-US';
  }

  msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };
  speechSynthesis.speak(msg);
}
