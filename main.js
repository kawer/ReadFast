
var wordel = document.querySelector("#word");
var completeText = document.querySelector("#completeText");
var infoel = document.querySelector("#info");

var wpm = 200;
var ms = 1000 * 60 / wpm;

addEventListener("wheel", (ev) => {
    wpm -= ev.deltaY;
    infoel.innerHTML = "<i>wpm: </i>" + wpm;
    ms = 1000 * 60 / wpm;
})

var data = `When an object is initialized with another object of the same type, the new object is said to be a copy of the initializing object, even if the copy was created via the move constructor. Regrettably, there’s no terminology in C++ that distinguishes between an object that’s a copy-constructed copy and one that’s a move-constructed copy`

completeText.textContent = data;

class Word {
    constructor(content, s, e) {
        this.content = content;
        this.s = s;
        this.e = e;
    }
}
//window.addEventListener("keydown", checkKeyPressed, false);

function reader(toRead) {

    let ind = 0;

    function buildList(toRead) {
        let l = [];
        let startBound = 0;
        for (i = 0; i < toRead.length; i++) {
            let c = toRead.charAt(i);
            if (c === ' ') {
                l.push(new Word(toRead.substring(startBound, i), startBound, i))
                startBound = i;
            }
        }
        l.push(new Word(toRead.substring(startBound, i), startBound, i))
        return l;
    }

    completeText.addEventListener("click", (e) => {
        debugger
        s = window.getSelection();
        var range = s.getRangeAt(0);
        var node = s.anchorNode;
        while (range.toString().indexOf(' ') != 0) {
            range.setStart(node, (range.startOffset - 1));
        }
        let clickIndex = range.startOffset;
        let i = 0;
        while (wordList[i].s < clickIndex)
            i++;
        ind = i;
    });

    let wordList = buildList(toRead);

    function readWord() {
        if (ind >= wordList.length)
            return;
        completeText.innerHTML = wordList.slice(0, ind).map(w => w.content).join(' ')
            + ' <em id="highlight">' + wordList[ind].content + '</em> '
            + wordList.slice(ind + 1).map(w => w.content).join(' ');

        wordel.textContent = wordList[ind++].content;

        setTimeout(readWord, ms);
    }
    setTimeout(readWord, ms);
}

reader(data);
