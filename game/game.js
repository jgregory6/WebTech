// Consider one click
// before click:
// 1. generate a random shape:
//    1. random position: 
//         set left and top to be random integers
//    2. random size: set height and width to be random
//    3. random color: 
//    4. circle or square
// 2. get the start time


// once user clicks - onclick 
// 1. get end time
// 2. duration = end - start
// 3. display the duration
//       get the span (#timeTaken), use innerText to show the duration
// 4. make the shape disappear
//        set .style.display="none"
// 5. create another randome shape
//       set a random delay


// How to start the game

let start = new Date().getTime();

const shape = document.getElementById("shape");

document.querySelector('body').onload = game;

function game(){

}

shape.onclick = showReaction;

function showReaction(){

}
