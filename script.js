let monthName = document.getElementById('month-name');
let dayName = document.getElementById('day-name');
let dayNumber = document.getElementById('day-number');
let yearEl = document.getElementById('year');

let date = new Date();
let month = date.getMonth();
monthName.innerText = date.toLocaleDateString('en',{
  month:'long'
})

dayName.innerText = date.toLocaleDateString('en',{
  weekday:'long'
})

dayNumber.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

