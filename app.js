var sequence = []
var TT = 10
function reinit(){
    sequence=[]
    sequenceCopy.forEach(element =>
        sequence.push(element)
    )
}
////

var gameElement = {
    player: document.querySelector('.gamePlayer'),
    colonne: document.querySelectorAll(".colonne_sequence"),
    letter: document.querySelectorAll(".commands_letter"),
    container: document.querySelector('.container'),
    button: document.querySelector('.gameButton')
}

var game = {
    state: false,
    input: {
        A: false,
        Z: false,
        E: false,
        R: false
    },
    time: 0,
    note: []

};

var interval;
var barTimeOut;

gameElement.button.addEventListener('click', function (event) {
    document.activeElement.blur();
    startStop();
})

window.addEventListener('keydown', function (event) {

    if (event.which === 13) {
        startStop();
    }

    if (event.which === 65) {
        gameElement.letter[0].classList.add("active")
        game.input.A = true
    }

    if (event.which === 90) {
        gameElement.letter[1].classList.add("active")
        game.input.Z = true
    }

    if (event.which === 69) {
        gameElement.letter[2].classList.add("active")
        game.input.E = true

    }

    if (event.which === 82) {
        gameElement.letter[3].classList.add("active")
        game.input.R = true

    }

    if (event.which === 32) {
        inputCheck();
    }
})

function startStop() {
    if (game.state === false) {
        reinit();
        game.state = true;
        gameElement.button.textContent = "STOP"
        gameElement.player.play();
        clearInterval(interval);
        interval = setInterval(function () {
            game.time += TT;
            for(var i=0; i<50 ;i++) {
                if (sequence.length > 0 && sequence[i] && sequence[i].timing - game.time < 10000) {
                    noteShow(sequence[i].timing - game.time);
                }
            }
            clear();
            timePass();
            render();
            purge();
        }, TT);
    } else if (game.state === true) {
        gameElement.button.textContent = "Start"
        gameElement.player.pause();
        gameElement.player.currentTime = 0;

        game.state = false;
        clearInterval(interval);
        clear();
        game.time = 0;
        game.note = []
    }
}

window.addEventListener('keyup', function (event) {
    if (event.which === 65) {
        gameElement.letter[0].classList.remove("active")
        game.input.A = false

    }

    if (event.which === 90) {
        gameElement.letter[1].classList.remove("active")
        game.input.Z = false
    }

    if (event.which === 69) {
        gameElement.letter[2].classList.remove("active")
        game.input.E = false

    }

    if (event.which === 82) {
        gameElement.letter[3].classList.remove("active")
        game.input.R = false
    }
})


function noteShow(timeLeft) {
    game.note.push({
        timeLeft: timeLeft,
        letter: sequence[0].letter
    });
    sequence.splice(0, 1);
}

function timePass() {
    if (game.note.length > 0) {
        for (var i = 0; i < game.note.length; i++) {
            game.note[i].timeLeft -= TT;
        }
    }
}

function render() {

    if (game.note.length > 0) {
        for (var i = 0; i < game.note.length; i++) {
            var j = 0;
            for (var key in game.note[i].letter) {
                if (game.note[i].letter[key] === true) {
                    var newP = document.createElement('p');
                    newP.classList.add('note');
                    newP.style.bottom = game.note[i].timeLeft /10 + "%";
                    gameElement.colonne[j].appendChild(newP);
                }
                j++;

            }
        }
    }
}

function clear() {
    gameElement.colonne.forEach(element => {
        element.innerHTML = "";
    });
}

//supprime les notes non validée
function purge() {
    for(var i=0; i<10; i++) {
    if (game.note.length > 0 && game.note[i] && game.note[i].timeLeft < -100) {
        game.note.splice(i, 1);
        console.log('miss!');
        gameElement.container.classList.remove("perfect");
        gameElement.container.classList.remove("cool");
        gameElement.container.classList.remove("bad");
        barChange("miss")
    }
    }
}


function inputCheck() {
    if (game.note.length > 0 && game.note[0].timeLeft < 200) {
        var check = 0;
        for (var key in game.note[0].letter) {
            if (game.note[0].letter[key] === game.input[key]) {
                check++;
            }
        }
        if (check === 4 & (game.note[0].timeLeft < 50) && (game.note[0].timeLeft > -20)) {
            console.log('perfect!!');
            gameElement.container.classList.remove("cool");
            gameElement.container.classList.remove("bad");
            gameElement.container.classList.remove("miss");
            barChange("perfect")


        } else if (check === 4 & (game.note[0].timeLeft < 100) && (game.note[0].timeLeft > -100)) {
            console.log('cool!!');
            gameElement.container.classList.remove("perfect");
            gameElement.container.classList.remove("bad");
            gameElement.container.classList.remove("miss");
            barChange("cool")


        } else {
            console.log('bad!');
            gameElement.container.classList.remove("perfect");
            gameElement.container.classList.remove("cool");
            gameElement.container.classList.remove("miss");
            barChange("bad")

        }
        game.note.splice(0, 1);
    }


}

function barChange(myClass) {

    gameElement.container.classList.add(myClass);
    clearTimeout(barTimeOut);
    barTimeOut = setTimeout(function () {
        gameElement.container.classList.remove(myClass);
    }, 400)
}