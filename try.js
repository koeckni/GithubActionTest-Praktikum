var strng = "Buh001"
var last = strng.length - 1

function incrementString (strng) {
    strng[last] = strng[last] + 2;
    return strng[last];
}

console.log(incrementString(strng));