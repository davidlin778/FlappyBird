var pole = document.getElementById("pole");
var entry = document.getElementById("entry");
var player = document.getElementById("player");
var fly = 0;

entry.addEventListener('animationiteration', () => {
    var any = -((Math.random()*300)+150);
    entry.style.top = any + "px";
});

setInterval(function(){
    var playerTop =
    parseInt (window.getComputedStyle(player).getPropertyValue("top"));
    player.style.top = (playerTop+3)+"px";
},10);

function fly(){
    flying = 1;
}