// Ativa os plugins do dayjs
dayjs.extend(dayjs_plugin_duration);
dayjs.extend(dayjs_plugin_customParseFormat);

function clicou() {
  const overlay = document.getElementById("overlay");

  let musica = document.getElementById("musica");
  if (!musica) {
    musica = document.createElement("audio");
    musica.id = "musica";
    musica.src = "musica/lisboa.mp3";
    musica.loop = true;
    document.body.appendChild(musica);
  }

  musica.addEventListener(
    "loadedmetadata",
    () => {
      musica.currentTime = 81; // Começa em 1:21
      musica.play();
    }
  );

  if (musica.readyState >= 1) {
    musica.currentTime = 81;
    musica.play();
  }

  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}


// Corações caindo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤍";
  document.body.appendChild(heart);

  const left = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2;

  heart.style.left = `${left}px`;
  heart.style.animationDuration = `${duration}s`;

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 300);

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000 },
  });
});

// Contador com Day.js
const contador = document.querySelector(".contador");

function atualizarContador() {
  const dataInicial = dayjs("2024-10-05T00:00:00");
  const agora = dayjs();
  const diffMs = agora.diff(dataInicial);
  const duracao = dayjs.duration(diffMs);

  const anos = Math.floor(duracao.asYears());
  const meses = duracao.months();
  const dias = duracao.days();
  const horas = duracao.hours();
  const minutos = duracao.minutes();
  const segundos = duracao.seconds();

  const partes = [];
  if (anos) partes.push(`${anos} ano${anos > 1 ? "s" : ""}`);
  if (meses) partes.push(`${meses} mês${meses > 1 ? "es" : ""}`);
  if (dias) partes.push(`${dias} dia${dias > 1 ? "s" : ""}`);
  if (horas) partes.push(`${horas} hora${horas > 1 ? "s" : ""}`);
  if (minutos) partes.push(`${minutos} minuto${minutos > 1 ? "s" : ""}`);
  if (segundos) partes.push(`${segundos} segundo${segundos > 1 ? "s" : ""}`);

  contador.textContent = partes.join(", ");
}

setInterval(atualizarContador, 1000);
atualizarContador();
