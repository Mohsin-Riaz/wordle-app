const wordArray = ['BEFORE', 'SHOULD', 'CHANGE', 'LITTLE', 'PEOPLE', 'SYSTEM'];
const selectWordIndex = Number(Math.floor(Math.random() * wordArray.length));
const selectedWord = wordArray[selectWordIndex];
export default selectedWord;
