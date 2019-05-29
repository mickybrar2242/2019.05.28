function sum() {
    var TheAnsweer;
    startingNumber = 504;
    endingNumber = 107;
    stepDown = 38;
    i = startingNumber;
    while (i > endingNumber) {
        i -= stepDown;
        TheAnsweer += i;
    }
    return TheAnsweer;
}

function PracticeIfThen(inputNumber) {
    if (inputNumber > 50) {
        return "YES";

    } else return "NO";
}