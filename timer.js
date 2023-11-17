function myCallback() {
    
    // Function to convert time string to minutes
    function timeToMinutes(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Function to convert minutes back to time string
    function minutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    }

    // Retrieve the logged time
    const loggedTimeElement = document.querySelector('.total_logged_time_timesheets_staff_h');
    const loggedTime = loggedTimeElement.textContent.replace('Total Logged Time:', '').trim();

    // Office required time
    const officeRequiredTime = '08:15';

    // Get the current time
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Calculate the remaining time in the office
    const remainingTimeInMinutes = timeToMinutes(officeRequiredTime) - timeToMinutes(loggedTime);

    // Check if current time is before 13:30 (1:30 PM)
    const lunchBreakTime = '13:30';
    if (timeToMinutes(currentTime) < timeToMinutes(lunchBreakTime)) {
        // Add 1 hour (60 minutes) for lunch break
        remainingTimeInMinutes += 60;
    }

    // Calculate the time you can leave the office
    const leaveTimeInMinutes = timeToMinutes(currentTime) + remainingTimeInMinutes;
    const leaveTime = minutesToTime(leaveTimeInMinutes);

    // Alert the leave time
    alert(`Productivity Tracker: Next Phase at ${leaveTime}`);
}

myCallback();
