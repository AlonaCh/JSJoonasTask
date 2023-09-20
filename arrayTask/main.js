// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark'];
document.getElementById('task1').textContent = names;

// Task 2
// Print the second item of the array from the task 1.
document.getElementById('task2').textContent = names[1];
console.log(names[1]);
// Task 3
// Print the length of the array.
document.getElementById('task3').textContent = names.length;
console.log(names.length);
// Task 4
// Print the last item of the array
document.getElementById('task4').textContent = names[names.length - 1];

// Task 5
// Add Peter as the last item to the array and print the whole array
names.push('Peter');
document.getElementById('task5').textContent = names;
console.log(names);
// Task 6
// Print the array with spaces, not commas
document.getElementById('task6').textContent = names.join(' ');
console.log(names.join);
// Task 7
// Replace Mathew in the array with Lisa and Abraham 
names.splice(3, 1, 'Lisa', 'Abraham');
document.getElementById('task7').textContent = names;
console.log(names);
// Task 8
// Sort the array in the alphabetical order and print it

names.sort();
document.getElementById('task8').textContent = names;
console.log(names);
// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
/* const numbers = [1, 7, 45, 32, 27, 86];
numbers.sort((a, b) => (a - b)); // it gives a negative number that has to be before the positive number
document.getElementById('task9').textContent = numbers.join(' ');
console.log(numbers);*/
const numbers = [1, 7, 45, 32, 27, 86];
numbers.sort((a, b) => (b - a));
document.getElementById('task9').textContent = numbers.join(' ');
// Task 10
// Randomize the numbers array.
numbers.sort((a,b) => 0.5 - Math.random());
document.getElementById('task10').textContent = numbers.join(' ');
// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
numbers.sort((a, b) => (b - a));
document.getElementById('task11').textContent = `Largest: ${numbers[0]} Smallest: ${numbers[numbers.length - 1]}`