// ===========================================
// BIRTHDAY GAME - FOR UJALA RAI 🌟
// SURPRISE VERSION - No spoilers!
// ===========================================

// Game state
let gameState = {
    step: 'start',
    starter: null,
    pokemonCaught: [],
    gifts: []
};

// ===========================================
// START THE GAME
// ===========================================

function startGame() {
    gameState.step = 'starter';
    document.getElementById('message').innerHTML = "Professor Elm: Ujala Rai! Happy Birthday! Time to start your Johto adventure! Choose your first partner!";
    document.getElementById('characterSprite').src = "sprites/trainer.png";
    
    document.getElementById('choicesArea').innerHTML = `
        <div class="pokemon-choice">
            <div class="pokemon-option" onclick="chooseStarter('chikorita')">
                <img src="sprites/chikorita.png" alt="Chikorita">
                <span>Chikorita 🌱</span>
            </div>
            <div class="pokemon-option" onclick="chooseStarter('cyndaquil')">
                <img src="sprites/cyndaquil.png" alt="Cyndaquil">
                <span>Cyndaquil 🔥</span>
            </div>
            <div class="pokemon-option" onclick="chooseStarter('totodile')">
                <img src="sprites/totodile.png" alt="Totodile">
                <span>Totodile 💧</span>
            </div>
        </div>
    `;
}

// ===========================================
// CHOOSE STARTER (GEN 2)
// ===========================================

function chooseStarter(pokemon) {
    gameState.starter = pokemon;
    gameState.step = 'catching';
    
    let message = "";
    if (pokemon === 'chikorita') {
        message = "Chikorita spins its leaf happily! It senses your gentle heart, Ujala! 🌱";
    } else if (pokemon === 'cyndaquil') {
        message = "Cyndaquil's tiny flames pop like birthday candles just for you! 🔥🎂";
    } else if (pokemon === 'totodile') {
        message = "Totodile does an excited birthday dance just for Ujala! 💧🎉";
    }
    
    document.getElementById('message').innerHTML = message;
    document.getElementById('characterSprite').src = `sprites/${pokemon}.png`;
    
    // Only show "Catch Pokémon" button - NO spoilers!
    document.getElementById('choicesArea').innerHTML = `
        <button class="choice-btn" onclick="catchPokemon()">Catch Pokémon!</button>
    `;
}

// ===========================================
// CATCH HER FAVORITE POKÉMON!
// ===========================================

let catchCount = 0;

function catchPokemon() {
    const favorites = ['lucario', 'snorlax', 'umbreon', 'suicune', 'gyarados'];
    const randomPokemon = favorites[Math.floor(Math.random() * favorites.length)];
    
    gameState.pokemonCaught.push(randomPokemon);
    catchCount++;
    
    // Pokémon messages
    let message = "";
    
    if (randomPokemon === 'lucario') {
        message = "Lucario gently places a paw on your shoulder. 'Your aura feels especially bright today, Ujala.' ✨";
    } 
    else if (randomPokemon === 'snorlax') {
        message = "Snorlax wakes up just to share snacks with you. This is the biggest honor possible! 🍪";
    } 
    else if (randomPokemon === 'umbreon') {
        message = "Umbreon quietly stays by your side. Protective mode activated. It won't leave you all night. 🌙";
    } 
    else if (randomPokemon === 'suicune') {
        message = "A cool breeze surrounds you as Suicune appears. Sparkling water dances around a peaceful birthday blessing just for Ujala. 💧✨";
    } 
    else if (randomPokemon === 'gyarados') {
        message = "Gyarados unleashes a loud, dramatic roar... that accidentally turns into beautiful fireworks energy! BOOM! Happy Birthday! 🎆";
    }
    
    document.getElementById('message').innerHTML = message;
    document.getElementById('characterSprite').src = `sprites/${randomPokemon}.png`;
    
    // Check if we should continue catching or move to surprise
    if (catchCount < 5) {
        // Keep catching - still no spoilers!
        document.getElementById('choicesArea').innerHTML = `
            <button class="choice-btn" onclick="catchPokemon()">Catch another! (${catchCount}/5)</button>
        `;
    } else {
        // After 5 catches, AUTOMATIC surprise encounter!
        document.getElementById('message').innerHTML = "After catching all those Pokémon, you feel a mysterious presence...";
        document.getElementById('characterSprite').src = "sprites/trainer.png";
        
        // Clear buttons and auto-start surprise after 2 seconds
        document.getElementById('choicesArea').innerHTML = ``;
        
        setTimeout(function() {
            mysteriousEncounter1();
        }, 2000);
    }
}

// ===========================================
// MYSTERIOUS ENCOUNTER - SURPRISE!
// (No buttons - automatic)
// ===========================================

function mysteriousEncounter1() {
    document.getElementById('message').innerHTML = "Suddenly, the sky darkens... a figure appears...";
    document.getElementById('characterSprite').src = "sprites/dainsleif.png";
    
    setTimeout(function() {
        mysteriousEncounter2();
    }, 2000);
}

function mysteriousEncounter2() {
    document.getElementById('message').innerHTML = "Dainsleif: Ujala.";
    
    setTimeout(function() {
        mysteriousEncounter3();
    }, 2000);
}

function mysteriousEncounter3() {
    document.getElementById('message').innerHTML = "Another year has passed for you. Time moves forward whether we want it to or not... but today is different. Today is yours.";
    
    setTimeout(function() {
        mysteriousEncounter4();
    }, 3000);
}

function mysteriousEncounter4() {
    document.getElementById('message').innerHTML = "You've come this far already. That tells me enough about your strength. Even when things are uncertain, you keep going. Most people don't realize how rare that is.";
    
    setTimeout(function() {
        mysteriousEncounter5();
    }, 3000);
}

