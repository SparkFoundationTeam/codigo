function randomizeArray() {}

export default randomizeArray = array => {
  let newArray = [...array];

  let currentIndex, randomizingIndex;

  for (currentIndex = newArray.length - 1; currentIndex > 0; currentIndex--) {
    randomizingIndex = Math.floor(Math.random() * (currentIndex + 1));
    [newArray[randomizingIndex], newArray[currentIndex]] = [newArray[currentIndex], newArray[randomizingIndex]];
  }

  return newArray;
};
