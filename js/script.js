// Menyiapkan Canvas
const test = document.querySelector("#test");

// Mengatur ukuran Canvas
test.width = window.innerWidth;
test.height = window.innerHeight;

// Tentukan Context
const c = test.getContext('2d');

// Manipulasi Canvas

// Kotak
c.fillStyle = "cyan";
c.strokeStyle = "#999"
c.lineWidth = "1";

c.rect(50, 50, 150, 150);
c.fill();
c.stroke();

// Path (Segitiga)
c.fillStyle = "yellow";
c.beginPath();
c.moveTo(200, 250);
c.lineTo(300, 400);
c.lineTo(100, 400);

// Manual dan Auto
// c.lineTo(200, 250);
c.closePath();

let x = 320;
let y = 125;
let speedX = 2;
let speedY = 2;
let radius = 50;

// Animasi Canvas
function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    // console.log("ok");

    // Lingkaran
    c.fillStyle = "magenta";
    c.beginPath();

    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    c.fill();
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        speedX = -speedX;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        speedY = -speedY;
    }

    x += speedX;
    y += speedY;
}

animate();