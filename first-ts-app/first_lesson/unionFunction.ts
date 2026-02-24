
const greeting: string = "Hello, user!";
const users: string[] = ["Anya", "Lera", "Alex"];

function showInformation(info: string | string[]): void {
    if (typeof info === 'string') {
        console.log(info);
    } else {
        info.forEach((item) => console.log(item));
    }
};

showInformation(greeting);
showInformation(users);    