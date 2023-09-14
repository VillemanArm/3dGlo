const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours')
    const timerMinutes = document.querySelector('#timer-minutes')
    const timerSeconds = document.querySelector('#timer-seconds')

    const getSecondsRemaining = (deadline) => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000

        return timeRemaining        
    }
    
    const getTimeRemaining = () => {
        let timeRemaining = getSecondsRemaining(deadline)
        let hours = Math.floor(timeRemaining / 60 / 60 )
        let minutes = Math.floor(timeRemaining / 60 % 60)
        let seconds = Math.floor(timeRemaining % 60)
    
        return { timeRemaining, hours, minutes, seconds, }

    }

    const formatTime = time => {
        if (time <= 0) return '00';
        else if (time < 10 && time > 0) return '0' + time;
        else return time;
    }
    
    const updateClock = () => {
        let currentTime = getTimeRemaining()

        timerHours.textContent = formatTime(currentTime.hours)
        timerMinutes.textContent = formatTime(currentTime.minutes)
        timerSeconds.textContent = formatTime(currentTime.seconds)
    }
    
    let idInterval = setInterval(() => {
        let secondsRemaining = getSecondsRemaining(deadline)
        if (secondsRemaining <= 1) {
            clearInterval(idInterval)
        }
        updateClock()    
    }, 1000)

}

export default timer