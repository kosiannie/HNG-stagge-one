//Day update function 
const updateDay = () => { 
    const currentDayValue = document.getElementById('day'); 
 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    const currentDate = new Date(); 
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()]; 
    currentDayValue.textContent = currentDayOfWeek; 
} 
 
//Time update function 
function updateTime() { 
    const currentTimeValue = document.getElementById('time'); 
 
    const current_time = new Date(); 
    const current_time_millie = current_time.getTime(); 
 
    const milliseconds = String(current_time_millie) 
 
    currentTimeValue.textContent = milliseconds; 
} 
 
setInterval(updateTime, 1000); 
 
 
updateTime(); 
 
 
updateDay();