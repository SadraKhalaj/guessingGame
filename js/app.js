const form = document.querySelector("#form");
const userNumber = document.querySelector("#userNumber");
const randomNr = Math.floor(Math.random() * 100);
const chancePlace = document.querySelector("#chancePlace");

console.log(randomNr);

let chance = 5;

chancePlace.innerText = chance;

form.addEventListener("submit", (e) => {
  const userEnteredNumber = e.target.userNumber.value;
  chance -= 1;
  chancePlace.innerText = chance;

  if (chance >= 0) {
    if (userEnteredNumber > randomNr) {
      alert("Your number is bigger.");
    } else if (userEnteredNumber < randomNr) {
      alert("Your number is smaller.");
    } else if (userEnteredNumber == randomNr) {
      alert("You won!");
      return;
    }
  }

  if (chance === 0 && userEnteredNumber !== randomNr) {
    alert("You lose. No more chances left!");
  }

  e.preventDefault();
});
