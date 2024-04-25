function verifyDeath(damage, health) {
    if (damage >= health) {
        return 1;
    } else {
        return 0;
    }
}

var damage = prompt("Enter your damage:");
var health = prompt("Enter the amount of health:")
var result = verifyDeath(damage, health);
console.log(result);
