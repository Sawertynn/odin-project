interface Person {
    name: string,
    yearOfBirth: number,
    yearOfDeath?: number
}

export function findTheOldest(people: Person[]): Person | null {
    if (people.length == 0) {
        return null;
    }
    const year = new Date().getFullYear();
    let ages = people.map((person) => {
        const death = person.yearOfDeath ?? year;
        return death - person.yearOfBirth;
    })
    const maxAge = Math.max(...ages);
    const index = ages.indexOf(maxAge);
    return people[index];
}