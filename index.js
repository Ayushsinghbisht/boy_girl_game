cross=true;
score=0;

audio1=new Audio("audio1.mp3");

audio2=new Audio("audio2.mp3");

// setTimeout(()=>{
//     console.log("audio1");
//     audio1=new Audio("audio1.mp3");
// audio1.play();
// },1000)

audio1.play();

    

document.onkeydown=function(e){
    // audio1.play();
    console.log("key code is :",e.key)
    if(e.key=="ArrowUp"){
        x=document.querySelector(".boy");
        x.classList.add('animateboy');
        console.log("key code is :",e.keyCode);
setTimeout(() => {
    x.classList.remove('animateboy');
},700);

    }
    if(e.key=="ArrowRight"){
        x=document.querySelector(".boy");
        x.classList.add('animateboyright');
        console.log("key code is :",e.keyCode);
setTimeout(() => {
    x.classList.remove('animateboyright');
},700);

    }
    if(e.key=="ArrowDown"){
        x=document.querySelector(".boy");
        x.classList.add('animateboydown');
        console.log("key code is :",e.keyCode);
setTimeout(() => {
    x.classList.remove('animateboydown');
},700);

    }
    if(e.key=="ArrowLeft"){
        x=document.querySelector(".boy");
        x.classList.add('animateboyleft');
        console.log("key code is :",e.keyCode);
setTimeout(() => {
    x.classList.remove('animateboyleft');
},800);

    }
}
audio1.play();

setInterval(()=>{
  
    dino=document.querySelector('.boy');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.girl');
   
   

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));

    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));

    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));


    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);

    console.log(offsetx,offsety);
    if(offsetx<113 && (offsety<120 &&offsety>100)  ){
       obstacle.classList.remove('girlani');
        gameover.style.visibility='visible';
        audio2.play();
        setTimeout(()=>{
audio1.pause();
audio2.pause();
        },1000);
    }
    else if(cross && offsetx<100 &&(offsety>300 || offsety<80)) {
        score+=1;
        updateScore(score);

    }


},100)

function updateScore(score){
    console.log("its called"+score);
    scoreCnt=document.querySelector('.score');
    scoreCnt.innerHTML="your score :"+score;
    setTimeout(() => {
        score=true;
    }, 10000);
}

