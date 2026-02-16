const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8',  (err, result) => {
    if(err) {
        console.error("Problem reading first file. Error: ",err);
        return;
    }

    const first = result;
    // console.log(result);

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log("Problem reading second file. Error: ",err);
            return;
        }
        const second = result;
        // console.log(result);

        writeFile("./content/result.txt", `The result of the syncronus function is : ${first} ${second}`, (err) => {
            if(err) {
                confirm.error("Problem in writing the file. Error: ", err);
                return;
            }
            readFile("./content/result.txt", 'utf-8', (err, res) => {
                if(err) {
                    confirm.error("Problem reading the result. Error: ", err);
                    return;
                }
                const finalFile = res;
                console.log(finalFile);
            })
        });
    })
})