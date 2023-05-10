import Notiflix from "notiflix";
const form = document.querySelector(".form");
const  delayInput = document.querySelector(`[name="delay"]`);
const stepInput = document.querySelector(`[name="step"]`);
const  amountInput = document.querySelector(`[name="amount"]`)
form.addEventListener("submit", launch);
function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position, delay})
      }
    }, delay)
   
  });
}
function launch(event){
  event.preventDefault();
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);
  for (let position = 1; position <= amount; position += 1) {
   
    createPromise(position, delay + step * (position - 1))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  form.reset(); 
}
