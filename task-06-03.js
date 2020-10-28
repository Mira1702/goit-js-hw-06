const getUsersWithGender = (array, gender) => array.filter(array => array.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));