// Taken from another student

function restHouse(roomsArr, guests) {
    let rooms = new Map();
    rooms.set("double-bedded", []);
    rooms.set("triple", []);

    roomsArr.forEach(r => {
        let bedsCount = r.type === "triple" ? 3 : 2;
        rooms.get(r.type).push({
            number: r.number,
            freeBeds: bedsCount,
            roomGuests: [],
            roomGender: "none"
        })
    });

    let teaHouseGuestsCount = 0;
    guests.forEach(gp => {
        let person1 = gp.first;
        let person2 = gp.second;

        if (person1.gender === person2.gender) {
            let freeRooms = rooms.get("triple").filter(r => r.freeBeds > 0);
            if (freeRooms.length > 0) {
                let room = freeRooms[0];
                if (room.freeBeds > 1 && (room.roomGender === "none" || room.roomGender === person1.gender)) {
                    room.roomGuests.push(person1, person2);
                    room.freeBeds -= 2;
                    room.roomGender = person1.gender;
                } else {
                    let person1accomodated = false;
                    if (room.roomGender === person1.gender) {
                        room.roomGuests.push(person1);
                        room.freeBeds -= 1;
                        person1accomodated = true;
                        let roomsFor2ndPerson = rooms.get("triple").filter(r => r.freeBeds > 0 && (r.roomGender === person2.gender || r.roomGender === "none"));
                        if (roomsFor2ndPerson.length > 0) {
                            let roomForSecond = roomsFor2ndPerson[0];
                            roomForSecond.roomGuests.push(person2);
                            roomForSecond.freeBeds -= 1;
                            roomForSecond.roomGender = person2.gender;
                        } else {
                            teaHouseGuestsCount++;
                        }
                    } else {
                        let fillUpRooms = rooms.get("triple").filter(r => r.freeBeds > 0 && (r.roomGender === person2.gender || r.roomGender === "none"));
                        if (fillUpRooms.length > 0) {
                            if (person1accomodated) {
                                let roomToFill = fillUpRooms[0];
                                roomToFill.roomGuests.push(person2);
                                roomToFill.freeBeds -= 1;
                                roomToFill.roomGender = person2.gender;
                            } else {
                                let roomToFill = fillUpRooms[0];
                                roomToFill.roomGuests.push(person1);
                                roomToFill.freeBeds -= 1;
                                if (roomToFill.freeBeds > 0) {
                                    roomToFill.roomGuests.push(person2);
                                    roomToFill.freeBeds -= 1;
                                    roomToFill.roomGender = person2.gender;
                                } else {
                                    fillUpRooms = rooms.get("triple").filter(r => r.freeBeds > 0 && (r.roomGender === person2.gender || r.roomGender === "none"));
                                    if (fillUpRooms.length > 0) {
                                        let freeR = fillUpRooms[0];
                                        freeR.roomGuests.push(person2);
                                        freeR.freeBeds -= 1;
                                        freeR.roomGender = person2.gender;
                                    } else {
                                        teaHouseGuestsCount++;
                                    }
                                }
                            }
                        } else {
                            teaHouseGuestsCount++;
                            if (!person1accomodated) {
                                teaHouseGuestsCount++;
                            }
                        }
                    }
                }
            } else {
                teaHouseGuestsCount += 2;
            }
        } else {
            let freeRooms = rooms.get("double-bedded").filter(r => r.freeBeds > 0);
            if (freeRooms.length > 0) {
                let room = freeRooms[0];
                room.roomGuests.push(person1, person2);
                room.freeBeds -= 2;
            } else {
                teaHouseGuestsCount += 2;
            }
        }
    });
    let allRooms = rooms.get("double-bedded").concat(rooms.get("triple"));
    let roomsKeySort = allRooms.map(r => r.number).sort();

    roomsKeySort.forEach(rNumb => {
        console.log(`Room number: ${rNumb}`);
        let currentRoom = allRooms.filter(r => r.number === rNumb)[0];
        let sortedGUests = currentRoom.roomGuests.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        sortedGUests.forEach(sg => {
            console.log(`--Guest Name: ${sg.name}`);
            console.log(`--Guest Age: ${sg.age}`);
        });
        console.log(`Empty beds in the room: ${currentRoom.freeBeds}`);
    });
    console.log(`Guests moved to the tea house: ${teaHouseGuestsCount}`);
}