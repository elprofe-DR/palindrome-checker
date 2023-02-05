$(document).ready(() => {
  const btn = document.querySelector('.white')
  const result = document.querySelector('.result')

  $(btn).on('click', function palindrome() {
    //this grabs the input value and stores it in the variable word
    const word = document.querySelector('input').value
    //this mesures the lenght of the word in the input field
    const length = word.length
    //this grabs the word in the input field and returns the first half of the word or number and turns it to lower case
    const start = word.substring(0, Math.floor(length / 2)).toLowerCase()
    //this grabs the word in the input field and returns the last half of the word or number and turns it to lower case
    const end = word.substring(length - Math.floor(length / 2)).toLowerCase()
    //this is used to fip the last half characters to see if they are equal to the first half
    const flip = [...end].reverse().join("")
    // this is the if statament that'll determine if the word/number is a palindrome or not
    if (start === flip) {
      $(result).text(`${word.toUpperCase()} is a palindrome`)
    } else {
      $(result).text(`${word.toUpperCase()} is not a palindrome`)
    }

    if (!start) {
      $(result).text("please type something")
    }

  })


});
