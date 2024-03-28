function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines.shift());
    const nline = lines.slice(0, n).join('\n');
    const q = parseInt(lines[n]);

    for (let i = n + 1; i < n + 1 + q; i++) {
        const s = lines[i];
        const regex = new RegExp(`\\b(${s})\\b`, 'g');
        const matches = nline.match(regex) || [];
        console.log(matches.length);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
