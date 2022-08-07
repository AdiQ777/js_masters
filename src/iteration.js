const data = [
    {
        name: "pawel",
        city: "krakow",
        age: 37,
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "bartosz",
        city: "tychy",
        age: 37,
        hobbies: ["mountains", "swimming", "education"]
    },
    {
        name: "alicja",
        city: "knurow",
        age: 29,
        hobbies: ["music", "cars", "motorcycles"]
    },
    {
        name: "maciek",
        city: "katowice",
        age: 35,
        hobbies: ["js", "gym", "alcohol"]
    },
    {
        name: 'slawek',
        city: 'kato',
        age: 19,
        hobbies: ['sex', 'rock and roll', 'drugs']
    },
    {
        name: 'szymon',
        city: 'rybnik',
        age: 27,
        hobbies: ['js', 'python', 'drugs']
    }
]


function avgAge(persons){
    let ageSum = 0;

    for(let i = 0; i < persons.length; i++){
        ageSum += persons[i].age
    }

    return ageSum / persons.length
}



// function avgAge2(persons) {
//     return persons
//         .map((person) => person.age)
//         .reduce((accumulator, currentElement) => accumulator + currentElement) / persons.length
// }

const avgAge2 = (persons) => persons
        .map((person) => person.age)
        .reduce((accumulator, currentElement) => accumulator + currentElement) / persons.length

const avgAge3 = (persons) => persons
    .reduce((acc, ce) => acc + ce.age, 0) / persons.length


// console.log(avgAge3(data))


function avgAgeForPeopleFromCityStartingWithK(persons) {
    let ageSum = 0;
    let counter = 0;

    for(let i = 0; i < persons.length; i++){
        if (persons[i].city[0].toLowerCase() === 'k') {
            ageSum += persons[i].age;
            counter++
        }
    }

    return ageSum / counter;
}


const avgAgeForPeopleFromCityStartingWithK2 = (persons) => {
    const filteredPerson = persons.filter((person) => person.city[0].toLowerCase() === 'k');
    return filteredPerson
        .map((person) => person.age)
        .reduce((acc, ce) => acc + ce) / filteredPerson.length
}

const avgAgeForPeopleFromCityStartingWithK3 = (persons) => persons
    .reduce((acc, ce) => ce.city[0].toLowerCase() === 'k' ? [acc[0] + ce.age, ++acc[1]] : acc, [0, 0])
    .reduce((acc, ce) => acc /ce);


// console.log(avgAgeForPeopleFromCityStartingWithK3(data));

function peopleWhoNotLoveJS(persons){
    const temp = [];

    for(let i = 0; i < persons.length; i++){
        if (!persons[i].hobbies.includes('js')){
            temp.push(persons[i].name)
        }
    }

    return temp;
}

const peopleWhoNotLoveJS2 = (persons) => persons
    .filter((person) => !person.hobbies.includes('js'))
    .map((person) => person.name);

// console.log(peopleWhoNotLoveJS(data));
// console.log(peopleWhoNotLoveJS2(data));

const isPersonFromKrakow = (persons) => {
    for(let i = 0; i < persons.length; i++){
        if (persons[i].city === 'kato') {
            return true;
        }
    }

    return false;
}

// const isPersonFromKrakow2 = (persons) => persons
//     .some((person) => person.city === 'krakow')
//
// console.log(isPersonFromKrakow2(data));

const isPersonFromKrakow2 = (persons) => persons
    .every((person) => person.city === 'krakow');

// console.log(isPersonFromKrakow2(data));


const countUniqueHobbies = (persons) => {
    const temp = [];

    for (let i = 0; i < persons.length; i++){
       for (let j = 0; j < persons[i].hobbies.length; j++) {
           if (!temp.includes(persons[i].hobbies[j])) {
               temp.push(persons[i].hobbies[j]);
           }
       }
    }
    return temp.length
}

const countUniqueHobbies2 = (persons) => new Set(persons
    .map((person) => person.hobbies)
    .flat()).size;

console.log(countUniqueHobbies2(data));
