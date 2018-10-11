let fs = require('fs');
let path = require('path');

var dir = '906'
console.log("查看目录目录");
fs.readdir("./images/" + dir,function(err, files){
   if (err) {
       return console.error(err);
   }
    var arr = files.map((item)=>item.substring(6));
    console.log(arr)
});



var copyImg = function(dir, fileName){
	let newName = fileName.substring(6);
	let sourceFile = path.join(__dirname+'/images/' + dir + '/', fileName)
	let destPath = path.join(__dirname+'/images/' + dir + '/', newName)
	console.log(__dirname)
	let readStream = fs.createReadStream(sourceFile)
	let writeStream = fs.createWriteStream(destPath)
	readStream.pipe(writeStream)
}





