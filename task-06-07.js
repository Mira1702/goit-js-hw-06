const calculateTotalBalance = array => array.reduce((acc, array, {balance}) => acc + array.balance, 0);