let numbers = []; //empty array to store the numbers

for (let i = 0; i < 10; i++) {
  let num = prompt("Enter a number:"); //input a string
  numbers.push(Number(num)); //convert the input into int then push to the array
}

function bubbleSort(arr){
  let n = arr.length;
  let isSwapped;

  for (let i = 0; i < n; i++){
    isSwapped = false;
    
    for (let j = 0; j < n - 1 - i; j++){
      console.log(`Comparing: ${arr[j]} and ${arr[j + 1]}`); // print comparison process

      if (arr[j] > arr[j + 1]){ //if current element is greater than the next swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) //if not isSwapped the array is sorted
      break;
  }
}

console.log("Unsorted array:", numbers);

bubbleSort(numbers);// call bubbleSort function to sort the array

//print sorted array
console.log("Sorted array:", numbers);
