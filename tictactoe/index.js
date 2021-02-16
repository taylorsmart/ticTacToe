 window.onload = function () {

    //GATHER ALL BOXES IN THE GRID
    var boxIds = [
        'box-1',
        'box-2',
        'box-3',
        'box-4',
        'box-5',
        'box-6',
        'box-7',
        'box-8',
        'box-9'
    ]
    //SET DISABLE CLICK FLAG
    var clickDisable = false;

    
    //WHEN A BOX IS CLICKED, THE FOLLOWING SHOULD OCCUR
    let clickFunction = (elId) => {
        console.log('CD1:', clickDisable)
        if(clickDisable) {
            alert('You must restart the game to play again!')
            return;
        } else {
            console.log('Target El ID: '+ elId)
            var curEl = document.getElementById(elId);
            console.log('You clicked element: ' + 
            curEl.id+ '!')
            if(curEl.player) {
                alert(`This box is already owned by ${curEl.player} `)
                return;
            }
            curEl.innerHTML = curPlayer ? 'X':'O'
            curEl.player = curPlayer ? 'Player 1' : 'Player 2'
            curEl.style['background-color']= curPlayer ? 'aqua' : 'lightpink'; 
            if(checkValues()) { //If there is a true value, render the tally in the appropriate location
                playerWinCounter(curPlayer);
                renderTally();
                clickDisable=true;
                console.log('CD:', clickDisable)
            } else {
                playerTracker() //swap player tracker
            }
        }
    }

    //ADD THE BUTTON CLICK FUNCTIONALITY TO THE PAGE
    const getBoxes = () => {
        for(var i = 0; i < boxIds.length;i++) {
            var targetBox = document.getElementById(boxIds[i]);
            targetBox.onclick = clickFunction.bind(this,boxIds[i])
        }
    }
    //SET ONCLICK EVENT FOR EACH BOX ID
    getBoxes()
    
    //CONSOLE LOG ON CLICK
    const resetBoxes = () => {
        for(var i = 0; i < boxIds.length;i++) {
            var targetBox = document.getElementById(boxIds[i]);
            targetBox.player = '';
            targetBox.innerHTML = '-';
            targetBox.style['background-color'] = 'white';
        }
        document.getElementById('message-board').innerHTML = `${curPlayer ? 'Player One': 'Player Two'} starts since they won the last game!`
        clickDisable=false;
    }
    document.getElementById('reset-board').onclick = resetBoxes;
}
