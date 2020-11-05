// Consider one click
// before click:
// 1. generate a random shape:
//    1. random position:
//         set left and top to be random integers
//    2. random size: set height and width to be random
//    3. random color:
//    4. circle or square
// 2. display this shape
// 3. get the start time

// once user clicks - onclick
// 1. get end time
// 2. duration = end - start
// 3. display the duration
//       get the span (#timeTaken), use innerText to show the duration
// 4. make the shape disappear
//        set .style.display="none"
// 5. create another random shape
//       set a random delay

// How to start the game

let start = new Date().getTime();

const shape = document.getElementById("shape");

document.querySelector("body").onload = game;

function game() {
  makeShape();
}

function makeShape() {
  // 1. generate a random shape:
  //    1. random position:
  //         set left and top to be random integers
  //    2. random size: set height and width to be random
  //    3. random color:
  //    4. circle or square
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const t = Math.random() * (windowHeight - 150 - 150);
  const l = Math.random() * (windowWidth - 150);
  shape.style.top = t + "px";
  shape.style.left = l + "px";

  const side = Math.random() * 100 + 50;
  shape.style.height = side + "px";
  shape.style.width = side + "px";

  shape.style.backgroundColor = generateRandomColor();

  if (Math.random() > 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = "0";
  }

  shape.style.display = "block";
  // 2. get the start time
  start = new Date().getTime();
  console.log(start);
}

shape.onclick = showReaction;

function showReaction() {
  // 1. get end time
  let end = new Date().getTime();

  // 2. duration = end - start
  let duration = (end - start) / 1000;

  // 3. display the duration
  //       get the span (#timeTaken), use innerText to show the duration
  document.getElementById("timeTaken").innerHTML = duration + "s";

  // 4. make the shape disappear
  //        set .style.display="none"
  shape.style.display = "none";

  // 5. create another random shape
  //       set a random delay
  setTimeout(makeShape, Math.random()*2000);
}


function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "RGB(" + r + ", " + g + ", " + b + ")";
  return color;
}