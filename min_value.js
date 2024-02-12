// find minimum value

const prices = [30, 27, 29, 17, 5, 2, 1, 7]

function getMin(numbers) {
    let minimum = numbers[0];
    for (const num of numbers) {
        if (num < minimum) {
            minimum = num;
        }

    }
    return minimum;
}

const min = getMin(prices);
console.log('The Minimum Number is :', min);
