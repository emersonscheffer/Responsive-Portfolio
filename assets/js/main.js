// 
var train = new Items("Train Scheduler", "train", "./assets/images/train.png", 'https://emersonscheffer.github.io/Train-Scheduler/');

var giftastic = new Items("Giftastic", "giftastic", "./assets/images/giftastic.png", 'https://emersonscheffer.github.io/GifTastic/');

var trivia = new Items("Trivia Game", "trivia", "./assets/images/trivia.png", 'https://emersonscheffer.github.io/Trivia-Game-v2/');

var star = new Items("Star War RPG", "star", "./assets/images/star.png", 'https://emersonscheffer.github.io/Star-wars-rpg-game/');

var crystal = new Items("Crystal Collector", "crystal", "./assets/images/crystal.png", 'https://emersonscheffer.github.io/unit-4-game/');
var word = new Items("Word Guess", "word", "./assets/images/word.png", "https://emersonscheffer.github.io/Word-Guess-Game/");





function displaying(item) {
    var port = document.getElementById('portProjects');
    port.appendChild(document.createElement('div'));
    port.lastElementChild.setAttribute('class', 'box');
	port.lastElementChild.setAttribute("id", item.getNick());

    var pls = port.lastElementChild.style;

    pls.height = "200px";
    pls.borderRadius = "10px";
    pls.border = "solid 1px #000000";
    pls.boxSizing = "border-box";
    pls.backgroundSize = "cover";
	pls.backgroundPosition = "center center";
    pls.backgroundImage = "url(" + item.getBg() + ")";

    var title = document.createElement('p');
    title.setAttribute("class", "linking");
    title.setAttribute("src", item.getLink());

    var ts = title.style;
    ts.position = "relative";
    ts.borderTop = "solid 1px #000000";
    ts.boxShadow = "0px 2px 4px #000000";
    ts.borderBottom = "solid 1px #000000";
    ts.top = "60%";
    ts.backgroundColor = "#4aaaa5";
    ts.padding = "13px";
    ts.color = 'white';
    ts.textAlign = 'center';
    title.innerHTML = item.getName();
    port.lastElementChild.appendChild(title);

}

$(document).on("click", ".linking", clicking);

function clicking(){

    window.open($(this).attr('src'))

}

displaying(train);
displaying(giftastic);
displaying(trivia);
displaying(star);
displaying(crystal);
displaying(word);

