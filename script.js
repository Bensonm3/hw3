


// DOM
let resultsel = document.getElementById('results')
let lengthel = document.getElementById('length')
let uppercaseel = document.getElementById('uppercase')
let lowercaseel = document.getElementById('lowercase')
let numbersel = document.getElementById('numbers')
let specialcharsel = document.getElementById('specialchars')
let generateel = document.getElementById('generate')
let copyel = document.getElementById('copy')



// Character Generators
function getRandomlower(numChars) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48)
}

function getRandomspecialchar() {
    let specialchar = '!"#$%&(*+,-./:;<=>?@[\]^_`{|}~';
    return specialchar[Math.floor(Math.random() * specialchar.length)];
}

// User Input Password characteristics
function getPwdLength(){
    let length = prompt("How long do you want your password to be? (8 - 128)")
    return length
}

function getNumericCharacters(){
    let numerics = prompt("Do you want digits in your password? (0-9)? Y/N");
    return numerics
    
}

function getSpecialCharacters(){
    let specialCharacters = prompt("Do you want special characters? Y/N")
    return specialCharacters
}

function getUpperCharacters(){
    let upperChars = prompt("Do you want uppercase characters? Y/N")
    return upperChars
}

function getLowerChars(){
    let lowerchars = prompt("Do you want lowercase characters? Y/N")
    return lowerchars
}

function makePassword(){
    let length = getPwdLength()
    let numerics = getNumericCharacters()
    let specialChars = getSpecialCharacters()
    let upperchars = getUpperCharacters()
    let lowerchars = getLowerChars()
    
    // Password characteristics entry checks
    if (length < 8 || length > 128) {
        alert("The number of characters must be between 8 and 128, lets try that again..")
        length = getPwdLength()
    }
    if (isNaN(length) == true) {
        alert("Your length has to be a number! Lets try that again..")
        length = getPwdLength()
    }
    if (numerics === "N" && specialChars === "N" && upperchars === "N" && lowerchars == "N") {
        alert("You have to pick at least one character type!")
        numerics = getNumericCharacters()
        specialChars = getSpecialCharacters()
        upperchars = getUpperCharacters()
        lowerchars = getLowerChars()
    }

    if (numerics !=="Y" && numerics !=="N") {
        alert("That wasnt a Y or N for whether you want numbers. Lets try again, remember your input is case sensitive")
        numerics = getNumericCharacters()
    }
    if (specialChars !=="Y" && specialChars !=="N") {
        alert("That wasnt a Y or N for whether you want special characters. Lets try again, remember your input is case sensitive")
        numerics = numerics
        specialChars = getSpecialCharacters()
    }
    if (upperchars !=="Y" && upperchars !=="N") {
        alert("That wasnt a Y or N for whether you want uppercase characters. Lets try again, remember your input case sensitive")
        numerics = numerics
        specialChars = specialChars
        upperchars = getUpperCharacters()
    }
    if (lowerchars !=="Y" && lowerchars !=="N") {
        alert("That wasnt a Y or N for whether you want lowercase characters. Lets try again, remember your input is case sensitive")
        numerics = numerics
        specialChars = specialChars
        upperchars = upperchars
        lowerchars = getLowerChars()
    }
   

    let allowedFunctions = []

    if (numerics === "Y") {
        allowedFunctions.push(getRandomNumber)
    }

    if (specialChars === "Y") {
        allowedFunctions.push(getRandomspecialchar)
    }

    if (lowerchars === "Y") {
        allowedFunctions.push(getRandomlower)
    }

    if (upperchars === "Y") {
        allowedFunctions.push(getRandomupper)
    } 


    let password = []
    for (var i = 0; i < allowedFunctions.length; i++) { 
        let newChar = allowedFunctions[i]()
        password.push(newChar)
    }

    for (var i = 0; i < length - allowedFunctions.length; i++) {
        let newChar = allowedFunctions[Math.floor(Math.random() * allowedFunctions.length)]()
        password.push(newChar)

    }

    return password.join("")

}