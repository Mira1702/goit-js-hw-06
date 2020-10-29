const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => (age > min && max > age))
 .map(({name, email}) => ({name, email}));