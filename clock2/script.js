const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

let correctHour, correctMinute;
let spinning = false;
let spinInterval;

const updateTime = () => {
    // Get current time and calculate degrees for clock hands
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;
    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};
// setInterval(updateTime, 1000);
// updateTime();

function randomizeClock() {
    correctHour = Math.floor(Math.random() * 12);
    correctMinute = Math.floor(Math.random() * 60);

    const hourDegree = (correctHour % 12) * 30 + (correctMinute / 60) * 30;
    const minuteDegree = correctMinute * 6;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
}

function checkTime() {
    const userHour = parseInt(document.getElementById('hour-input').value);
    const userMinute = parseInt(document.getElementById('minute-input').value);
    const result = document.getElementById('result');

    // Дозволяємо похибку ±2 хвилини
    const minuteTolerance = 2;

    if (userHour === correctHour && Math.abs(userMinute - correctMinute) <= minuteTolerance) {
        result.textContent = "Правильно!";
        result.style.color = "green";
        result.style.opacity = '100%';
    } else {
        result.textContent = `Неправильно. Правильний час: ${correctHour} годин і ${correctMinute} хвилин.`;
        result.style.color = "red";
        result.style.opacity = '100%';
    }

    // Після перевірки, оновлюємо годинник
    randomizeClock();
}

function spinClock() {
    if (spinning) return; // Якщо годинник вже крутиться, не запускати знову
    spinning = true;
    let hourDegree = 0;
    let minuteDegree = 0;

    spinInterval = setInterval(() => {
        minuteDegree += 6;
        if (minuteDegree % 360 === 0) {
            hourDegree += 30;
        }

        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

        const hours = Math.floor(hourDegree / 30) % 12;
        const minutes = Math.floor(minuteDegree / 6) % 60;

        document.getElementById('current-time').textContent = `Поточний час: ${hours} годин і ${minutes} хвилин`;

        if (minuteDegree === 360) {
            minuteDegree = 0;
        }
        if (hourDegree === 360) {
            hourDegree = 0;
        }
    }, 1000); // Зміна положення кожної секунди
}

// Початкова ініціалізація
randomizeClock();
