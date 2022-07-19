const pascalTriangle = (numOfRows) => {
    const tri = [
        [1]
    ];

    if (numOfRows === 1) return tri

    for (let i = 1; i < numOfRows; i++) {
        const temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);
            } else {
                const sum = parseInt(tri[i - 1][j]) + parseInt(tri[i - 1][j - 1]);
                console.log(sum);
                temp.push(sum);
            }
        }
        console.log(i);
        tri.push(temp)
    }

    return tri
}

console.log(pascalTriangle(5));