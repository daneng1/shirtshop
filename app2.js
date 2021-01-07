function askUserName(){
    let userName = prompt('Please Enter Your First Name');

    if (userName == 'Dan'){
        document.write('<h2>' + 'Welcome ' + userName + '!' + '</h2>');
    } else {
        document.write('<h2>' + 'Welcome Guest!' + '</h2>');
    }
        return userName;
}

let getUserName = askUserName();