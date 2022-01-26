// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
// 	- Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result


// My solution early days into learning JAVASCRIPT

// function randomNumberSelected() {

//     let randomNumber = [];
  
//     for (let i = 0; i < 4; i++) {
//       const generatedRandomNumbers = Math.floor(Math.random() * 100);
//       console.log("generatedRandomNumbers: ", generatedRandomNumbers);
//       randomNumber.push(generatedRandomNumbers);
//     }
//     return randomNumber;
//   }

//   const checkRandomNumber = randomNumberSelected();
//   console.log("checkRandomNumber: ", checkRandomNumber);

//   alert(checkRandomNumber);

//   const promptOutput = setTimeout(
//     prompt("Enter the numbers in the right order"),
//     15000
//   );

//   if (checkRandomNumber === promptOutput){
//     alert("Congratulations, you won");
//   } else {
//     alert("You lost, try again");
//   }
  
