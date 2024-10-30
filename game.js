// Turtle position in grid coordinates
let turtleX = 0; // Turtle's x-coordinate on the new grid (-3 to 6)
let turtleY = 0; // Turtle's y-coordinate on the new grid (-3 to 6)

// Rubbish position in grid coordinates (set randomly)
let rubbishX = Math.floor(Math.random() * 10) - 3; // Random x between -3 and 6
let rubbishY = Math.floor(Math.random() * 10) - 3; // Random y between -3 and 6

// Move elements on the grid
const turtle = document.getElementById("turtle");
const rubbish = document.getElementById("rubbish");

// Position display elements
const turtlePositionDisplay = document.getElementById("turtle-position");
const rubbishPositionDisplay = document.getElementById("rubbish-position");

// Function to convert grid coordinates to pixel coordinates
function gridToPixelX(gridX) {
    return (gridX + 3) * 40; // Remap x: -3 to 6 -> 0px to 360px
}

function gridToPixelY(gridY) {
    return (6 - gridY) * 40; // Remap y: -3 to 6 -> 360px to 0px
}

// Function to update positions in the DOM
function updatePositionDisplays() {
    turtlePositionDisplay.textContent = `(${turtleX}, ${turtleY})`;
    rubbishPositionDisplay.textContent = `(${rubbishX}, ${rubbishY})`;
}

// Place rubbish at random coordinates
rubbish.style.left = `${gridToPixelX(rubbishX)}px`;
rubbish.style.top = `${gridToPixelY(rubbishY)}px`;

// Initial update of positions
updatePositionDisplays();

// Function to update turtle's position
function updateTurtlePosition() {
    turtle.style.left = `${gridToPixelX(turtleX)}px`;
    turtle.style.top = `${gridToPixelY(turtleY)}px`;

    // Update the turtle's position display
    updatePositionDisplays();

    // Check if turtle collects rubbish
    if (turtleX === rubbishX && turtleY === rubbishY) {
        alert("Turtle collected the rubbish!");
        // Move the rubbish to a new random position
        rubbishX = Math.floor(Math.random() * 10) - 3;
        rubbishY = Math.floor(Math.random() * 10) - 3;
        rubbish.style.left = `${gridToPixelX(rubbishX)}px`;
        rubbish.style.top = `${gridToPixelY(rubbishY)}px`;
        // Update the rubbish position display
        updatePositionDisplays();
    }
}

// Event listeners for button controls
document.getElementById("move-left").addEventListener("click", function() {
    if (turtleX > -3) {
        turtleX -= 1; // Move left by 1 grid unit
        updateTurtlePosition();
    }
});

document.getElementById("move-right").addEventListener("click", function() {
    if (turtleX < 6) {
        turtleX += 1; // Move right by 1 grid unit
        updateTurtlePosition();
    }
});

document.getElementById("move-up").addEventListener("click", function() {
    if (turtleY < 6) {
        turtleY += 1; // Move up by 1 grid unit
        updateTurtlePosition();
    }
});

document.getElementById("move-down").addEventListener("click", function() {
    if (turtleY > -3) {
        turtleY -= 1; // Move down by 1 grid unit
        updateTurtlePosition();
    }
});
