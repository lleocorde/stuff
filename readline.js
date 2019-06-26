const readline = require('readline');
var pdc = []

async function getAnswers() {
     const diceAnswer = await getDiceAnswer();

     //this line won't execute until the answer is ready
     pdc = diceAnswer.split(' ');
     console.log(pdc)
}

function getDiceAnswer() {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });
        rl.question("Add dice separated by spaces: ", (answer) => {
            resolve(answer);
            //console.log("Will keep dices: ", answer);
            rl.close();
        });
    });
}

//getDiceAnswer();

getAnswers().then(dice => {
  //lines = dice
  console.log(`The array is ${lines.length} items long.`);
  var arrLen = Math.pow(lines.length)
}).catch(() => {
  console.log('Something went wrong...')
});
