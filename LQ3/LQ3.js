const usersTicketPerson = [
    { username: "admin", password: "admin123" },
    { username: "manager", password: "manager456" }
];

// Bus data
const buses = {
    "Cubao": Array(30).fill(null),
    "Baguio": Array(30).fill(null),
    "Pasay": Array(30).fill(null)
};

//check user credentials for ticket Person
function authenticateUser() {
    const username = prompt("Enter Username: ");
    const password = prompt("Enter Password: ");
    return usersTicketPerson.some(user => user.username === username && user.password === password);
}

//Function to display bus seat availabile
function displayBus(busName) {
    alert(Seats available for ${busName}:);
    let bus = buses[busName];
    let seatDisplay = "";
    bus.forEach((seat, index) => {
        seatDisplay += Seat ${index + 1}: ${seat ? seat : "AVAILABLE"}\n;
    });
    alert(seatDisplay);
}

//sort bus seats by availability using bubble sort
function sortBusSeats(busName) {
    let bus = buses[busName];
    for (let i = 0; i < bus.length; i++) {
        for (let j = 0; j < bus.length - 1; j++) {
            if (bus[j] === null && bus[j + 1] !== null) {
                [bus[j], bus[j + 1]] = [bus[j + 1], bus[j]]; // Swap
            }
        }
    }
}

//manage reservations for icket Person
function manageReservation() {
    let busChoice = prompt("Which bus would you like to manage? (1) Cubao (2) Baguio (3) Pasay");
    let busName;
    switch(busChoice) {
        case '1': busName = "Cubao"; break;
        case '2': busName = "Baguio"; break;
        case '3': busName = "Pasay"; break;
        default: alert("Invalid choice."); return;
    }

    let action = prompt("1. Add Reservation\n2. Remove Reservation\n3. Cancel");
    if (action === '1') {
        addReservation(busName);
    } else if (action === '2') {
        removeReservation(busName);
    } else if (action === '3') {
        return;
    } else {
        alert("Invalid choice.");
    }
}

function addReservation(busName){ //add a reservation
    displayBus(busName);
    let seatNumber = parseInt(prompt(Choose a seat to reserve for ${busName}:)) - 1;
    if (buses[busName][seatNumber] === null) {
        let customerName = prompt("Enter the customer's name: ");
        buses[busName][seatNumber] = customerName;
        alert(Reservation made for ${customerName} at seat ${seatNumber + 1} in ${busName}.);
    } else {
        alert("Sorry, that seat is already taken.");
    }
    continueOrNot();
}

function removeReservation(busName){ //to remove a reservation
    displayBus(busName);
    let seatNumber = parseInt(prompt(Choose a seat to remove reservation for ${busName}:)) - 1;
    if (buses[busName][seatNumber] !== null) {
        let customerName = buses[busName][seatNumber];
        let confirmation = prompt(Are you sure you want to cancel ${customerName}'s reservation at seat ${seatNumber + 1}? (y/n));
        if (confirmation.toLowerCase() === 'y') {
            buses[busName][seatNumber] = null;
            alert(Reservation for ${customerName} at seat ${seatNumber + 1} has been canceled.);
        }
    } else {
        alert("No reservation found at that seat.");
    }
    continueOrNot();
}

//If the ticket person wants to continue or go back
function continueOrNot() {
    let option = prompt("Do you want to continue? (y/n): ");
    if (option.toLowerCase() === 'y') {
        manageReservation();
    }
}

// Customer functions
function customerReservation() {
    let busChoice = prompt("Choose a bus to view available seats:\n1. Cubao\n2. Baguio\n3. Pasay");
    let busName;
    switch(busChoice) {
        case '1': busName = "Cubao"; break;
        case '2': busName = "Baguio"; break;
        case '3': busName = "Pasay"; break;
        default: alert("Invalid option."); return;
    }

    displayBus(busName);
    if (buses[busName].every(seat => seat !== null)) {
        alert("Sorry, this bus is fully booked.");
    } else {
        reserveSeat(busName);
    }
}

function reserveSeat(busName) {
    let seatNumber = parseInt(prompt(Choose a seat to reserve for ${busName}:)) - 1;
    if (buses[busName][seatNumber] === null) {
        let customerName = prompt("Enter your name: ");
        buses[busName][seatNumber] = customerName;
        alert(Reservation confirmed for ${customerName} at seat ${seatNumber + 1}.);
    } else {
        alert("Sorry, that seat is already taken.");
    }
    customerMainMenu();
}

function customerCancelReservation() {
    let busChoice = prompt("Which bus did you reserve in? (1) Cubao (2) Baguio (3) Pasay");
    let busName;
    switch(busChoice) {
        case '1': busName = "Cubao"; break;
        case '2': busName = "Baguio"; break;
        case '3': busName = "Pasay"; break;
        default: alert("Invalid option."); return;
    }

    let customerName = prompt("Enter your name: ");
    let seatIndex = buses[busName].indexOf(customerName);
    if (seatIndex !== -1) {
        let confirmation = prompt(Are you sure you want to cancel your reservation at seat ${seatIndex + 1}? (y/n));
        if (confirmation.toLowerCase() === 'y') {
            buses[busName][seatIndex] = null;
            alert(Your reservation at seat ${seatIndex + 1} has been canceled.);
        }
    }else{
        alert("No reservation found under your name.");
    }
    customerMainMenu();
}

// Main menu loop
function customerMainMenu() {
    let choice = prompt("Choose an action:\n1. Reserve\n2. Cancel Reservation\n3. Exit");
    if (choice === '1') {
        customerReservation();
    } else if (choice === '2') {
        customerCancelReservation();
    } else if (choice === '3') {
        return;
    } else {
        alert("Invalid option.");
        customerMainMenu();
    }
}

// Main function
function main() {
    let userType = prompt("Are you a (1) Ticket Person or (2) Customer? (Enter 1 or 2): ");
    if (userType === '1') {
        if (authenticateUser()) {
            while (true) {
                let action = prompt("1. View Bus\n2. Manage Bus\n3. Logout");
                if (action === '1') {
                    let busName = prompt("Enter the bus name to view (Cubao, Baguio, Pasay): ");
                    if (buses[busName]) {
                        displayBus(busName);
                    } else {
                        alert("Invalid bus name.");
                    }
                } else if (action === '2') {
                    manageReservation();
                } else if (action === '3') {
                    break;
                } else {
                    alert("Invalid option.");
                }
            }
        } else {
            alert("Authentication failed!");
        }
    } else if (userType === '2') {
        customerMainMenu();
    } else {
        alert("Invalid option.");
    }
}

// Start program
main();