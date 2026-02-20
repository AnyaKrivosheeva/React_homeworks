var greeting = "Hello, user!";
var users = ["Anya", "Lera", "Alex"];
function showInformation(info) {
    if (typeof info === 'string') {
        console.log(info);
    }
    else {
        info.forEach(function (item) { return console.log(item); });
    }
}
;
showInformation(greeting);
showInformation(users);

//Hello, user!
// Anya
// Lera
// Alex