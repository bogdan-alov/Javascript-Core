function filterByAge(minimumAge, person1Name,person1Age,person2Name,person2Age) {
    personA = {'name':person1Name,'age':person1Age};
    personB = {'name':person2Name,'age':person2Age};
    if(personA.age >= minimumAge){console.log(personA)}
    if(personB.age >= minimumAge){console.log(personB)}
}

filterByAge(16,'Goshko',99,'Peshko',16)