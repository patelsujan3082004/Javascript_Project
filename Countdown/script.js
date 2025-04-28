let countDownDate = new Date("August 30, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);











































// const targetDate = new Date("2025-05-01T00:00:00").getTime();

// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minutesEl = document.getElementById('minutes');
// const secondsEl = document.getElementById('seconds');

// function updateCountdown() {
//   const now = new Date().getTime();
//   const gap = targetDate - now;

//   if (gap <= 0) {
//     document.getElementById('timer').innerHTML = "Countdown Finished!";
//     clearInterval(timerInterval);
//     return;
//   }

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(gap / day);
//   const hours = Math.floor((gap % day) / hour);
//   const minutes = Math.floor((gap % hour) / minute);
//   const seconds = Math.floor((gap % minute) / second);

//   daysEl.innerText = days.toString().padStart(2, '0');
//   hoursEl.innerText = hours.toString().padStart(2, '0');
//   minutesEl.innerText = minutes.toString().padStart(2, '0');
//   secondsEl.innerText = seconds.toString().padStart(2, '0');
// }

// // Update every second
// const timerInterval = setInterval(updateCountdown, 1000);

// // Initial call
// updateCountdown();
