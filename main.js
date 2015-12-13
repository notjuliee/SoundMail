var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (undefined === Gmail) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  gmail = new Gmail();
  console.log('SoundMail is running!');
  gmail.observe.on('new_email', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_1-up.wav');
  	audio.play();
  });
  gmail.observe.on('delete', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav');
  	audio.play();
  });
  gmail.observe.on('star', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav');
  	audio.play();
  });
  gmail.observe.on('send_message', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav');
  	audio.play();
  });
  gmail.observe.on('discard_draft', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_bowserfalls.wav');
  	audio.play();
  });
  gmail.observe.on('expand_categories', function() {
  	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_bump.wav');
  	audio.play();
  });
  //gmail.observe.on('refresh', function() {
  //	var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_stomp.wav');
  //	audio.play();
  //});
}


refresh(main);
