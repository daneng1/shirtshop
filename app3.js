let today = new Date();
let hourNow = today.getHours();
let greeting;


if (hourNow > 17) {
    greeting = ' What a great evening to buy some tee\'s!';
} else if (hourNow > 12) {
    greeting = ' What a great afternoon to buy some tee\'s!';
} else if (hourNow > 0) {
    greeting = ' What a great morning to buy some tee\'s!';
} else {
    greeting = ' We hope you enjoy our amazing selection of tee\'s!!';
}

document.write('<h2>' + greeting + '</h2>');
