// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
// 	- Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result

function compareTwoArraysOfNumbers(randomNumberArray, userInputNumberArray) {
  let count = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    const randomNumber = randomNumberArray[i];
    const userInputNumber = userInputNumberArray[i];

    if (randomNumber === userInputNumber) {
      count += 1;
    }
  }
  return count;
}

// const result = compareTwoArraysOfNumbers([23, 45, 7, 9, 12], [23, 8, 6, 9, 10]);
// console.log("RESULT: ", result);

function buildResultMessage(result) {
  return `Your result: ${result}`;
}

function getUserInput() {
  const userResponse = prompt("Enter your random numbers");
  // const userResponse = "23, 8, 6, 9, 10"
  const userInputToArray = userResponse.split(",");

  console.log(userInputToArray);

  let userInputArray = [];

  for (let i = 0; i < userInputToArray.length; i++) {
    const userInput = userInputToArray[i];
    const userInputToNumbers = Number(userInput);

    console.log(userInputToNumbers);
    userInputArray.push(userInputToNumbers);
  }
  return userInputArray;
}
// const output = getUserInput()
// console.log("OUTPUT: ", output);

setTimeout(() => {
  const userInput = getUserInput();

  const result = compareTwoArraysOfNumbers([23, 45, 7, 9, 12], userInput);

  const resultMessage = buildResultMessage(result);

  alert(resultMessage);
}, 3000);
