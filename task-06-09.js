const getNamesSortedByFriendsCount = ([...array]) => array.sort((a, b) => a.friends.length - b.friends.length).map(({name}) => name);