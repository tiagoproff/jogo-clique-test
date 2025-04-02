let score = 0;

const scoreDisplay = document.querySelector("#score-display");
const button = document.querySelector("#button-add-click");
const MAX_SCORE = 999;
const SCORE_ANIMATION_DURATION = 0.8;

scoreDisplay.style.setProperty(
  "--score-animation-duration",
  `${SCORE_ANIMATION_DURATION}s`
);

button.addEventListener("click", () => {
  if (score < MAX_SCORE) {
    scoreDisplay.style.setProperty("--score", `"${formatScore(score)}"`);
    scoreDisplay.textContent = formatScore(++score);
    button.setAttribute("disabled", "disabled");

    animeScore();

    return;
  }

  scoreDisplay.textContent = `+${MAX_SCORE}`;

  console.log(score);
});

function formatScore(score) {
  return score.toString().padStart(3, "0");
}

function animeScore() {
  scoreDisplay.classList.add("updated");

  setTimeout(() => {
    scoreDisplay.classList.remove("updated");
    button.removeAttribute("disabled");
  }, SCORE_ANIMATION_DURATION * 1000);
}
