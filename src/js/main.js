const toggle = document.getElementById("themeToggle");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
  toggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  toggle.checked = false;
}

toggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark");
});
ز;

const resultEl = document.getElementById("result");

function fill(value) {
  resultEl.textContent += value;
}

function reset() {
  resultEl.textContent = "";
}

function dlec() {
  resultEl.textContent = resultEl.textContent.slice(0, -1);
}

function final() {
  try {
    const expression = resultEl.textContent;
    if (/^[\d+\-*/%.() ]+$/.test(expression)) {
      resultEl.textContent = eval(expression);
    } else {
      resultEl.textContent = "error";
    }
  } catch {
    resultEl.textContent = "error";
  }
}

function handleButton(selector, callback) {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.addEventListener("click", callback);
    btn.addEventListener("touchstart", callback, { passive: true });
  });
}

handleButton(".item", (e) => {
  fill(e.target.value);
});

handleButton("input[value='AC']", () => reset());

handleButton("input[value='C']", () => dlec());

handleButton("input[value='=']", () => final());

