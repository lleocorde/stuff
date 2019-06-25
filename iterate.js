function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            console.log(fn(active + rest[0], rest.slice(1), a))
            fn(active, rest.slice(1), a);
            console.log(fn(active, rest.slice(1), a))
        }
        return a;
    }
    return fn("", str, []);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function spaceSplit(str) {
  return str.split(" ")
}

readline.question(`Enter a single string of characters to iterate:\n`, (ustr) => {
  console.log(`Iterating ${spaceSplit(ustr)}...\n\n`)
  //console.log(combinations(spaceSplit(ustr)))
  readline.close()
})
