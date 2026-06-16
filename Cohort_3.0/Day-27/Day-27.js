// * This is a example of event delegations

// let main = document.querySelector("main")
// let five = document.querySelector("#btn-5")

// five.addEventListener("click",()=>{    //? yeha per ham five ko select kiye but kya hamae pass 1000 btn hoge too 1000 ko id deke select karege kya uski jagh ham parents pe event  laga ke sae child ko access kar sakte hai
//     console.log("five btn click ")
// })

// main.addEventListener("click",(e)=>{
//     console.log("Target:", e.target)
// })

//  *Lets make a mini poject

// ? selection element

let boxWrapper = document.querySelector(".box-wrapper");
let startBtn = document.querySelector("button");
let timer = document.querySelector("#timer");
let score = document.querySelector("#score");
let gameOver = document.querySelector(".Game-over");
let timeSpan = document.querySelector(".timeSpan");

let box = document.createElement("div");
box.classList.add("box");

let timeInteval;
let gameTimeout;
let time = 0;
let scorevalue = 0;

startBtn.addEventListener("click", () => {
  time = 0;
  //   timeSpan.textContent = 0;
  clearInterval(timeInteval);

  timeInteval = setInterval(() => {
    boxWrapper.append(box);

    let mainWidth = boxWrapper.clientWidth;
    let mainHeight = boxWrapper.clientHeight;

    let topRandom = Math.random() * (mainHeight - box.clientHeight);
    let leftRandom = Math.random() * (mainWidth - box.clientWidth);
    box.style.top = `${topRandom}px`;
    box.style.left = `${leftRandom}px`;

    time += 1;
    timeSpan.textContent = time;
  }, 1000);

  clearTimeout(gameTimeout);

  gameTimeout = setTimeout(() => {
    clearInterval(timeInteval);
    gameOver.style.display = "flex";
    box.remove();

    setTimeout(() => {
      gameOver.style.display = "none";
      timeSpan.textContent = 0;
    }, 4000);
  }, 10000);
});

box.addEventListener("click", () => {
  scorevalue += 1;
  score.textContent = `Score - ${scorevalue}`;
});
