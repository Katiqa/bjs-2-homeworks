function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => element === arr2[index] && arr1.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
    const filter = users.filter(user => user.gender === gender);
    return filter.length ? filter.reduce((acc, user) => acc + user.age, 0) / filter.length : 0;
}