function mysteriousEncounter5() {
    document.getElementById('message').innerHTML = "So enjoy this day. Laugh freely. Rest if you need to. Dream bigger than before.";
    
    setTimeout(function() {
        mysteriousEncounter6();
    }, 3000);
}

function mysteriousEncounter6() {
    gameState.gifts.push('Stargazer\'s Blessing');
    
    document.getElementById('message').innerHTML = "I'll be watching your journey. Happy birthday, Ujala.";
    
    setTimeout(function() {
        mysteriousEncounter7();
    }, 3000);
}

function mysteriousEncounter7() {
    document.getElementById('message').innerHTML = "As Dainsleif fades away, another presence appears...";
    document.getElementById('characterSprite').src = "sprites/phainon.png";
    
    setTimeout(function() {
        mysteriousEncounter8();
    }, 2000);
}

function mysteriousEncounter8() {
    document.getElementById('message').innerHTML = "Phainon: Ujala... so today is the day you appeared in this world.";
    
    setTimeout(function() {
        mysteriousEncounter9();
    }, 2000);
}

function mysteriousEncounter9() {
    document.getElementById('message').innerHTML = "I think birthdays are interesting. Out of all the days in existence, this one belongs to you alone. That makes it special already.";
    
    setTimeout(function() {
        mysteriousEncounter10();
    }, 3000);
}

function mysteriousEncounter10() {
    document.getElementById('message').innerHTML = "I hope this year brings you moments that make you proud of yourself. Not big heroic things. Even small victories count.";
    
    setTimeout(function() {
        mysteriousEncounter11();
    }, 3000);
}

function mysteriousEncounter11() {
    document.getElementById('message').innerHTML = "So eat something nice. Smile more today. Let people celebrate you.";
    
    setTimeout(function() {
        mysteriousEncounter12();
    }, 3000);
}

function mysteriousEncounter12() {
    gameState.gifts.push('Digital Star');
    
    document.getElementById('message').innerHTML = "Happy birthday, Ujala.";
    document.getElementById('characterSprite').src = "sprites/phainon.png";
    
    setTimeout(function() {
        finalCelebration();
    }, 3000);
}

// ===========================================
// FINAL CELEBRATION
// ===========================================

function finalCelebration() {
    let pokemonList = gameState.pokemonCaught.map(p => {
        return p.charAt(0).toUpperCase() + p.slice(1);
    }).join(', ');
    
    let specialMessage = "";
    if (gameState.pokemonCaught.length === 5) {
        specialMessage = "You met ALL your favorite Pokémon! And they all love you! 🌟";
    } else {
        specialMessage = "You met " + gameState.pokemonCaught.length + " favorite Pokémon!";
    }
    
    document.getElementById('message').innerHTML = `🎉 HAPPY BIRTHDAY UJALA! 🎉<br><br>${specialMessage}`;
    document.getElementById('characterSprite').src = "sprites/trainer.png";
    
    // Show all Pokémon and gifts
    document.getElementById('choicesArea').innerHTML = `
        <div style="background: #306850; padding: 20px; border-radius: 15px; color: white; text-align: center;">
            <p style="margin-bottom: 15px; font-size: 18px;">✨ Your Birthday Summary ✨</p>
            <p style="margin-bottom: 10px;"><b>Starter:</b> ${gameState.starter.charAt(0).toUpperCase() + gameState.starter.slice(1)}</p>
            <p style="margin-bottom: 10px;"><b>Pokémon you met:</b> ${pokemonList}</p>
            <p style="margin-bottom: 10px;"><b>Special gifts:</b> ${gameState.gifts.join(' + ')}</p>
            <p style="margin-bottom: 20px; font-size: 16px; margin-top: 15px;">💝 Dainsleif, Phainon, and all your Pokémon are watching over you today 💝</p>
            <p style="margin-bottom: 20px; font-size: 14px;">Made with love just for Ujala Rai</p>
            <button class="choice-btn" onclick="location.reload()">Play Again</button>
        </div>
    `;
}

// ===========================================
// EASTER EGGS (SECRETS!)
// ===========================================

// Secret 1: Tap character 5 times
let tapCount = 0;
document.getElementById('characterSprite').addEventListener('click', function() {
    tapCount++;
    if (tapCount === 5) {
        alert('🎁 Ujala! You found a hidden Master Ball! The Pokémon are cheering for you!');
        gameState.gifts.push('Master Ball');
        tapCount = 0;
    }
    setTimeout(() => { tapCount = 0; }, 3000);
});

// Secret 2: Long press for Rare Candy
let pressTimer;
document.getElementById('textBox').addEventListener('touchstart', function(e) {
    pressTimer = setTimeout(function() {
        alert('🍬 Ujala found a Rare Candy! Your Pokémon share it with you!');
        gameState.gifts.push('Rare Candy');
    }, 2000);
});

document.getElementById('textBox').addEventListener('touchend', function() {
    clearTimeout(pressTimer);
});

// Secret 3: Type "UJALA" with keyboard
let keySequence = [];
document.addEventListener('keydown', function(e) {
    keySequence.push(e.key.toUpperCase());
    if (keySequence.length > 5) keySequence.shift();
    
    if (keySequence.join('') === 'UJALA') {
        alert('✨ UJALA! The stars recognize your name! Special birthday magic activated! ✨');
        gameState.gifts.push('Starlight');
        keySequence = [];
    }
});

// ===========================================
// AUTO-START
// ===========================================

window.onload = function() {
    setTimeout(() => {
        document.getElementById('message').innerHTML = "Ujala Rai... Happy Birthday! Ready for your adventure?";
    }, 500);
};