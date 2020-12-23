let game = document.getElementById("maze")
let runTime = document.createElement("div")
runTime.setAttribute('id', 'player')
game.append(runTime)

let goTime;

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
            goTime = { x: rows, y: columns } //movement
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


/*pull and adjust where goTime.a and goTime.b - 
think of way to call for it move, from one square to
 another then leave space,never let x and y got to !-1, dwn map length needs to b changed 
 to equal hortizal length for right, arraow right needs to be every space*/

/* Movement can be performed a couple different ways: 
In the case of 3A, change the absolute position of the player DIV. 
Or, in the case of 3B, append the player DIV to the next cell DIV. 
(You could use "document.querySelector()", and the CSS selector for attributes to get 
the next cell element by the indexes you set on it via data attributes.)


  

/*Sanitize input
//Put data into a data structure
//Alter data into required format */