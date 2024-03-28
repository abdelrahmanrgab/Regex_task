const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processData(input) {
    const lines = input.trim().split('\n');
    const n_lines = parseInt(lines[0]);
    const regex = /^[A-Z]{5}\d{4}[A-Z]$/;

    for (let i = 1; i <= n_lines; i++) {
        const line = lines[i];
        const match = regex.test(line);

        if (match) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
