const {readFile, writeFile } = require('fs').promises;
const start = async () => {
    try {
        const first = await readFile('C:/Users/LOQ/Desktop/js backend/build-inModules/content/first.txt', 'utf-8');
        const second = await readFile('C:/Users/LOQ/Desktop/js backend/build-inModules/content/second.txt', 'utf-8');
        console.log(`${first} ${second}`);
        await writeFile(`./build-inModules/content/subfolder/result.txt`, `${first} ${second}`);
    } catch (error) {
        console.log(error);
    }
}
start();