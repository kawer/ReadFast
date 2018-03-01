
var wordel = document.querySelector("#word");
var completeText = document.querySelector("#completeText");

var infoel = document.querySelector("#info");

var wpm = 200;
var ms = 100 * wpm / 60;

addEventListener("wheel", (ev) => {
    wpm -= ev.deltaY;
    infoel.innerHTML = "<i>wpm: </i>" + wpm;
    ms = 100 * wpm / 60;
})

var data = `When an object is initialized with another object of the same type, the new object is said to be a copy of the initializing object, even if the copy was created via the move constructor. Regrettably, there’s no terminology in C++ that distinguishes between an object that’s a copy-constructed copy and one that’s a move-constructed copy`

completeText.textContent = data;

function reader(toRead) {
    let ind = 0;
    let wordList = toRead.split(" ");

    function readWord() {
        wordel.textContent = wordList[ind++];
        setTimeout(readWord, ms);
    }

    setTimeout(readWord, ms);
}

reader(data);
