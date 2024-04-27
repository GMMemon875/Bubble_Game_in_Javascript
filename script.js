var TimeUpade = 60;

var scoureIncress = 0;

function score() {
  addEventListener("click", function () {
    scoureIncress += 10;
    document.querySelector("#GetScoure").textContent = scoureIncress;
  });
}

function hit() {
  var RandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#HitNumber").textContent = RandomNumber;
}

function makBubble() {
  var bubbleBox = "";

  for (var i = 1; i <= 100; i++) {
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
    }
  }, 1000);
}
hit();
setTime();
makBubble();
