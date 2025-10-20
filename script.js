const text = `С Днём Рождения, моя любимая Ажар!
Каждый день с тобой — как маленькое чудо.
Спасибо за тепло, за улыбку, за свет, который ты приносишь в мою жизнь.
Пусть этот день будет наполнен любовью, радостью и самыми добрыми моментами.
Я люблю тебя безмерно 💖.`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.8 + 0.2
  };
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 75, 110, 0.8)";
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - h.size, h.y - h.size, h.x - h.size, h.y + h.size, h.x, h.y + h.size);
    ctx.bezierCurveTo(h.x + h.size, h.y + h.size, h.x + h.size, h.y - h.size, h.x, h.y);
    ctx.fillStyle = `rgba(255, 75, 110, ${h.opacity})`;
    ctx.fill();
    h.y += h.speed;
  });
  hearts = hearts.filter(h => h.y < canvas.height);
  if (Math.random() < 0.05) hearts.push(createHeart());
  requestAnimationFrame(drawHearts);
}
drawHearts();

