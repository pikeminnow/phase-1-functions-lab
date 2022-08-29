// Code your solution in this file!
let start = 50;
let destination = 30;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let distance = Math.abs(42 - someValue);
    return distance;
  }
  function distanceFromHqInFeet(someValue) {
    let distance = 264 * distanceFromHqInBlocks(someValue);
    return distance;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
      let distance = 264 * Math.abs(start - destination);
      return distance;
    //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = 264 * Math.abs(start - destination);
    if (distance <= 400) {
        return 0;
      }
      else if (distance <= 2000) {
        return (distance - 400) * 0.02;
      }
      else if (distance <= 2500) {
        return 25;
      }
      else {
        return 'cannot travel that far';
  }
}