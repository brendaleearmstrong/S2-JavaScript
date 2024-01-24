
function reverseNumber(n) {
    var result = parseInt(n.toString().split('').reverse().join(''));
    console.log(result);
    return result;
}

function sortString(str) {
    var result = str.split('').sort().join('');
    console.log(result);
    return result;
}

function getFileExtension(filename) {
    var result = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    console.log(result);
    return result;
}

function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var result = mm + '-' + dd + '-' + yyyy; // format: mm-dd-yyyy
    console.log(result);
    return result;
}

function capitalize(str) {
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(result);
    return result;
}

function checkPeriod(str) {
    var result = str.includes('.') ? 'contain period' : 'no period';
    console.log(result);
    return result;
}

function putSuffix(num) {
    var result;
    if (num === undefined) return '';
    var j = num % 10,
        k = num % 100;
    if (j == 1 && k != 11) {
        result = num + "st";
    } else if (j == 2 && k != 12) {
        result = num + "nd";
    } else if (j == 3 && k != 13) {
        result = num + "rd";
    } else {
        result = num + "th";
    }
    console.log(result);
    return result;
}

// Test cases
console.log("Reverse Number:");
reverseNumber(15234);
console.log("Sort String Alphabetically:");
sortString('keyincollege');
console.log("Get File Extension:");
getFileExtension('photo.png');
console.log("Get Current Date:");
getCurrentDate();
console.log("Capitalize First Letter of String:");
capitalize('hello');
console.log("Check for Period in String:");
checkPeriod('This is a sentence.');
console.log("Number Suffix:");
putSuffix(1);
putSuffix(2);
putSuffix(3);
putSuffix(11);
putSuffix(12);
putSuffix(13);
putSuffix(21);
