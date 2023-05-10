import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const calendar = document.getElementById(`datetime-picker`);
const startBtn = document.querySelector(`[data-start]`);
const timer = document.querySelector(`.timer`);
const fields = document.querySelectorAll(`.field`);
const days = document.querySelector(`[data-days]`);
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector(`[data-seconds]`);
startBtn.setAttribute(`disabled`, true);
timer.style.display = "flex";
fields.forEach(field =>{
    field.style.display = "flex";
    field.style.flexDirection ="column";
    field.style.margin ="5px";
    field.style.textAlign ="center";
})
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = options.defaultDate;
        const chosenDate = selectedDates[0];
        if(chosenDate < currentDate){
            Notiflix.Notify.failure('Please choose a date in the future');
        }else{
            startBtn.removeAttribute(`disabled`, true);
            console.log(chosenDate.getTime());
            console.log(currentDate.getTime());
            startBtn.addEventListener('click', startCounter);
             function startCounter(){
                const countdownTime = chosenDate.getTime() - currentDate.getTime();
                const { days: countdownDays, hours: countdownHours, minutes: countdownMinutes, seconds: countdownSeconds,} = convertMs(countdownTime) ;
                console.log(convertMs(countdownTime));
                days.textContent = countdownDays;
                hours.textContent = countdownHours;
                minutes.textContent = countdownMinutes;
                seconds.textContent = countdownSeconds;

            }
        }
        
    },
   
  };
  
  
flatpickr(calendar, options)