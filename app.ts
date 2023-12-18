interface Person {
    name: string,
    age: number
}

const person1: Person = {
    name: 'Matheus',
    age: 26
}
const person2: Person = {
    name: 'Nathiele',
    age: 26
}
const person3: Person = {
    name: 'Patricia',
    age: 28
}

const apresentation = (person: Person) => {
    console.log(person.name + ' tem ' + person.age + ' anos.')
}

const personList: Array<Person> = [
    person1, person2, person3
]

const execute = () => {
    personList.forEach(element => {
        apresentation(element)
    });
}

execute();
