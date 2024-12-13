function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5;
}

let hashTable = new Array(5).fill(null);

function serviceCustomer(number) {
    const index = number - 1;
    if (hashTable[index] !== null) {
        const customerName = hashTable[index];
        hashTable[index] = null; // Remove the customer from the queue
        return customerName;
    } else {
        return null;
    }
}