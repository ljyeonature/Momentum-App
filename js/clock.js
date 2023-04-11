const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
// 바로 시간을 볼 수 있음 없을 때, 1초 뒤 시간이 표시
getClock()
setInterval(getClock, 1000);