//

var trivia = new Items("Trivia Game", "trivia", "./assets/images/trivia.png", 'https://emersonscheffer.github.io/Trivia-Game-v2/');

var wguess = new Items("Word Guess", "word", "./assets/images/brochures.jpg", '#');

function displaying(item) {
    var port = document.getElementById('portfolioDiv');
    port.appendChild(document.createElement('div'));

    var pls = port.lastElementChild.style;

    pls.height = "200px";
    pls.borderRadius = "10px";
    pls.border = "solid 1px #000000";
    pls.boxSizing = "border-box";
    pls.backgroundSize = "cover";
    pls.backgroundImage = "url(" + item.getBg() + ")";

    var title = document.createElement('p');
    title.setAttribute("id", "linkTo" + item.getNick());
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

displaying(trivia);