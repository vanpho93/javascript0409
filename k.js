function getLog() {
    return console.log;
}

getLog()(5);

function doSth(x) {
    x();
}

function play() {
    console.log('I am playing');
}

doSth(play);
