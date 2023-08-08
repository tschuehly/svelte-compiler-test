const svelte = require('svelte/compiler')

const fs = require('fs')
fs.readFile('src/app.svelte',
    (err, inputD) => {
        if (err) throw err;
        console.log(inputD.toString());
        const {js, css, ast, warnings, vars, stats} =
            svelte.compile(inputD.toString(),{generate: 'dom'})
        console.log(js.code)
        fs.writeFile('app.js', js.code, function (err) {
            console.log("Data written successfully!");

        });
    })