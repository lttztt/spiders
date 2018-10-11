let fs = require('fs');
let path = require('path');
let fileName = 'thumb_2018101119980407.jpg';
let newName = fileName.substring(6);
let sourceFile = path.join(__dirname+'/images/906/', fileName)
let destPath = path.join(__dirname, "/images/906/", newName)
console.log(__dirname)
let readStream = fs.createReadStream(sourceFile)
let writeStream = fs.createWriteStream(destPath)
readStream.pipe(writeStream)
