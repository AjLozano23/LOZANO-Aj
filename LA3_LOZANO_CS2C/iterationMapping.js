// prompt the limitt of double loop
let max_limit = prompt("Enter the Limit of the Double Loop:");

for (let i = 0; i <= max_limit; i++) { // Outer loop iterate 0 to max_limit
    for (let k = 0; k <= max_limit; k++) { // Inner loop iterate 0 to max_limit

        let added_value = i + k; // variable that will add the current values of the counters at each iteration
        console.log(`[${i}] [${k}] Added value is ${added_value}`);
        // print the current value of i and k, concatenate "added value is" and the current value of added_value
    }
}