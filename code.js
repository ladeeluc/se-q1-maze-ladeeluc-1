let game = document.getElementById("maze")
let runTime = document.createElement("div")
runTime.setAttribute('id', 'player')
game.append(runTime)

let goTime = {
    x: 9,
    y: 0

}

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


function movingInMaze() { //outer wall

    for (let rows = 0; rows < map.length; rows++) {
        for (let columns = 0; columns < map[rows].length; columns++) {
            //goTime = { x: rows, y: columns } //movement
            if (map[rows][columns] === "W") {
                let wall = document.createElement("div")
                wall.dataset.x = rows
                wall.dataset.y = columns //dataset set name of
                wall.setAttribute("class", "wall")
                game.append(wall)
            }
            if (map[rows][columns] === " ") {
                let empty = document.createElement("div")
                empty.dataset.x = rows
                empty.dataset.y = columns
                empty.setAttribute("class", "empty")
                game.append(empty)



            }
            switch ((map[rows][columns])) {
                case "S":
                    let start = document.createElement("div")
                    start.dataset.x = rows
                    start.dataset.y = columns
                    start.setAttribute("id", "start")
                    game.append(start)
                    start.append(runTime)
                    break;

                case "F":
                    let finish = document.createElement("div")
                    finish.dataset.x = rows
                    finish.dataset.y = columns
                    finish.setAttribute("id", "finish")
                    game.append(finish)
                    break;


            }
        }
        game.append(document.createElement("br"))
    }
}
movingInMaze()

function keyEvent(evt) {
    switch (evt.code) { //regonizes what key was pressed
        case "ArrowDown": //research what it is
            console.log(goTime.x)
            if (
                map[goTime.x + 1][goTime.y] != 'W' && //change a = x, change b = y
                goTime.x + 1 != map.length // needs to look at later??
            ) {
                goTime.x += 1;
            }
            break;
        case "ArrowUp":
            console.log("hi")
            if (
                map[goTime.x - 1][goTime.y] != 'W' &&
                goTime.x - 1 != map.length
            ) {
                goTime.x -= 1;
            }

            break;
        case "ArrowLeft":
            if (
                map[goTime.x][goTime.y - 1] != 'W' &&
                goTime.y - 1 != map.length
            ) {
                goTime.y -= 1;
            }
            break;
        case "ArrowRight":
            if (
                map[goTime.x][goTime.y + 1] != 'W' &&
                goTime.y + 1 != map.length
            ) {
                goTime.y += 1;
            }
            break;

    }

}

document.addEventListener("keydown", keyEvent)


/** ideas to move player through empty space: 
 *1) create array with empty spaces,
 *  loop through white space to 
 * push into  each empty space until until finsh case
 * 
 * 
 * 2)another idea let player move by skipping space to go to next space 
 * if evaluated to be an empty space, need to adjust length issue d/t 
 * corner of maze sharing index at 0 on x and y axis,  need every move to arrow right*/


/* notes from Noel(tutor):pull and adjust where goTime.a and goTime.b - 
think of way to call for it move, from one square to
 another then leave space,never let x and y got to !-1, dwn map length needs to b changed 
 to equal hortizal length for right, arraow right needs to be every space*/

/**rubric for assignment
 * This criterion is linked to a Learning OutcomeMaze and player are displayed on the page, and the player starts on the start square.
3.0 pts
This criterion is linked to a Learning OutcomePlayer can be moved through the maze by arrow keys.
3.0 pts
This criterion is linked to a Learning OutcomePlayer cannot move onto walls or outside of the maze.
3.0 pts
This criterion is linked to a Learning OutcomeUser is notified once the player reaches the finish square (no alert or console.log).
1.0 pts
Total Points: 10.0
 */




/*Sanitize input
//Put data into a data structure
//Alter data into required format */