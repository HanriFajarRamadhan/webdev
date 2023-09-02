const eevee = document.getElementById("eevee");
const pokeball = document.getElementById("pokeball");

function jump() {
  if (eevee.classList != "jump") {
    eevee.classList.add("jump");

    setTimeout(function () {
      eevee.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let eeveeTop = parseInt(window.getComputedStyle(eevee).getPropertyValue("top"));

  let pokeballLeft = parseInt(
    window.getComputedStyle(pokeball).getPropertyValue("left")
  );

  if (pokeballLeft < 50 && pokeballLeft > 0 && eeveeTop >= 140) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
