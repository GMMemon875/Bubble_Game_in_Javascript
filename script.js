var TimeUpade = 60;
var RandomNumber = "";
var scoureIncress = 0;
var lose = 0;

function score() {
  scoureIncress += 10;
  document.querySelector("#GetScoure").textContent = scoureIncress;
}

function hit() {
  RandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#HitNumber").textContent = RandomNumber;
}

function makBubble() {
  var bubbleBox = "";

  for (var i = 1; i <= 140; i++) {
    let number = Math.floor(Math.random() * 10);
    bubbleBox += `<div class="bubble">${number}</div>`;
  }

  document.querySelector(".downcantainer").innerHTML = bubbleBox;
}

function setTime() {
  var timeClear = setInterval(() => {
    if (TimeUpade > 0) {
      TimeUpade--;
      document.querySelector("#Timer").textContent = TimeUpade;
    } else {
      clearInterval = timeClear;
      document.querySelector(
        "#hitElement"
      ).innerHTML = `<div><h1>Game Over <br> Total Score ${scoureIncress}</h1></div> <br><br> <button onclick="window.location.reload()"  style="background-color: green; color: white; font-size: 10px; padding: 7px 15px; border: none; border-radius: 5px;"> <h1> Game Refresh </h1></button>`;
    }
  }, 1000);
}
document
  .querySelector("#hitElement")
  .addEventListener("click", function (detail) {
    var getNumber = Number(detail.target.textContent);
    if (getNumber === RandomNumber) {
      score();
      hit();
      makBubble();
    } else {
      //   losescore();
    }
  });
hit();
setTime();
makBubble();
