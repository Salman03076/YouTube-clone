//get degree:
const CONSTANTS = {
  deg_in_1_sec: 6,
  hour_deg_in_1_min:0.5,
  total_clock_number:12

};


const seconds_to_deg = (time_in_seconds) => {
  const deg = CONSTANTS.deg_in_1_sec * time_in_seconds;
  return deg % 360;
};

//get current time
let value = () => {
  const date = new Date();
  return {
    sec: seconds_to_deg(date.getSeconds()),
    min: seconds_to_deg(date.getMinutes()),
    hour: ((date.getHours() % CONSTANTS.total_clock_number) *30 ) + (date.getMinutes()*CONSTANTS.hour_deg_in_1_min),
  }; 
};

function transition() {
  const angle = value();

  // Apply rotation
  document.getElementById(
    "secondhands"
  ).style.transform = `rotate(${angle.sec}deg)`;
  document.getElementById(
    "minutsHands"
  ).style.transform = `rotate(${angle.min}deg)`;
  document.getElementById(
    "hoursHands"
  ).style.transform = `rotate(${angle.hour}deg)`;
}

setInterval(transition, 1000);
transition();

/*
echo "# Menual-clock-clone" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Salman03076/Menual-clock-clone.git
git push -u origin main*/