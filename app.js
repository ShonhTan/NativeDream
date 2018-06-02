
function sequenceGeneration() {
    var time = 0;
    sequence = []
    while (sequence.length < 1000) {
        var letter = {
            A: false,
            Z: false,
            E: false,
            R: false
        }

        var count = 0
        for (var key in letter) {
            if (Math.random() < 0.3) {
                letter[key] = true
                count++
            }
        }

        if (count !== 0) {
            time += Math.floor(Math.random() * 500 + 1000)


            sequence.push({
                timing: time,
                letter: letter
            })
        }
    }
}

sequenceGeneration();
////

var gameElement = {
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
        game.state = true;
        gameElement.button.textContent = "STOP"
        clearInterval(interval);
        interval = setInterval(function () {
            game.time += 10;
            if (sequence.length > 0 && sequence[0].timing - game.time < 200) {
                noteShow();
            }
            clear();
            timePass();
            render();
            purge();

        }, 5);
    } else if (game.state === true) {
        gameElement.button.textContent = "Start"
        game.state = false;
        clearInterval(interval);
        clear();
        game.time=0;
        game.note= []
        sequenceGeneration();
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


function noteShow() {
    game.note.push({
        timeLeft: 200,
        letter: sequence[0].letter
    });
    sequence.splice(0, 1);
}

function timePass() {
    if (game.note.length > 0) {
        for (var i = 0; i < game.note.length; i++) {
            game.note[i].timeLeft -= 0.5;
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
                    newP.style.bottom = game.note[i].timeLeft / 2 + "%";
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
    if (game.note.length > 0 && game.note[0].timeLeft < -8) {
        game.note.splice(0, 1);
        console.log('miss!');
        gameElement.container.classList.remove("perfect");
        gameElement.container.classList.remove("cool");
        gameElement.container.classList.remove("bad");
        barChange("miss")

    }
}


function inputCheck() {
    if (game.note.length > 0 && game.note[0].timeLeft < 15) {
        var check = 0;
        for (var key in game.note[0].letter) {
            if (game.note[0].letter[key] === game.input[key]) {
                check++;
            }
        }
        if (check === 4 & (game.note[0].timeLeft < 2) && (game.note[0].timeLeft > -2)) {
            console.log('perfect!!');
            gameElement.container.classList.remove("cool");
            gameElement.container.classList.remove("bad");
            gameElement.container.classList.remove("miss");
            barChange("perfect")


        } else if (check === 4 & (game.note[0].timeLeft < 5) && (game.note[0].timeLeft > -5)) {
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