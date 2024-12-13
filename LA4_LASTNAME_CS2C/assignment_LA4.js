let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function displayQueue() {
    alert("Queue: " + queue.join(", ")); // display the current queue
}

function addCustomer() {
    let customerName = prompt("Enter your name to be added to the queue:");
    queue.push(customerName); // add input custtomer to the queue
    alert(customerName + " has added to the queue.");
    displayQueue(); 
}

function serveCustomer() {
    if (queue.length > 0) {
        let servedCustomer = queue.shift(); // Remove the first customer from the queue
        alert(servedCustomer + " has been served.");
        displayQueue();
    } else {
        alert("There are no customers in the queue.");
    }
}

function startQueueingSystem(){// Main function
    let action = prompt("Do you want to (1) Add a customer, (2) Serve a customer, or (3) Exit?");

    while (action !== "3"){
        if (action === "1"){
            addCustomer();
        } else if (action === "2"){
            serveCustomer();
        } else {
            alert("Invalid option. Please enter 1, 2, or 3.");
        }

        action = prompt("Do you want to (1) Add a customer, (2) Serve a customer, or (3) Exit?");
    }

    alert("Exiting the queueing System.");
}

startQueueingSystem();