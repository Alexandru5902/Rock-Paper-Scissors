/* Modal for the button */
const btnrules = document.querySelector('.btn-rules');
const btnclose = document.querySelector('.modal-remove');
const modal = document.querySelector('.modal');
const btnrestart = document.querySelector('.btn-restart');

btnrules.addEventListener('click',function(){
modal.classList.add('active');
});

btnclose.addEventListener('click',function(){
modal.classList.remove('active');
});

btnrestart.addEventListener('click',function(){
location.reload();
});



/* Rock Paper Scissors */

const elements = [{
    id:0,
    element:"paper",
    img:"images/icon-paper.svg",
},{
    id:1,
    element:"rock",
    img:"images/icon-rock.svg",
},{
    id:2,
    element:"scissors",
    img:"images/icon-scissors.svg",
}]

/* We select every thing */

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const playagain = document.querySelector('.play-again');
const scoreplay = document.querySelector('.score');

let Score = 0;
scoreplay.innerHTML = Score;


paper.addEventListener('click',function(e){
   /* Variables */

   let flexchose = document.querySelector('.flex-chose');
   let flexplay = document.querySelector('.flex-play');
   let playtext = document.querySelector('.play-text');
   let playimg = document.getElementById('player-img');
   let playercolor = document.querySelector('.player-img');
   let mesage;
   e.preventDefault();
   console.log(this.src);
   let papervariable = this.dataset.id;
   playimg.src = this.src;
   playercolor.style.border = '20px solid hsl(230, 89%, 62%)';

   /* When you click */

   console.log("Clicked!");
   console.log(papervariable);
   flexchose.style.display = 'none';
   flexplay.style.display = 'flex';
   playagain.addEventListener('click',function(){
    flexchose.style.display = 'flex';
    flexplay.style.display = 'none';
  });
     
  /* Random Pick */

  let index = Math.floor(Math.random() * elements.length)
  console.log(elements[index]);
  let playerimg = document.getElementById('rock-img');
  let houseimg = document.querySelector('.house-img');
  playerimg.src = elements[index].img;

  if(elements[index].element === "paper"){
      houseimg.style.border = '20px solid hsl(230, 89%, 62%)';
  } else if(elements[index].element === 'rock'){
      houseimg.style.border = '20px solid hsl(349, 71%, 52%)';
  } else if(elements[index].element === 'scissors'){
      houseimg.style.border = '20px solid hsl(39, 89%, 49%)';
  }

  if(papervariable === 'paper' && elements[index].element === 'paper'){
      console.log("ESTE IEGALITATE!");
      mesage = "IT'S TIE";
      scoreplay.innerHTML = Score;
  }

  if(papervariable === 'paper' && elements[index].element === 'rock'){
      console.log("Ai castigat");
      mesage = "YOU WON";
      Score = Score + 1;
      scoreplay.innerHTML = Score;
  }

  if(papervariable === 'paper' && elements[index].element === 'scissors'){
      console.log("Ai pierdut bossulica");
      mesage = "YOU LOST";
      scoreplay.innerHTML = Score;
  }

  console.log(Score);
  
  playtext.innerHTML = mesage;

})

rock.addEventListener('click',function(e){
   let flexchose = document.querySelector('.flex-chose');
   let flexplay = document.querySelector('.flex-play');
   let playtext = document.querySelector('.play-text');
   let playimg = document.getElementById('player-img');
   let playercolor = document.querySelector('.player-img');
   playercolor.style.border = '20px solid hsl(349, 71%, 52%)';
   playimg.src = this.src;
   let mesage
   e.preventDefault();
   let rockvariable = this.dataset.id;
   console.log("Clicked!");
   console.log(rockvariable);
   flexchose.style.display = 'none';
   flexplay.style.display = 'flex';
   playagain.addEventListener('click',function(){
    flexchose.style.display = 'flex';
    flexplay.style.display = 'none';
 });

  let index = Math.floor(Math.random() * elements.length)
  console.log(elements[index]);
  let playerimg = document.getElementById('rock-img');
  let houseimg = document.querySelector('.house-img');
  playerimg.src = elements[index].img;

  if(elements[index].element === "paper"){
     houseimg.style.border = '20px solid hsl(230, 89%, 62%)';
  } else if(elements[index].element === 'rock'){
     houseimg.style.border = '20px solid hsl(349, 71%, 52%)';
  } else if(elements[index].element === 'scissors'){
     houseimg.style.border = '20px solid hsl(39, 89%, 49%)';
  }

  if(rockvariable === 'rock' && elements[index].element === 'paper'){
     console.log("Ai pierdut bossulica");
     mesage = "YOU LOST";
     scoreplay.innerHTML = Score;
  }

  if(rockvariable === 'rock' && elements[index].element === 'rock'){
     console.log("IEGALITATE");
     mesage = "IT'S A TIE";
     scoreplay.innerHTML = Score;
  }

  if(rockvariable === 'rock' && elements[index].element === 'scissors'){
     console.log("Ai castigat bossulica");
     mesage = "YOU WON";
     Score = Score + 1;
     scoreplay.innerHTML = Score;
  }

  console.log(Score);

  playtext.innerHTML = mesage;
});

scissors.addEventListener('click',function(e){
   let flexchose = document.querySelector('.flex-chose');
   let flexplay = document.querySelector('.flex-play');
   let playtext = document.querySelector('.play-text');
   let playimg = document.getElementById('player-img');
   let playercolor = document.querySelector('.player-img');
   playercolor.style.border = '20px solid hsl(39, 89%, 49%)';
   playimg.src = this.src;
   let mesage;
   e.preventDefault();
   let scissorsvariable = this.dataset.id;
   console.log("Clicked!");
   console.log(scissorsvariable);
   flexchose.style.display = 'none';
   flexplay.style.display = 'flex';
   playagain.addEventListener('click',function(){
    flexchose.style.display = 'flex';
    flexplay.style.display = 'none';
 });

 let index = Math.floor(Math.random() * elements.length)
 console.log(elements[index]);
 let playerimg = document.getElementById('rock-img');
 let houseimg = document.querySelector('.house-img');
 playerimg.src = elements[index].img;

 if(elements[index].element === "paper"){
    houseimg.style.border = '20px solid hsl(230, 89%, 62%)';
 } else if(elements[index].element === 'rock'){
    houseimg.style.border = '20px solid hsl(349, 71%, 52%)';
 } else if(elements[index].element === 'scissors'){
    houseimg.style.border = '20px solid hsl(39, 89%, 49%)';
 }

 if(scissorsvariable === 'scissors' && elements[index].element === 'paper'){
    console.log("Ai castigat bossulica");
    mesage = "YOU WON";
    Score = Score + 1;
    scoreplay.innerHTML = Score;
 }

 if(scissorsvariable === 'scissors' && elements[index].element === 'rock'){
    console.log("Ai pierdut bossulica");
    mesage = "YOU LOST";
    scoreplay.innerHTML = Score;
 }

 if(scissorsvariable === 'scissors' && elements[index].element === 'scissors'){
    console.log("Egalitate");
    mesage = "IT'S A TIE";
    scoreplay.innerHTML = Score;
 }

 playtext.innerHTML = mesage;
});
