// Linear Search
function linearSearch(arr, target) {
  const startTime = performance.now();
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      const endTime = performance.now();
      console.log(`Linear Search:`);
      console.log(`FOUND ${target} at index ${i}`);
      console.log(`Time: ${endTime - startTime} milliseconds`);
      console.log(`Steps: ${steps} \n`);
      return i;
    }
    steps++;
  }
  const endTime = performance.now();
  console.log(`Linear Search:`);
  console.log(`${target} NOT FOUND in the array`);
  console.log(`Time: ${endTime - startTime} milliseconds`);
  console.log(`Steps: ${steps} \n`);
  return -1;
}

// Binary Search (assumes the array is sorted)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  const startTime = performance.now();
  let steps = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      const endTime = performance.now();
      console.log(`Binary Search:`);
      console.log(`FOUND ${target} at index ${mid}`);
      console.log(`Time: ${endTime - startTime} milliseconds`);
      console.log(`Steps: ${steps} \n`);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    steps++;
  }

  const endTime = performance.now();
  console.log(`Binary Search:`);
  console.log(`${target} NOT FOUND in the array`);
  console.log(`Time: ${endTime - startTime} milliseconds`);
  console.log(`Steps: ${steps} \n`);
  return -1;
}

// Generate a large array of random numbers
const MAX_SIZE = 1000000; // Size of the array
const arr = Array.from({ length: MAX_SIZE }, () =>
  Math.floor(Math.random() * MAX_SIZE)
);

// Sort the array for Binary Search
arr.sort((a, b) => a - b);

// Example usage
const targetNumber = Math.floor(Math.random() * MAX_SIZE);

console.log(`Searching for target: ${targetNumber} ...\n`);
linearSearch(arr, targetNumber);
binarySearch(arr, targetNumber);
