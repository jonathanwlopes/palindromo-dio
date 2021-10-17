function verifyPalindrome(string) {
  if (!string) return "String inexistente"

  return string.split("").reverse().join("") === string
}

const result = verifyPalindrome("ovo")
console.log(result)

function verifyPalindromeCompleteEdition(string) {
  if (!string) return "String inexistente"

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }

  return true
}

const resultCompleteEdition = verifyPalindromeCompleteEdition("ovo")
console.log(resultCompleteEdition)
