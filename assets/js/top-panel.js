function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();
