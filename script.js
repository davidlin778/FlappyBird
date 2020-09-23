var pole = document.getElementById("pole");
var entry = document.getElementById("entry");
var player = document.getElementById("player");
var flying = 0;

entry.addEventListener('animationiteration', () => {
    var any = -((Math.random()*300)+150);
    entry.style.top = any + "px";
});

setInterval(function(){
    var playerTop =
    parseInt (window.getComputedStyle(player).getPropertyValue("top"));
    if(flying==0){
     player.style.top = (playerTop+3)+"px";
    }
},10);

function fly(){
    flying = 5;
    let flyCount = 0;
    var flyInterval = setInterval(function(){
        var playerTop =
        parseInt (window.getComputedStyle(player).getPropertyValue("top"));
        if(playerTop>6){
            player.style.top = (playerTop-5)+"px";
        }
       
        if(flyCount>20){
            clearInterval(flyInterval)
            flying=0;
            flyCount=0;
        }
        flyCount++;
    },10);
}