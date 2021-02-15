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

    var curPlayer=true; //true = Player 1 // false = Player 2

    let playerTracker = function() {
        if(curPlayer){
            console.log('Currently Player 1 \n Switching to Player 2')
            curPlayer = false;
        } else {
            console.log('Currently Player 2 \n Switching to Player 1')
            curPlayer = true;
        }
    }

    let clickFunction = (elId) => {
        console.log('Target El ID: '+ elId)
        var curEl = document.getElementById(elId);
        console.log('You clicked element: ' + 
        curEl.id+ '!')
        if(curEl.className.includes('player')) {
            alert(`This box is already owned by ${curEl.player} `)
            return;
        }
        curEl.innerHTML = curPlayer ? 'X':'O'
        curEl.className += curPlayer ? ' player-one' : ' player-two'
        curEl.player = curPlayer ? 'Player 1' : 'Player 2'
        curEl.style['background-color']= curPlayer ? 'aqua' : 'lightpink'; 
        playerTracker() //swap player tracker
    }


    for(var i = 0; i < boxIds.length;i++) {

        var targetBox = document.getElementById(boxIds[i]);
        targetBox.onclick = clickFunction.bind(this,boxIds[i])

    }
    //SET ONCLICK EVENT FOR EACH BOX ID
    //CONSOLE LOG ON CLICK
}