const fs = require('fs')
const file = fs.createWriteStream('./big.txt')

for (let i = 0; i < 10000; i++) {
    file.write('안녕하세요. 엄청나게 큰파일을 만듭니다')
}
file.end()