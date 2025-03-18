// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: the function takes in a string 
O: returns the length of the string
C:
E:
*/

function length(string) {
    return string.length;
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: the function takes in a string 
O: returns the string converted to lowercase
C:
E:
*/

function toLowerCase(string) {
    return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: the function takes in a string 
O: returns the string converted to uppercase
C: 
E:
*/

function toUpperCase(string) {
    return string.toUpperCase();
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: the function takes in a string 
O: returns the string forced to lowercase with the spaces replaced with dahses
C: must work for strings with multiple words
E:
*/

function toDashCase(string) {
       while (string.includes(" ")) {
        string = string.replace(" ", "-");
    }
    return toLowerCase(string);
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: the function takes in a string and a single character 
O: returns true of the strings begins with the character
C: the function is case insesitive
E: 
*/

function beginsWith(string, char) {
    char = char.toLowerCase();
    string = string.toLowerCase();
    return string[0] === char[0];
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: the function takes in a string and a single character 
O: returns true of the string ends with the character
C: the function is case insesitive
E: 
*/

function endsWith(string, char) {
    char = char.toLowerCase();
    string = string.toLowerCase();
    return string[string.length - 1] === char[0];
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: the function takes in two strings
O: returns the strings concatenated into one
C:
E:
*/

function concat(stringOne, stringTwo) {
    return stringOne + stringTwo;
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: the function takes in multiple strings values and store them in an array
O: return all strings joined together
C: 
E:
*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    console.log(args);
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: the function takes in two strings
O: returns the longest of the two
C:
E: return "both strings have the same lenght" if that is the case
*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length >= stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: the function takes in two strings
O: return 1 if the first string is higher in alphabetical order,
   return -1 if the second is higher in alphabetical order than the first,
   return 0 if they're equal.
C: 
E:
*/

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne > stringTwo) {
        return -1;
    } else {
        return 0
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: the function takes in two strings
O: return -1 if the first string is higher in alphabetical order,
   return 1 if the second is higher in alphabetical order than the first,
   return 0 if they're equal.
C:
E:
*/

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else {
        return 0
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}