"use strict";
function getGrade(score) {

if (score < 25 && score <= 30 ) {
    console.log("A");
} else if (score < 20 && score <= 25) {
    console.log("B");
} else if (score < 15 && score <= 20) {
    console.log("C");
} else if (score < 10 && score <= 15) {
    console.log("D");
} else if (score < 5 && score <= 10) {
    console.log("E");
} else if (score <= 0 && score <= 5) {
    console.log("F");
} else {
    console.log("Please Type A Number");
}

}
getGrade(20);
