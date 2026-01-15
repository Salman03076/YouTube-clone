const angle = { sec: 0, min: 0, hour: 0 };

function transition() {
  document.getElementById("Pin_seconds").style.transform = `rotate(${angle.sec}deg)`;
  document.getElementById("Pin_times").style.transform = `rotate(${angle.min}deg)`;
  document.getElementById("Pin_hours").style.transform = `rotate(${angle.hour}deg)`;
  // angle.sec++;
  angle.min = Math.ceil((angle.min++)/60);
  angle.hour = Math.ceil((angle.hour++)/3600);
  console.error(angle)
  reset(angle, "sec");
  reset(angle, "min");
  reset(angle, "hour");
}
function reset(obj, element) {
  if (Math.floor(obj[element]) === 360) {
    obj[element] = 0;
  }  
}

function current_rotate() {
  setInterval(() => {
    transition();
  }, 1);
}

current_rotate();
