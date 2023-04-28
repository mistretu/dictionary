let dictionary = {};

function saveWord() {
  let newWord = document.getElementById("word").value.toLowerCase();
  dictionary[newWord] = true;
  alert(`The word "${newWord}" was added to the dictionary.`);
  document.getElementById("word").value = "";
}

function searchWord() {
  let searchWord = document.getElementById("search-word").value.toLowerCase();
  if (dictionary[searchWord]) {
    alert(`The word "${searchWord}" was found in the dictionary.`);
  } else {
    alert(`The word "${searchWord}" was not found in the dictionary.`);
  }
}
