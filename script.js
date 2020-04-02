let colors = generateRandomColor(6);
let squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
let colorDisplay =  document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numberOfSquares = 6;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate new color
    colors = generateRandomColor(numberOfSquares);
    //pick new color frome array
    pickedColor = pickColor();
    //change color display to match
    colorDisplay.textContent = pickedColor;
    //reset title background
    h1.style.backgroundColor = "steelblue"; 
    //reset message
    messageDisplay.textContent = "";
    //Change reset text
    resetButton.textContent = "New Colors"
    //Change color of squares
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }  
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clikedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clikedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clikedColor);
            h1.style.backgroundColor = clikedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
//This function pick a random number between 1 and the lenght of the array "colors", remove decimal thx to Math.floor, and return a random index within the array.
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColor(num){
    //make an array
    let arr = [];
    //add rgb random colors to array
    for(var i = 0; i < num; i++){
        //getRandom color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};