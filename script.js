const outHr = document.getElementById('Hr')
const outMin = document.getElementById('Min')
const outSec = document.getElementById('Sec')
const outMil = document.getElementById('Mil')
const outDay = document.getElementById('Day')

const updateTime = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const milliseconds = currentTime.getMilliseconds()

    const hr = Math.floor(hours) < 10 ? '0' + Math.floor(hours) : Math.floor(hours)
    const min = Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) : Math.floor(minutes)
    const sec = Math.floor(seconds) < 10 ? '0' + Math.floor(seconds) : Math.floor(seconds)
    const mil = Math.floor(milliseconds / 10) < 10 ? '0' + Math.floor(milliseconds / 10) : Math.floor(milliseconds / 10)

    const day = hr >= 12 && min > 0 ? 'PM' : 'AM'


    outHr.textContent = hr
    outMin.textContent = min
    outSec.textContent = sec
    outMil.textContent = mil
    outDay.textContent = day

    const time = setInterval(updateTime, 1000)

}

updateTime()