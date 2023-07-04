// Function Declaration
function isEven(number) {
  if (number % 2) {
    console.log('true');
  } else {
    console.log('false');
  }
}
isEven(5);
isEven(2);
isEven(4);
isEven(3);

// 2nd problem

// const isCapitalized = function (string) {
//   const  isCapitalized.map(string)
// };

// Function Expressionh

const isEven1 = function (number) {
  if (number % 2) {
    console.log('true');
  } else {
    console.log('false');
  }
};
isEven1(2);
isEven1(4);
isEven1(3);

// Arrow Function

const isEven3 = number => {
  if (number % 2) {
    console.log('true');
  } else {
    console.log('false');
  }
};
isEven3(2);
isEven3(4);
isEven3(3);
