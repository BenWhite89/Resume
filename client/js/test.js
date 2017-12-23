function pascal(n) {
    if(n < 1) {
        return (null);
    } else {
        var triangle = [];
        for (let i = 1; i <= n; i++) {
            var newLine = [];
            for (let j = i; j > 0; j--) {
                if (j === i) {
                    newLine.push(1);
                } else if (j === 1) {
                    newLine.push(1);
                } else {
                    newLine.push(triangle[i-2][j-2] + triangle[i-2][j-1]);
                };
            };
            triangle.push(newLine);
        }
    }
    return triangle;
}