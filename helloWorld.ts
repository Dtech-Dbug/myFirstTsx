// TODO : reverse numbers and palindrome checker

// ! set the type of variables, for DRY code

type digits = number;
type message = string;

function reverse(number: digits) {
  //* Declare && init the variables
  let reversedNumber: digits = 0;
  let remainder: digits;
  let nums = number;

  while (nums != 0) {
    // ? step 1 : grab the last digit of the number
    remainder = nums % 10;

    // ? step 2 : store them in the reversedNumber variable
    reversedNumber = reversedNumber * 10 + remainder;

    // ? step 3 : reduce the nums and iterate through the decreasing nums, else the loop becomes infinte
    nums = Math.floor(nums / 10);
  }

  // * defining the text varible to be of type message which is text (def. line : 6)
  let text: message;

  // * create an object for a decent representation in the console, using console.table
  let output = {
    number: number,
    reversed: reversedNumber,
    palindrome: text,
  };

  reversedNumber == number
    ? (output.palindrome = "It is a palindrome")
    : (output.palindrome = "It is not a palindrome");

  console.table(output);
}
