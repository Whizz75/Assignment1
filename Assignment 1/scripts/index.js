const buttons = document.querySelectorAll('.buy-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    btn.textContent = "Purchased";
    btn.classList.add('purchased');
    btn.disabled = true;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const likeCounter = document.getElementById("likeCounter");

  likeBtn.addEventListener("click", () => {
    let currentLikes = parseInt(likeCounter.textContent);
    likeCounter.textContent = currentLikes + 1;
  });
});

