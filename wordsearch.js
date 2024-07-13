//IMPORT OUR PREVIOUSLY CREATED TRANSPOSE FUNCTION
const transpose = require('./transpose');

const wordSearch = (letters, word) => {
  // join the rows of matrix to create easilly searchable strings
  const horizontalJoin = letters.map(ls => ls.join(''));
	// check each row of the matrix to see if the specified word is present
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
	// transpose the matrix so we can check columns
  const lettersTransposed = transpose(letters);
	// join the columns to create easilly searchable strings
  const verticalJoin = lettersTransposed.map(ls => ls.join(''));
	// check each colum of the matrix to see if the specified word is present
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
	// if word is not found, return false
  return false;
};

module.exports = wordSearch;