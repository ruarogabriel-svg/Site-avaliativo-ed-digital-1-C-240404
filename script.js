function scrollToSection() {
  document.getElementById("fifa").scrollIntoView({
    behavior: "smooth"
  });
}

function calcularSkill() {
  let skill = document.getElementById("skill").value;
  let texto = "";

  if (skill < 30) texto = "Iniciante ⚽";
  else if (skill < 70) texto = "Intermediário 🔥";
  else texto = "Pro Player 🏆";

  document.getElementById("resultado").innerText = texto;
}

function resposta(jogo) {
  document.getElementById("quizResultado").innerText =
    "Você escolheu: " + jogo;
}

/* animação */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
