export default randomizeArray = array => {
  let newArray = [...array];

  console.log('newArray Before : ', newArray);

  let currentIndex, randomizingIndex;

  for (currentIndex = newArray.length - 1; currentIndex > 0; currentIndex--) {
    randomizingIndex = Math.floor(Math.random() * (currentIndex + 1));
    [newArray[randomizingIndex], newArray[currentIndex]] = [newArray[currentIndex], newArray[randomizingIndex]];
  }

  console.log('newArray After : ', newArray);

  return newArray;
};

// testing pull to local machine
// testing push from local machine
