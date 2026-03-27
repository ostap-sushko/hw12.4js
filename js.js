const dayRef = document.querySelector(".day")




const id = setInterval(() => {
  const date = new Date();
  const time = new Date(2026, 3, 28);
  const num = time-date
    const days = Math.floor(num / (1000 * 60 * 60 * 24));

const hours = Math.floor((num % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


const mins = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60));


const seconds = Math.floor((num % (1000 * 60)) / (1000));


dayRef.textContent= `${days < 10 ? "0" + days : days}:${hours < 10 ? "0" + hours : hours}:${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`

if (num < 0) {
  clearInterval(id)

  return;
}

}, 1000)
