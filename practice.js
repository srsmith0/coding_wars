// 0.
// Write a function called dividez that takes two numbers and returns the result of division
// dividez(4,2) => 2
  
function dividez (num1, num2) {
  if (typeof num1 !== "number" && num2 !== "number"){
    return "!!!ERROR!!!"
  }
  return num1 / num2;
}

function test() {
let result = dividez(4 ,2) 
  if (result !== 2) {
  console.log("invalid. the answer should be 2")
  } else {
console.log("test passed")
}
}
// 1.
// Write a function named reverseString that takes a string and reverses it.
  const reverseString = function (string) {
    if (typeof string !== "string"){
      return "!!!ERROR!!!"
    }
    let x = string.split("");
    let y = x.reverse();
    let r = y.join("");
    return r;
  }
  function test1() {
  let result = reverseString('yoyo')
  if (result !== 'oyoy'){
      console.log("invalid. the answer should be 'oyoy'")
  } else {
  console.log('test passed')
  }
}
  
// 2.
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
  function arrayToString (arr) { 
    if (typeof arr === "object"){
      return arr.join("-");
  } else {
    return "!!!ERROR!!!"  
   }
  }
  function test3() {
  let result = arrayToString('yoyo')
  if (result !== 'yo-my-yoyo'){
      console.log("invalid. the answer should be 'yo-my-yoyo'")
  } else {
  console.log('test passed')
  }
}
 
// 3.
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
const sumArray = (arr) => {
  if (typeof arr === "object"){
    return ( arr.reduce((a, b) => a + b, 0))
  } else { 
  return "!!!ERROR!!!"
  }
}
function test4() {
  let result = sumArray([1,2,3]) 
    if (result !== 6) {
    console.log("invalid. the answer should be 6")
    return ;
  } else {
  console.log("test passed")
  }
}


// 4.
// Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']
  
  arr1= [1,2,3,"four"]    

  const removeItemFromArray = function (arr, index){
    if (typeof arr === "object" && typeof index === "number"){
       let x = arr
       let y = x.splice(index, 1)
       return x
  } else {
    return "!!!ERROR!!!"
    }
  }
  function test5() {
    let result = removeItemFromArray(arr1, 3)
    if (result === [1,2,3]){
        console.log("test passed")
    }
    else {console.log('Test has failed!')}
  }

 
 
// 5.
// Write a function numToWord that takes a single number and returns the number as the word (only needs to work for 0-9)
// numToWord(0) => 'zero'
let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const numToWord = function(num) {
  if (typeof num !== "number") {
    return "!!!ERROR!!!"
  }
  else if (num < 0) { 
    return "Plus enter a postive number"
  }
  else if (num === 0) {
    return "zero"
  }
  else {
    return words[num]
  }
}

function test6() {
  let result = numToWord("six")
  if (result === "!!!ERROR!!!"){
      console.log("invalid")
  }
  else {console.log('test passed')}
}


// 6.
// write a function wordCount that takes a string a returns the number of words
// wordCount('there are four in') => 4
  function wordCount (string) {
    if (typeof string === "string"){
      return string.split(' ').length
    }
    return "!!!ERROR!!!"
  }

  function test7() {
    let result = wordCount("there are four in")
    if (typeof result !== "number"){
        console.log("test passed")
    }
    else {console.log('invalid')}
  }

// 7.
// write a function fullName that takes in a object with first_name and last_name and returns the full name as string
// fullName({first_name:'karate',last_name:'kid'}) => 'karate kid'
  const fullName = function (obj) {
    if (typeof obj === "object"){
      return `${obj.firstName} ${obj.lastName}` 
    }
    return "!!!ERROR!!!"
  }

  function test8() {
    let result = fullName({first_name:'karate',last_name:'kid'})
    if (typeof result !== "string"){
        console.log("test passed")
    }
    else {console.log('invalid')}
  }
 
// 8.
// write a function fullNameArray that takes an array of objects from 7 and returns a new array of full_name
// fullNameArray(
// [{first_name:'karate',last_name:'kid'},
// {first_name:'jim',last_name:'bob'}]
//) => ['karate kid', 'jim bob']
let f = [{first_name:'karate',last_name:'kid'},
   {first_name:'jim',last_name:'bob'}, 1]

   function fullNameArray (obj) {
    if (typeof obj === "object"){
      return `${obj.first_name} ${obj.last_name}` 
    }
    return "!!!ERROR!!!"
   }

  function test9() {
  let result = f.map(fullNameArray)
  if (result === "!!!ERROR!!!"){
      console.log("invalid")
  }
  else {
    console.log('test passed')
  }
}
