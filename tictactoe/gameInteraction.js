//KEY VARIABLES
const classVals = [
    'col1',
    'col2',
    'col3',
    'row1',
    'row2',
    'row3',
    'dia1',
    'dia2',
    'grid-box'
]   

var playerOneTally = '';
var playerTwoTally = '';
var curPlayer=true; //true = Player 1 // false = Player 2


//CURRENT PLAYER TRACKING
let playerTracker = function() {
    if(curPlayer){
        console.log('Currently Player 1 \n Switching to Player 2')
        curPlayer = false;
    } else {
        console.log('Currently Player 2 \n Switching to Player 1')
        curPlayer = true;
    }
}



//CHECK ALL ANGLES AFTER EACH MOVE TO CHECK FOR A WINNING BOARD
const checkValues = () => {
    playerOneCount = 0;
    playerTwoCount = 0;
    for (let i = 0; i < classVals.length; i++) {
        let checkList = document.getElementsByClassName(classVals[i])
        let winType = 'Row'
        if(classVals[i].includes('dia')) { 
            winType = 'Diagonal'
        } else if(classVals[i].includes('col')) { 
            winType = 'Column'
        } else if(classVals[i].includes('grid-box')) { 
            winType = 'Cats Game'
        }

        for (let el = 0; el < checkList.length; el++) {
            if(checkList[el].innerHTML === 'X') {
                playerOneCount++
            } else if (checkList[el].innerHTML === 'O') {
                playerTwoCount++
            }
        }
        if (playerOneCount === 3 && classVals[i] !== 'grid-box') {
            alert(`${winType} win by Player One!`)
            return true;
        } else if (playerTwoCount === 3 && classVals[i] !== 'grid-box') {
            alert(`${winType} win by Player Two!`)
            return true;
        } else {
            if((playerOneCount + playerTwoCount) === 9) {
                alert(`${winType}! No one wins!!`)
                return true;
            }
            playerOneCount = 0;
            playerTwoCount = 0;
        }


    }

}

//TRACK PLAYER WINS
const playerWinCounter = (bool) => {
    if(bool) {
        playerOneTally += "|"
    } else {
        playerTwoTally += "|"
    }
}

//RENDER THE WINS TO THE PAGE
const renderTally = () => {
    let p1 = document.getElementById('tally-p-one')
    let p2 = document.getElementById('tally-p-two')

    p1.innerHTML = `${playerOneTally}`
    p2.innerHTML = `${playerTwoTally}`
}