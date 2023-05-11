 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
btnStop.setAttribute(`disabled`, true);
let colorTimer = null;
btnStart.addEventListener("click", colorChanger);
btnStop.addEventListener("click", colorChangerStop)
function colorChanger(){
  btnStop.removeAttribute(`disabled`, true);
  btnStart.setAttribute(`disabled`, true);
  getRandomHexColor();
 colorTimer = setInterval(()=>{ 
  body.style.backgroundColor = `${getRandomHexColor()}`;
}, 1000);
}
function colorChangerStop(){
  btnStart.removeAttribute(`disabled`, true);
  btnStop.setAttribute(`disabled`, true);
  clearInterval(colorTimer);
}