const mobiles = [
    { name: "samsung", price: 65000, camera: "48mpx", color: "black" },
    { name: "Iphone", price: 85000, camera: "32mpx", color: "green" },
    { name: "one plus", price: 45000, camera: "36mpx", color: "white" },
    { name: "google", price: 50000, camera: "24mpx", color: "black" },
    { name: "nokia", price: 5000, camera: "12mpx", color: "black" },
]

function getHighest(mobiles) {
    let max = mobiles[0];
    for (const phone of mobiles) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;

}
const cheap = getHighest(mobiles);
console.log(' Highest Phone is:', cheap);