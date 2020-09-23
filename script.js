var pole = document.getElementById("pole");
var entry = document.getElementById("entry");
var player = document.getElementById("player");
var flying = 0;
var score = 0;


entry.addEventListener('animationiteration', () => {
    var any = -((Math.random()*300)+150);
    entry.style.top = any + "px";
    score++;
});


setInterval(function(){
    var playerTop =
    parseInt (window.getComputedStyle(player).getPropertyValue("top"));
    if(flying==0){
     player.style.top = (playerTop+3)+"px";
    }
    var poleLeft = 
    parseInt (window.getComputedStyle(pole).getPropertyValue("left"));
    var entryTop = 
    parseInt (window.getComputedStyle(entry).getPropertyValue("top"));
    var pTop = -(500-playerTop);
    if((playerTop>480)||((poleLeft<50)&&(poleLeft>-50)&&((pTop<entryTop)||(pTop>entryTop+130)))){
        alert("Game over. Score: " + (score-1) );
        player.style.top = 100 + "px";
        score = 0;
    
    }
},10);



function fly(){
    flying = 1;
    let flyCount = 0;
    var flyInterval = setInterval(function(){
        var playerTop =
        parseInt (window.getComputedStyle(player).getPropertyValue("top"));
        if((playerTop>6)&&(flyCount<15)){
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

