// ! Enhanced Object Literals

// * Task 8

let person = {
    name: 'Megh',
    age: 18,
    greet() {
        return `Namaste Duniya! My name is ${this.name} and I'm ${this.age} yo`;
    }
}

console.log(person.greet());


// * Task 9

let key1 = 'first';
let key2 = 'middle';
let key3 = 'last'

let obj = {
    [key1]: 'Java',
    [key2]: 'Script',
    [key3]: 'Chai Aur Code',
    intro() {
        return `I am learning ${this[key1]} ${this[key2]} with ${this[key3]}`
    }
};

console.log(obj.intro());
