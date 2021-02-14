//set the destination date
let dest = new Date('June 15, 2021 00:00:00').getTime();

function countTime() {
  //get current time
  let current = new Date().getTime();

  //get the difference between destination and current time
  let diff = dest - current;

  let sec = 1000;
  let mins = sec * 60;
  let hour = mins * 60;
  let day = hour * 24;

  //Algorithms to calculate days,hours,minutes and seconds
  const d = Math.floor(diff / day);
  const h = Math.floor((diff % day) / hour);
  const m = Math.floor((diff % hour) / mins);
  const s = Math.floor((diff % mins) / sec);

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;

  //if the time is 0 or below, stop counting
  if (diff <= 0) {
    clearInterval(countTime);
    document.getElementById('countdown').innerHTML = '';
  }
}

setInterval(function () {
  countTime();
});
