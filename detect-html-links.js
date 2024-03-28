const readline = require('readline');

function processData(input) {
    const Regex = /<a href="(.*?)".*?>([\w ,./]*)(?=<\/)/g;
    const matches = input.matchAll(Regex);
    for (const match of matches) {
        const link = match[1];
        const att = match[2].trim();
        console.log(`${link},${att}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    const input = inputLines.join('\n');
    processData(input);
});
