
var wordel = document.querySelector("#word");
var completeText = document.querySelector("#completeText");

var data = `When an object is initialized with another object of the same type, the new object is said to be a copy of the initializing object, even if the copy was created via the move constructor. Regrettably, there’s no terminology in C++ that distinguishes between an object that’s a copy-constructed copy and one that’s a move-constructed copy`

completeText.textContent = data;

function reader(toRead) {
    let ind = 0;
    let wordList = toRead.split(" ");
    return function () {
        wordel.textContent = wordList[ind++];
    }
}

setInterval(reader(data), 200);
