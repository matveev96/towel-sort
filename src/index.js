
// You should implement your task here.
module.exports = function towelSort (matrix=[]) {
    const newArr = matrix.reduce((acc, current, index) => {
        (index % 2 == 0) ? acc.push(current) : acc.push(current.sort((a,b) => b - a));
        return acc.flat();
    }, []);
    return newArr;
}




