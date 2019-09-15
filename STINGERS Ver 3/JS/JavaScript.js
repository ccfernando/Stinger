var jokeStatus ='1';
var soundEffectss = document.getElementById("jokes");


function playSoundEffect(soundType,soundTitle) {
  if (soundType == 'bg') {
    document.getElementById("background").src= 'SOUNDS/backgrounds/'+soundTitle+'.mp3';
    var soundEffect = document.getElementById("background");
     soundEffect.volume=0.5;
    soundEffect.play();

  }
  else if (soundType == 'effect') {
    document.getElementById("effects").src='SOUNDS/effects/'+soundTitle+'.mp3';
    var soundEffect = document.getElementById("effects");
    soundEffect.play();
  }

  else if (soundType == 'jokes') {


    if(jokeStatus == '1'){
      jokeStatus='0';

      soundEffectss.play();
        }

    else {

      soundEffectss.pause();
      jokeStatus='1';
        }
  }

}



window.SetVolumeBG = function(val)
{
    var player = document.getElementById('background');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}

window.SetVolumeEffects = function(val)
{
    var player = document.getElementById('effects');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}



$(document).ready(function() {


  var degrees = 0;
  $('.menu_img').click(function rotateMe(e) {

    degrees += 360;

    //$('.img').addClass('rotated'); // for one time rotation

    $('.menu_img').css({

      'transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-o-transform': 'rotate(' + degrees + 'deg)'
    });

  })




});
