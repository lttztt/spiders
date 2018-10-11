let fs = require('fs');
let path = require('path');
let fileName = '123.jpg'
let sourceFile = path.join(__dirname+'/public/upload/tt01/', fileName)
let destPath = path.join(__dirname, "/public/upload/tt02/", fileName)
console.log(__dirname)
let readStream = fs.createReadStream(sourceFile)
let writeStream = fs.createWriteStream(destPath)
readStream.pipe(writeStream)
