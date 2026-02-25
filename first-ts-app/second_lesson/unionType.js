var tasks = [
    { title: "Сделать домашку", isActive: true, isPublic: true, isHidden: false },
    { title: "Секретная задача", isActive: true, isPublic: false, isHidden: true },
    { title: "Старая задача", isActive: false, isPublic: true, isHidden: false },
    { title: "Черновик", isActive: false, isPublic: false, isHidden: true },
];
var admin = { role: "admin" };
var user = { role: "user" };
var guest = { role: "guest" };

function filterTasks(tasks, person) {
    switch (person.role) {
        case "admin":
            return tasks;
        case "guest":
            return tasks.filter(function (task) { return task.isPublic; });
        case "user":
            return tasks.filter(function (task) { return task.isActive; });
        default:
            throw new Error("Unknown person role");
    }
}

console.log(filterTasks(tasks, admin));
/*
[
  {
    title: 'Сделать домашку',
    isActive: true,
    isPublic: true,
    isHidden: false
  },
  {
    title: 'Секретная задача',
    isActive: true,
    isPublic: false,
    isHidden: true
  },
  {
    title: 'Старая задача',
    isActive: false,
    isPublic: true,
    isHidden: false
  },
  {
    title: 'Черновик',
    isActive: false,
    isPublic: false,
    isHidden: true
  }
]
*/

console.log(filterTasks(tasks, user));
/*
[
  {
    title: 'Сделать домашку',
    isActive: true,
    isPublic: true,
    isHidden: false
  },
  {
    title: 'Секретная задача',
    isActive: true,
    isPublic: false,
    isHidden: true
  }
]
*/

console.log(filterTasks(tasks, guest));
/* 
[
  {
    title: 'Сделать домашку',
    isActive: true,
    isPublic: true,
    isHidden: false
  },
  {
    title: 'Старая задача',
    isActive: false,
    isPublic: true,
    isHidden: false
  }
]
*/
