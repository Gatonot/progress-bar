const progress = document.querySelector('.progress-circle');
const circle = document.querySelector('.progress-circle__circle')
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

const setProgress = (percent) => {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset
}


// settings
const progressValue = document.querySelector('.percent-progress')
setProgress(progressValue.value)

progressValue.addEventListener('input', (event) => {
    if(event.target.value <= 0)  {
        setProgress(0)
        return
    }
    if(event.target.value >= 100) {
        setProgress(100)
        return
    }
    setProgress(event.target.value)
})

const progressHide = document.querySelector('.progress-checkbox__hide input')
progressHide.addEventListener('change', () => progress.classList.toggle('hide'))

const progressAnimate = document.querySelector('.progress-checkbox__animate input')
progressAnimate.addEventListener('change', () => progress.classList.toggle('animate'))
