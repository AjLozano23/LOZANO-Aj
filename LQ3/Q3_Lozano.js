const users = [  // Data storage for sellers and categories
    { username: "seller1", password: "password123" },
    { username: "seller2", password: "password456" }
];

const categories = {
    Pasta: [
        { name: "Spaghetti", price: 8.99 },
        { name: "Lasagna", price: 10.99 },
        { name: "Fettuccine Alfredo", price: 9.49 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 5.99 },
        { name: "Cheesecake", price: 6.99 },
        { name: "Panna Cotta", price: 4.99 }
    ],
    Drinks: [
        { name: "Lemonade", price: 2.99 },
        { name: "Iced Tea", price: 2.49 },
        { name: "Soda", price: 1.99 }
    ]
};

let cart = [];

//authenticate Seller
function authenticateSeller() {
    const username = prompt("Enter username: ");
    const password = prompt("Enter password: ");
    return users.some(user => user.username === username && user.password === password);
}

// Seller menu
function sellerMenu() {
    while (true) {
        const choice = prompt("1. Logout\n2. Add Item\n3. Remove Item\nChoose an option: ");
        
        if (choice === '1') return;
        if (choice === '2') addItem();
        if (choice === '3') removeItem();
    }
}

// add item to a category
function addItem() {
    const category = prompt("Which category to update? (Pasta, Desserts, Drinks): ");
    if (!categories[category]) {
        alert("Invalid category.");
        return;
    }

    const name = prompt("Enter item name: ");
    const price = parseFloat(prompt("Enter item price: "));
    
    categories[category].push({ name, price });
    alert(${name} has been added to ${category} category.);

    if (prompt("Do you want to add another item? (y/n): ").toLowerCase() !== 'y') {
        return;
    }
}

function removeItem() { //Remove item from a category
    const category = prompt("Which category to update? (Pasta, Desserts, Drinks): ");
    if (!categories[category]) {
        alert("Invalid category.");
        return;
    }

    const name = prompt("Enter item name to remove: ");
    const index = categories[category].findIndex(item => item.name === name);

    if (index !== -1) {
        categories[category].splice(index, 1);
        alert(${name} has been removed from ${category} category.);
    } else {
        alert("Item not found.");
    }

    if (prompt("Do you want to remove another item? (y/n): ").toLowerCase() !== 'y') {
        return;
    }
}

//custtomer enu
function customerMenu() {
    while (true) {
        const choice = prompt("1. Order\n2. View Cart\n3. Cancel\nChoose an option: ");
        
        if (choice === '1') orderItem();
        if (choice === '2') viewCart();
        if (choice === '3') return;
    }
}

// order item from a category
function orderItem() {
    const category = prompt("Choose a category (Pasta, Desserts, Drinks): ");
    if (!categories[category]) {
        alert("Invalid category.");
        return;
    }

    const items = categories[category];
    alert(Items available in ${category}:);
    items.forEach((item, index) => {
        alert(${index + 1}. ${item.name} - $${item.price});
    });

    const choice = parseInt(prompt("Choose an item by number: ")) - 1;
    if (choice < 0 || choice >= items.length) {
        alert("Invalid choice.");
        return;
    }

    const quantity = parseInt(prompt("Enter quantity: "));
    if (quantity <= 0) {
        alert("Invalid quantity.");
        return;
    }

    const item = items[choice];
    cart.push({ name: item.name, price: item.price, quantity });

    alert(${item.name} (x${quantity}) has been added to your cart.);
}

// ffunction to view cart
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let total = 0;
    let cartSummary = "Your Cart:\n";
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart.length - 1; j++) { //cart items by name using bubble sort
            if (cart[j].name > cart[j + 1].name) {
                let temp = cart[j];
                cart[j] = cart[j + 1];
                cart[j + 1] = temp;
            }
        }
    }

    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        cartSummary += ${item.name} - $${item.price} x ${item.quantity} = $${totalPrice}\n;
        total += totalPrice;
    });

    cartSummary += Total: $${total};
    alert(cartSummary);

    const action = prompt("Choose an action: 1. Print, 2. Add more, 3. Remove, 4. Cancel");
    
    if (action === '1') {
        printCart();
    } else if (action === '2') {
        return;
    } else if (action === '3') {
        removeItemFromCart();
    } else if (action === '4') {
        return;
    }
}

// to print the cart contents
function printCart() {
    let total = 0;
    let cartSummary = "Receipt:\n";
    
    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        cartSummary += ${item.name} - $${item.price} x ${item.quantity} = $${totalPrice}\n;
        total += totalPrice;
    });

    cartSummary += Total: $${total};
    alert(cartSummary);
}

//remove item from the cart
function removeItemFromCart() {
    const itemName = prompt("Enter the item name to remove from cart: ");
    const index = cart.findIndex(item => item.name === itemName);

    if (index !== -1) {
        cart.splice(index, 1);
        alert(${itemName} has been removed from your cart.);
    } else {
        alert("Item not found in cart.");
    }
}

// Main function
function main() {
    while (true) {
        const choice = prompt("1. Seller\n2. Customer\n3. Exit\nChoose an option: ");
        
        if (choice === '1') {
            if (authenticateSeller()) {
                alert("Welcome, Seller!");
                sellerMenu();
            } else {
                alert("Invalid credentials.");
            }
        } else if (choice === '2') {
            customerMenu();
        } else if (choice === '3') {
            alert("Exiting program.");
            break;
        }
    }
}

main();