var fs = require("fs");     //添加fs模块

var copyImg = function(list){

	for (var i = list.length - 1; i >= 0; i--) {
		var fromImg = "./images/" + list[i];
		var targleName = list[i].substr(list[i].lastIndexOf('_') + 1);
		fs.readFile(fromImg, function(err,originBuffer){
			fs.writeFile("./images/" + targleName, originBuffer,function(err){
        if (err) {
            console.log(err)
        }
	    });

			var base64Img = originBuffer.toString("base64");                //base64 图片编码
	    var decodeImg = new Buffer(base64Img,"base64");                  //new Buffer(string, encoding)
	    fs.writeFile("./images/" + targleName ,decodeImg,function(err){        // 生成图片3(把base64位图片编码写入到图片文件)
	        if (err) {console.log(err)}
	    })
		}
	}
}