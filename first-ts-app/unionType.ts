
type Admin = { role: "admin"; };
type User = { role: "user"; };
type Guest = { role: "guest"; };

type Person = Admin | User | Guest;

type Task = {
    title: string;
    isActive: boolean;
    isPublic: boolean;
    isHidden: boolean;
};

const tasks: Task[] = [
    { title: "Сделать домашку", isActive: true, isPublic: true, isHidden: false },
    { title: "Секретная задача", isActive: true, isPublic: false, isHidden: true },
    { title: "Старая задача", isActive: false, isPublic: true, isHidden: false },
    { title: "Черновик", isActive: false, isPublic: false, isHidden: true },
];

const admin: Admin = { role: "admin" };
const user: User = { role: "user" };
const guest: Guest = { role: "guest" };

function filterTasks(tasks: Task[], person: Person): Task[] {
    switch (person.role) {
        case "admin":
            return tasks;
        case "guest":
            return tasks.filter((task) => task.isPublic);
        case "user":
            return tasks.filter((task) => task.isActive);
        default:
            throw new Error("Unknown person role");
    }
}

console.log(filterTasks(tasks, admin));
console.log(filterTasks(tasks, user));
console.log(filterTasks(tasks, guest));


