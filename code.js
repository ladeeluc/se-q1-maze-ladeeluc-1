let game = document.getElementById("maze")

//let currPosPlayer = game.setAttribute("player")
//let playerTwo = game.setAttribute("player")
//console.log(currPosPlayer)
//console.log(playerTwo)
//let row = document.createElement("row")
//row.classList.add("row")
//clickmode = "move"

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
                wall.setAttribute("id", "wall")
                game.append(wall)
            }
            if (map[rows][columns] === " ") {
                let empty = document.createElement("div")
                empty.setAttribute("id", "empty")
                game.append(empty)


                // default:
            }
            switch ((map[rows][columns])) {
                case "S":
                    let start = document.createElement("div")
                    start.setAttribute("id", "start")
                    game.append(start)

                    break;


            }
        }
        game.append(document.createElement("br"))
    }
}
movingInMaze()

//let row = document.createElement("row")
//row.classList.add("row")
//let currentposPlayer =

// for (let i = 0; i < map[0].length; i++) {
//     //console.log(game.row)




//         //         //return row
//         // } else {
//         //     return;



//         // }

//     }

// }

//.addEventListerener("click", movingInMaze)
//.addEventListener("click", movingInMaze)