const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
    const cleanedPeople = people.map(person => ({
        ...person,
        yearOfDeath: person.yearOfDeath || currentYear
    }));

    return cleanedPeople.reduce((oldest, current) => {
        const ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        const ageCurrent = current.yearOfDeath - current.yearOfBirth;

        return (ageCurrent > ageOldest) ? current : oldest;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
