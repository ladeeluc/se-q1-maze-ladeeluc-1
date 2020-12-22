# Building a Maze
create global variables before 
writing function 
let current_Pos_player = player's current position in the maze
let p2;
player.setAtrribute("player) //playerId
 
create a map function (map){
Create outer wall for loop to create your
row within the map array
for (let i =0;i < map.length; i++) - travel map array)
    //create div for row 
    let row = document.createElement("div")
    row.classList.add("row")

    for(let j = 0; j < map.length; j++)
    cell div = maze a DIV
    create a variable cell 
    let cell = document.createElement("div")
    cell.classList.add("cell");
    cell.setAttribute("id", 'cell concat with j)

switch(mapArray[j]) {
    case "W"
    cell.classList.add("wall")
    break; 
}

}

create second function for key event 
function keyEvent(event) {

    create switch cases similarly to 
    the keyboard events activity 
}

final part
create win condtion for either player 1 
or player 2 to win (essentially
whoever gets to the end of the maze is the winner)

<!-- HTML: 

1. cell make cell div
2.  current_Pos_player_DIV to represent the player's current position in the maze


CSS:

1. cell_Div Makes each row of the maze a DIV using "display: flex;"
2. current_Pos_player_DIV is absolutely-positioned

JS:

1. player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).

2. change the absolute position of the player DIV.  -->


Card: 
Maze and player are displayed on the page, and the player starts on the start square.
3 points
Player can be moved through the maze by arrow keys.
3 points
Player cannot move onto walls or outside of the maze.
3 points
User is notified once the player reaches the finish square (no alert or console.log).