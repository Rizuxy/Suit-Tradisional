function batuMove () {
  playGame('Batu');
}

function guntingMove () {
  playGame('Gunting');
}

function kertasMove () {
  playGame('Kertas');
}

function playGame (playerMove){
  const computerMove = pickComputerMove ();
  let result = '';
  if (playerMove === 'Batu') {
    if (computerMove === 'Batu') {
      result = 'Seri';
  }   else if (computerMove === 'Kertas') {
      result = 'Kalah';
  }   else if (computerMove === 'Gunting') {
      result = 'Menang';   
  }   setTimeout(() => {alert(`Kamu Memilih ${playerMove}, Musuh Memilih ${computerMove}, Kamu ${result}`);}, 200);
  updateScore(result);
}
  
  else if (playerMove === 'Gunting') {
      if (computerMove === 'Batu') {
      result = 'Kalah';
  }   else if (computerMove === 'Gunting'){
      result = 'Seri';
  }   else if (computerMove === 'Kertas'){
      result = 'Menang';
  }  setTimeout(() => {alert(`Kamu Memilih ${playerMove}, Musuh Memilih ${computerMove}, Kamu ${result}`);}, 200);
  updateScore(result);
} 
  
  else if (playerMove === 'Kertas') {
     if (computerMove === 'Gunting'){
    result = 'Kalah';
  }   else if (computerMove === 'Kertas') {
    result = 'Seri';
  }
      else if (computerMove === 'Batu'){
    result = 'Menang';
  }   setTimeout(() => {alert(`Kamu Memilih ${playerMove}, Musuh Memilih ${computerMove}, Kamu ${result}`);}, 200);
      updateScore(result);
  }
}


function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove = '';
  if  (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Batu';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Gunting';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Kertas';
  }
  console.log(computerMove);
  return computerMove;
}

let menang = 0;
let seri = 0;
let kalah = 0;

function updateScore(result) {
  if (result === 'Menang') {
    menang++;
    document.getElementById('menang').textContent = menang;
  } else if (result === 'Seri') {
    seri++;
    document.getElementById('seri').textContent = seri;
  } else if (result === 'Kalah') {
    kalah++;
    document.getElementById('kalah').textContent = kalah;
  }
}