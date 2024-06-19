// Task 1: Code a Person class
class Person{
    constructor(name, age, energy) {
        this.name = "Tom"
        this.age = 20
        this.energy = 100
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp=0, hourlyWage=0) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var obj = new Worker('Bob', 21, 110, 0, 10);
    obj.goToWork();
    return obj;
}

// Task 4: Code a manager object, methods
function manager() {
    var obj = new Worker('Alice', 30, 120, 100, 30);
    obj.doSomethingFun();
    return obj;
}
