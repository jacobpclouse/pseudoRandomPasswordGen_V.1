newPassword = "";
tempVar = "";
specChar = ["+","-","*","/","#","@","!","?","~","^"];
upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowerLetter = ["a","n","o","p","q","r","s","t","u","v","w","x","y","z","b","c","d","e","f","g","h","i","j","k","l","m"];
yesUpper = false;
yesLower = false;

/* This for loop sets the length to 12 (more with special chars), lets us loop through the individual digit 
selection process */
for (i = 0; i < 13; i++){

    /* This will give us a random number between 0 and 1, multiply it by 10, 
    subtract 1 (so that we don't get any double digit numbers), remove the
    decimals, and find the absolute value (no negative numbers) */
    tempVar = Math.abs(Math.floor(Math.random() * 10 - 1));


    /* Checking to see if the remainder of the current  */
    if ((i % 4) == 0) {
        newPassword += specChar[tempVar];
    }

    /* Ensuring that we have a uppercase letter */
    if ((i % 3) == 0 || (i > 8 && yesUpper == false)) {
        newPassword += upperLetter[tempVar];
        yesUpper = true;
    }

    /* Ensuring that we have a lowercase letter */
    if ((i % 5) == 0 || (i > 8 && yesLower == false)) {
        newPassword += lowerLetter[tempVar];
        yesLower = true;
    }

    newPassword += tempVar;
}

console.log(newPassword);
alert(newPassword);