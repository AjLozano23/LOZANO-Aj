function createNode(value){
    return{
        value: value,
        next: null
    };
}

function createLinkedList(){ // linked list constructor
    return{
        head: null,
        size: 0
    };
}

// append function to add new node to the linked list
function append(linkedList, value){
    const newNode = createNode(value);

    if (linkedList.head === null){
        linkedList.head = newNode;
    }else{
        let current = linkedList.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    linkedList.size++;
    print(linkedList);   // call the print function to display the list
}

function print(linkedList) {
    if (linkedList.head === null) {
        console.log("The list is empty.");
        return;
    }
    
    let current = linkedList.head;
    let result = "";
    
    while (current !== null) {
        result += current.value + " -> "; //Traverse the list and construct the result string
        current = current.next;
    }
    console.log(result.slice(0, -4));  // Remove the last ' -> ' and print the list
}

const list = createLinkedList(); // new linked list

//append items to the list
append(list, "Data Structures - Array");
append(list, "Variable Type - Integer");
append(list, "Sorting Algorithm - Bubble Sort");
