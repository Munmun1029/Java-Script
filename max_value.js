// find maximum value

const prices = [30, 27, 29, 17, 5, 2, 1, 7]

function getMin(numbers) {
    let maximum = numbers[0];
    for (const num of numbers) {
        if ( maximum < num) {
            maximum = num;
        }

    }
    return maximum;
}

const max = getMin(prices);
console.log('The Minimum Number is :', max);
