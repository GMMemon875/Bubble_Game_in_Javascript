var TimeUpade = 60; // varibale step 10 ka Time Update varibale
var RandomNumber = ""; // randomNumber step 14 wala pahly Empty rahe ga Q ke is men wo hit wala random number save hoga
var scoureIncress = 0; // ScoreIncress step 17 ye wala varible byDeafly 0 rahe ga Q ke Ye score he click per incress hoga
// var lose = 0;

function score() {
  // step 16 => mani score ko increes karni ke lei ek narmal function banaya jo ke sahe jawab per 10 score ko increes karega
  scoureIncress += 10; // step 17 => scoureIncres men mani save keya
  document.querySelector("#GetScoure").textContent = scoureIncress; // step 18 => mani ScoreIncrees ko Dom ke help se Front per show keya
}

function hit() {
  // step 13 => men mani ji hit karna he number wo ganrate karna he wo funtion banaya
  RandomNumber = Math.floor(Math.random() * 10); // step 14 => men mani ek same tarekhe se random number ganrate keya jo ke 10 se matlble hota he
  document.querySelector("#HitNumber").textContent = RandomNumber; // step 15 => is mani random number ko save keya our randomNumber men save keya our wo DOM ke help se mani front per display keya
}

function makBubble() {
  var bubbleBox = "";

  for (var i = 1; i <= 140; i++) {
    // step 1 => pahly ham create karengi ek loop jis men ham jo bubbles hen sab ko display karen gi 140 bubble ham ne loop kehelp se bananaie hen
    let number = Math.floor(Math.random() * 10); // step 2 => fer ham ek random number genrate karengi gi our us number ko math.floor ke help se 1 se number 10 tak banaie gi is lei ham ni multiply keya he 10 se
    bubbleBox += `<div class="bubble">${number}</div>`; // step 3 fer ham ni DOM ke help se Html div ko acses keya our fer us men random number ko daal deya
  }

  document.querySelector(".downcantainer").innerHTML = bubbleBox; // step 4 => pahly ham ni uper wale bubble ko ek variable men save keya bubblebox men fer us ko  ham ko DOM ke help se is ko fronte page per display karwaya
}

function setTime() {
  // step 5 moje time ko update karana he is lei mani ek function banaya he setTime ke name se
  var timeClear = setInterval(() => {
    // step 6 => function men mani timeClear ke name is ek setInterval banaya he jo ke har 1 secand ke bad function ko chalaie he callback function he ye
    if (TimeUpade > 0) {
      // step 10 => ab  jab time 0 ho jaie ga tab be ye setinterval wala function chale ga is ko hatani ke lei matlb  per stop karni ke lei ham ni if else condition lagaie he take jab time 0 ho jaie to function stop ho jaie is condition men ham ye chek kar rahe hen ke jab timer ke value 0 ho jaie to function chalauo
      TimeUpade--; // step 7=> TimeUpade men jo mani uper ek varibale banaya he jis men mani 60 secand ka timer lagaya he bs ye function un 60 secand ko har ek setinterval function se -- karta jaie ga
      document.querySelector("#Timer").textContent = TimeUpade; // step 8 => mani DOM ke ke help se TimeUpade ko Front pe dekhaya
    } else {
      // step 11 => agr time ke value 0 ho gaie to ye else condition chale
      clearInterval = timeClear; // step 12 => men ham ye dekh rahe hen ke fer se restart se function chalauo
      document.querySelector(
        // step 13 => is men ham ye kah rahe he ke fer ye sab InnerHtml men statment chale jis men Total scor ho button ho thats it
        "#hitElement"
      ).innerHTML = `<div><h1>Game Over <br> Total Score ${scoureIncress}</h1></div> <br><br> <button  onclick="window.location.reload()"  style="background-color: green; color: white; font-size: 10px; padding: 7px 15px; border: none; border-radius: 5px; cursor: pointer;"> <h1> Game Refresh </h1></button>`;
    }
  }, 1000); // step 9 =>  step 7 men jo mani setinterval banaya ye 1 secand time lagaya 1000 matlb 1 secand
}

// ------------------------ab ye Step thora samjna hoga ----------------
// ab dekho hamre game men 140 bubbles hen ab kis per click ho ha he wo ham ki kese pata chale ga to ek treaka hota he addEvenetLinser ka per is men code bhot zeyada ho jaie ge ga Q ke ham ki 140 bubble ko adeventlesner lagana hoga to is probleam ho solve karni ke lei event Bubling karna hoga
// event bubling karna hoga to hamre game men 140 bubble hen ab hamre bubble ke parents per event lagaien ge ye event keya karta he ke ye dhonta ta he ke mere kon se jagha per click hoa he matlb parents child per dekhhe ga ab bubble ka parents keya he wo wite space jo peche he
// ab neche dekho kese
document
  .querySelector("#hitElement")
  .addEventListener("click", function (detail) {
    // step 19 => men ham ek function banaien ge click adeventlesner our us men ek perameter matlb ek varibale datial ke name se pass kar len ge
    var getNumber = Number(detail.target.textContent); // step 20 => fer ham us detail ko . target se target karengi to ham ko wo pora div target kar ke dega per ham ko to un der wale value match karwani he to ham . textContant karengi to ham ko wo value mil jaie ge jis ko hm ni click keya hoga fer us ko ham getNumber men save karegi
    if (getNumber === RandomNumber) {
      // step 21 => fer hm us number ko us randomNumber se match karengi  getNumber se
      score(); // step 22=> jab match ho jaien ge to score Incress hoga
      hit(); // step 23 => fer ye hit wala function be Update hoga
      makBubble(); // step 24 => fer dosre Bubbale be bani ke
    } else {
      //   losescore();
    }
  });
hit(); // step 25 => agr match na ho a number to hit function he ubdate hoga
setTime(); // step 26 => jo time he wo be update hoga
makBubble(); // step27 = > dosre bubbles be bani gen
