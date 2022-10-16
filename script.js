score = 0;
cross = true;
audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("Key code is :: ",e.keyCode);
    if (e.keyCode==38) {
        thor = document.querySelector('.thor');
        thor.classList.add('animatedthor');
        setTimeout(() => {
          
            thor.classList.remove('animatedthor')
        }, 700);
    }
    if (e.keyCode==39) {
        thor = document.querySelector('.thor');
        thorX = parseInt(window.getComputedStyle(thor,null).getPropertyValue('left'));
        thor.style.left = thorX + 112 + "px";
    }
    if (e.keyCode==37) {
        thor = document.querySelector('.thor');
        thorX = parseInt(window.getComputedStyle(thor,null).getPropertyValue('left'));
        thor.style.left = thorX - 112 + "px";
    }
}
setInterval(() => {
    thor = document.querySelector('.thor');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(thor,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(thor,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX,offsetY)
    
    if (offsetX < 113 && offsetY < 152) {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if(offsetX < 73 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.2;
        obstacle.style.animationDuration = newDur + 's';
        }, 500);
        
    }

}, 10);
function updatescore(score){
    scorecontainer.innerHTML = "Your Score : "+score
}






