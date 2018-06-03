var sequence = []
var TT = 10

function reinit(){
    sequence=[]
    sequenceRecord = []
    sequenceCopy.forEach(element =>
        sequence.push(element)
    )
    game.result ={
        perfect:0,
        cool:0,
        bad:0,
        miss:0
    }
    gameElement.result.innerHTML="";    
}
////

//element de la page
var gameElement = {
    player: document.querySelector('.gamePlayer'),
    colonne: document.querySelectorAll(".colonne_sequence"),
    letter: document.querySelectorAll(".commands_letter"),
    container: document.querySelector('.container'),
    button: document.querySelector('.gameButton'),
    result:document.querySelector('.result')
}

//etat lors de la partie
var game = {
    state: false,
    input: {
        A: false,
        Z: false,
        E: false,
        R: false
    },
    time: 0,
    note: [],
    result:{
        perfect:0,
        cool:0,
        bad:0,
        miss:0
    }
};

var interval;
var barTimeOut;

gameElement.button.addEventListener('click', function (event) {
    document.activeElement.blur();
    startStop();
})

//inputs
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


//relachement des inputs AZER
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

//les modifications de l'affichage et des éléments du jeu lorsque STOP ou START
function startStop() {
    if (game.state === false) {
        reinit();
        game.state = true;
        gameElement.button.textContent = "STOP"
        gameElement.player.play();
        clearInterval(interval);
        interval = setInterval(function () {
            game.time += TT;
            for(var i=0; i<10 ;i++) {
                if (sequence.length > 0 && sequence[i] && sequence[i].timing - game.time < 2000) {
                    noteShow(sequence[i].timing - game.time);
                    
                }
            }
            clear();
            timePass();
            render();
            purge();
            theEnd()
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

//push les notes de la sequence vers le tableau des notes à afficher dans les colonnes
function noteShow(timeLeft) {
    console.log(timeLeft);

    game.note.push({
        timeLeft: timeLeft,
        letter: sequence[0].letter
    });
    sequence.splice(0, 1);
}

//diminue le temps restant des notes avant d'arriver en bas de la colonne
function timePass() {
    if (game.note.length > 0) {
        for (var i = 0; i < game.note.length; i++) {
            game.note[i].timeLeft -= TT;
        }
    }
}

//affiche les notes à intervalle régulier
function render() {
    if (game.note.length > 0) {
        for (var i = 0; i < game.note.length; i++) {
            var j = 0;
            for (var key in game.note[i].letter) {
                if (game.note[i].letter[key] === true) {
                    var newP = document.createElement('p');
                    newP.classList.add('note');
                    newP.style.bottom = game.note[i].timeLeft /20 + "%";
                    gameElement.colonne[j].appendChild(newP);
                }
                j++;

            }
        }
    }
}

//efface toute les notes avant le render
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
        game.result.miss++
        
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
            game.result.perfect++

        } else if (check === 4 & (game.note[0].timeLeft < 100) && (game.note[0].timeLeft > -100)) {
            console.log('cool!!');
            gameElement.container.classList.remove("perfect");
            gameElement.container.classList.remove("bad");
            gameElement.container.classList.remove("miss");
            barChange("cool")
            game.result.cool++


        } else {
            console.log('bad!');
            gameElement.container.classList.remove("perfect");
            gameElement.container.classList.remove("cool");
            gameElement.container.classList.remove("miss");
            barChange("bad")
            game.result.bad++

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


function theEnd(){
    if(gameElement.player.currentTime===gameElement.player.duration){
        gameElement.button.textContent = "Start"
        gameElement.player.pause();
        gameElement.player.currentTime = 0;
        showResult();
        game.state = false;
        clearInterval(interval);
        clear();
        game.time = 0;
        game.note = []
    }
}

function showResult(){

    gameElement.result.innerHTML="";
    var newText = document.createElement('p');
    newText.textContent = "PERFECT:" + game.result.perfect;
    gameElement.result.appendChild(newText);
    var newText = document.createElement('p');
    newText.textContent = "COOL:" + game.result.cool;
    gameElement.result.appendChild(newText);
    var newText = document.createElement('p');
    newText.textContent = "BAD:" + game.result.bad;
    gameElement.result.appendChild(newText);
    var newText = document.createElement('p');
    newText.textContent = "MISS:" + game.result.miss;
    gameElement.result.appendChild(newText);
}