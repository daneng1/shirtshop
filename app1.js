function askUserName() {
    let userName = prompt('Please Enter Your First Name');

    if (userName == 'Dan'){
        document.write('Hey ' + userName + ' ');
    } else {
        document.write('Hey there,');
    }

        return userName;
}

function changeColor() {
    let color = document.getElementById('colorInputText').value;
    document.body.style.backgroundColor = color;

let button = document.getElementById('colorButton');
button.addEventListener("click",changeColor);
}

function printUserName() {
    let seeUser = askUserName(value);

    return seeUser;
}

function getGreeting() {

    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
 
 
    if (hourNow > 17) {
        greeting = ' what a great evening to buy some tee\'s!';
    }    else if (hourNow > 12) {
        greeting = ' what a great afternoon to buy some tee\'s!';
    } else if (hourNow > 0) {
        greeting = ' what a great morning to buy some tee\'s!';
    } else {
        greeting = ' we hope you enjoy our amazing selection of tee\'s!!';
    }
 
    document.write(greeting);
 }