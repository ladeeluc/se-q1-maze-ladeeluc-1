let game = document.getElementById("maze")
let runTime = document.createElement("div")
runTime.setAttribute('id', 'player')
runTime.classList.add("cell")
game.append(runTime)

//let endTime = {
// x: 8,
//y: 20
//}

let goTime = {
    x: 9,
    y: 0

}

let boxTop = 305; //
let boxLeft = 8; //CSS

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
            if (map[rows][columns] === "W") {
                let wall = document.createElement("div")
                wall.dataset.x = rows
                wall.dataset.y = columns //dataset set name of
                wall.setAttribute("class", "wall")
                wall.classList.add("cell")
                game.append(wall)
            }
            if (map[rows][columns] === " ") {
                let empty = document.createElement("div")
                empty.dataset.x = rows
                empty.dataset.y = columns
                empty.setAttribute("class", "empty")
                empty.classList.add("cell")
                game.append(empty)



            }
            switch ((map[rows][columns])) {
                case "S":
                    let start = document.createElement("div")
                    start.dataset.x = rows
                    start.dataset.y = columns
                    start.setAttribute("id", "start")
                    start.classList.add("cell")
                    game.append(start)
                    start.append(runTime)


                    break;

                case "F":
                    let finish = document.createElement("div")
                    finish.dataset.x = rows
                    finish.dataset.y = columns
                    finish.setAttribute("id", "finish")
                    finish.classList.add("cell")
                    game.append(finish)

                    break;


            }
        }
        game.append(document.createElement("br"))
    }
}
movingInMaze()

function keyEvent(evt) {
    switch (evt.code) {
        case "ArrowDown":
            if (
                map[goTime.x + 1][goTime.y] != 'W' &&
                goTime.x + 1 != map.length // needs to look at later??
            ) {
                console.log("  this is correct")
                goTime.x += 1;
                boxTop += 29
            }
            break;
        case "ArrowUp":
            if (
                map[goTime.x - 1][goTime.y] != 'W' &&
                goTime.x - 1 != -1
            ) {
                console.log("   this is correct")
                goTime.x -= 1;
                boxTop -= 29
            }

            break;
        case "ArrowLeft":
            if (
                map[goTime.x][goTime.y - 1] != 'W' &&
                goTime.y - 1 != -1
            ) {
                goTime.y -= 1;
                boxLeft -= 29
            }
            console.log("   this is correct")
            break;
        case "ArrowRight":
            if (
                map[goTime.x][goTime.y + 1] != 'W' &&
                goTime.y + 1 != map[1].length
            ) {
                console.log("  this is correct")
                goTime.y += 1;
                boxLeft += 29
            }
            break;

    }
    document.getElementById("player").style.top = boxTop + "px"; /*pushes down: when + = dwn, when - = pull up*/
    document.getElementById("player").style.left = boxLeft + "px"; //pushes right: when + = push right, when - = pull left
}

document.addEventListener("keydown", keyEvent)




/** notes from Meghan(tutor) get ble box to on red square-means in CSS add top = 200-40 px  and left = 5-10 px, 
 * then two values, needs to make player ht and width same as wall 
 * then JS = var boxtop adn box left needs to match intial values of player top and player left in CSS
 * change incremention in switch statment usually 10 - 20 - last */

/* notes from Noel(tutor):pull and adjust where goTime.a and goTime.b - 
think of way to call for it move, from one square to
 another then leave space,never let x and y got to !-1, dwn map length needs to b changed 
 to equal hortizal length for right, arraow right needs to be every space
 
 
 create if statment for finish in arrow right if it hits finish write it's done, then display*/

/**rubric for assignment
 * /This criterion is linked to a Learning OutcomeMaze and player are displayed on the page, and the player starts on the start square.
3.0 pts
/This criterion is linked to a Learning OutcomePlayer can be moved through the maze by arrow keys.
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